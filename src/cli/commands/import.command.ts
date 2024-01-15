import { TSVFileReader } from '../../shared/types/libs/file-reader/tsv-file-reader.js';
import { Command } from './command.interface.js';

export class ImprotCommand implements Command {
  public getName(): string {
    return '--import';
  }

  execute(...parameters: string[]): void {
    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(`Can't import data from file: ${filename}`);
      console.log(`Details: ${err.message}`);
    }

  }
}
