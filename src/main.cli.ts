import { GameGuessNumber } from './cli/commands/game-guess-number.js';
import { CLIApplication, HelpCommand, VersionCommand } from './cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new GameGuessNumber(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
