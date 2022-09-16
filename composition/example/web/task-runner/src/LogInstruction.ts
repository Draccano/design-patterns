import {SingleInstruction} from './SingleInstruction';

export class LogInstructon extends SingleInstruction {
  log: string;

  constructor(name: string, log: string) {
    super(name);

    this.log = log;
  }

  execute() {
    console.log(`${this.name}: ${this.log}`);
    return true;
  }
}
