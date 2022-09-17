import { Instruction } from './Instruction';

export abstract class SingleInstruction implements Instruction {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract execute(): boolean;
}