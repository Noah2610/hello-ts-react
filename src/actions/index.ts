import { IState, ITodoEntry, TodoAppState } from "/store/state";

export enum ActionType {
    SetTodoEntries = "SET_TODO_ENTRIES",
    NewTodo = "NEW_TODO",
    ToggleTodoCompleted = "TOGGLE_TODO_COMPLETED",
    FilterTodoByName = "FILTER_TODO_BY_NAME",
    FilterTodoByCompleted = "FILTER_TODO_BY_COMPLETED",
}

export interface IAction {
    type: ActionType;
    payload?: any;
}

export type ActionCreator = <T>(arg: T) => IAction;
