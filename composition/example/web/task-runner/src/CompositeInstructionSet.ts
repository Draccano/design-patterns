import { Instruction } from "./Instruction";

export class CompositeInstructionSet implements Instruction {
  // Our composite instruction should have children
  // that can be any implementation of Instruction
  private children: Instruction[] = [];

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  execute() {
    let successful = false;
    
    // We'll iterate through our children calling their execute method
    // We don't need to know if our child is a Composite Instruction Set
    // or just a SingleInstruction
    for (const child of this.children) {
      successful = child.execute();

      // If any of the child tasks fail, lets fail this one
      if (!successful) {
        return false;
      }
    }
    return true
  }

  // Our CompositeInstructionSet needs a public API to manage it's children
  addChild(child: Instruction) {
    this.children.push(child);
  }

  removeChild(child: Instruction) {
    this.children = this.children.filter((c) => c.name !== child.name);
  }
}