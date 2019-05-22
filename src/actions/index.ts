import { IState, ITodoEntry, TodoAppState } from "/store/state";

export enum ActionType {
    NEW_TODO = "NEW_TODO",
    TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED",
}

export interface IAction {
    type: ActionType;
    payload?: any;
}

export type ActionCreator = <T>(arg: T) => IAction;
