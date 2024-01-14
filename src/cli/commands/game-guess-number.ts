import readline from 'node:readline';
import chalk from 'chalk';
import { Command } from './command.interface.js';

export class GameGuessNumber implements Command{

  constructor(
    private readonly lifeCount: number = 3
  ) { }

  private getWelcomeText() {
    return (
      `${chalk.blue(`Привет, я Кекс. Мне нравится загадывать числа.
      Всё честно: вы называете максимальное число, а я загадаю случайное
      число в этом диапазоне. Попробуйте его угадать. Количество попыток
      неограничено.`)}
      ${chalk.red(`У вас ограниченнное кол-во жизней ${this.lifeCount}, при промахе вы теряете 1 жизнь`)}`
    );
  }

  public getName(): string {
    return '--game';
  }

  private readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  public getRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  private showWinMessage = (secretNumber: number) => {
    console.log(chalk.magenta(`
      Ура! Вы угадали число.
      Я действительно загадал ${secretNumber}.
    `));

    this.readLineInterface.close();
  };

  private showLoseMessage = () => {
    console.log(chalk.red('Вы проиграли, у вас закончились жизни'));

    this.readLineInterface.close();
  };

  private checkAnswer = (secretNumber: number, lifeCount: number) => {
    this.readLineInterface.question(chalk.blue('Ваш ответ: '), (inputNumber) => {
      const userAnswer = Number.parseInt(inputNumber, 10);

      if (secretNumber === userAnswer) {
        return this.showWinMessage(secretNumber);
      }

      lifeCount--;
      if (lifeCount <= 0) {
        return this.showLoseMessage();
      }

      const lifeCountMessgae = chalk.red(`У вас осталось ${lifeCount} жизней`);
      const failAnswerResponse = [
        'Промазал. Попробуй ещё.',
        'Наводчик контужен',
        'Не хватает маны'
      ];

      console.log(chalk.red(failAnswerResponse[this.getRandomNumber(0, failAnswerResponse.length)]));
      console.log(lifeCountMessgae);
      this.checkAnswer(secretNumber, lifeCount);
    });
  };

  public startGame = () => {
    console.log(this.getWelcomeText());

    this.readLineInterface.question(chalk.blue('Максимальное число: '), (maxNumber) => {
      const myNumber = this.getRandomNumber(0, Number.parseInt(maxNumber, 10));
      this.checkAnswer(myNumber, this.lifeCount);
    });
  };

  execute(..._parameters: string[]): void {
    this.startGame();
  }
}

