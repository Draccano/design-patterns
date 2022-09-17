import { Instruction } from "./Instruction";

export class TaskRunner {
  tasks: Instruction[];

  constructor(tasks: Instruction[]) {
    this.tasks = tasks;
  }

  runTasks() {
    for (const task of this.tasks) {
      task.execute();
    }
  }
}
