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

// Create a new todo entry with the given name.
export const newTodo = (name: string): IAction => ({
    type: ActionType.NEW_TODO,
    payload: name,
});

// Toggle the `completed` state of the todo entry with the given id.
export const toggleTodoCompleted = (id: number): IAction => ({
    type: ActionType.TOGGLE_TODO_COMPLETED,
    payload: id,
});
