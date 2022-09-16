/**
 * Task Runner. 🤖
 * We feed this Task Runner a set of 'Task Instructions'. 
 * But each 'Task Instruction' may have 'Sub Task Instructions', 
 * and each Sub Task Instruction might have it's own 'Sub Task Instructions'.
 * 
 * We can see already that this has the potential for 
 * being a recursive structure.
 * 
 * We don't necessarily want the 'Task Runner' to have to check at each execution 
 * of each 'Instruction' if it is 'Composite Instruction Set' or a 'Single Instruction'.
 * 
 * The Composite Instruction Set should contain a list of children of either 
 * Composite Instruction Set or Single Instruction that the Task Runner 
 * doesn't need to know about.
 * 
 * Therefore, to tackle this, we would define a common Instruction interface 
 * containing an execute() method that the Composite Instruction Set 
 * and the Single Instruction implement.
 * 
 * The Task Runner will Iterate through a list of Instructions 
 * calling the execute() method.
 * 
 * Single Instructions will execute their custom logic, whilst 
 * Composite Instruction Sets will Iterate through their children 
 * and call their execute() method.
 * 
 * They don't need to know if their children are Composite or Single Instructions,
 *  and the Task Runner also does not need to know the concrete makeup of
 *  the Instructions it needs to run, allowing for a lot of flexibility!
 * 
 * reference https://dev.to/coly010/the-composite-pattern-design-patterns-meet-the-frontend-445e
 */

import { LogInstructon } from './src/LogInstructon';
import { CompositeInstructionSet } from './src/CompositeInstructionSet';
import { TaskRunner } from './src/TaskRunner';

function main() {
  // Lets start by creating a SingleInstruction and our CompositeInstructionSet
  const startUpLogInstruction = new LogInstructon(
    'Starting',
    'Task runner booting up...'
  );
  const compositeInstruction = new CompositeInstructionSet('Composite');

  // Now let's define some sub tasks for the CompositeInstructionSet
  const firstSubTask = new LogInstructon('Composite 1', 'The first sub task');
  const secondSubTask = new LogInstructon('Composite 2', 'The second sub task');

  // Let's add these sub tasks as children to the CompositeInstructionSet we created earlier
  compositeInstruction.addChild(firstSubTask);
  compositeInstruction.addChild(secondSubTask);

  // Now let's create our TaskRunner with our Tasks
  const taskRunner = new TaskRunner([
    startUpLogInstruction,
    compositeInstruction,
  ]);

  // Finally, we'll ask the TaskRunner to run the tasks
  taskRunner.runTasks();
  // Output:
  // Starting: Task runner booting up...
  // Composite 1: The first sub task
  // Composite 2: The second sub task
}

main();