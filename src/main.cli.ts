#!/usr/bin/env node
import { CLIApplication, HelpCommand, ImprotCommand, VersionCommand } from './cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImprotCommand()
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
