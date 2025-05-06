export interface ICommand {}

export interface ICommandHandler<TCommand extends ICommand, TResult> {
  execute(command: TCommand): Promise<TResult>;
}
