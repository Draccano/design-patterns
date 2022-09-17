export interface Instruction {
  /**
   * Each instruction should have a name for
   * enhanced reporting and identification
   */
  name: string;

  /**
   * We want our execute method to return wether
   * it was executed successfully or not
   */
  execute(): boolean;
}
