import { ActionType, IAction } from ".";

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
