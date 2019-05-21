import { IState } from "./state";

export type IActionType = string;

export interface IAction {
    type: IActionType;
    payload?: any;
}

export interface IRunnerAction extends IAction {
    run: <S extends IState>(state: S) => S;
}

// This action class is passed the reducer function to execute.
// No reducer will do anything with this action's data,
// except call the action's `run` function and let the action handle
// the reducing logic iteself. Useful for quick and simple actions.
class RunnerAction implements IRunnerAction {
    public type: IActionType;
    public run: <S extends IState>(state: S) => S;
}
