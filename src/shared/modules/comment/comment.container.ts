import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';
import { Component } from '../../types/index.js';
import { CommentEntity, CommentModel, CommentService, DefaultCommentService } from './index.js';

export function createCommentContainer() {
  const commentContainer = new Container();

  commentContainer.bind<CommentService>(Component.OfferService).to(DefaultCommentService);
  commentContainer.bind<types.ModelType<CommentEntity>>(Component.OfferModel).toConstantValue(CommentModel);

  return commentContainer;
}
