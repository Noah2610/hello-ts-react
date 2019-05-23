import { ActionType, IAction } from ".";
import { FilterCompleted, ITodoEntry } from "/store/state";

// Overwrites all todo entries with the given array.
// This is used to load entries from localstorage.
export const setTodoEntries = (entries: Array<ITodoEntry>): IAction => ({
    type: ActionType.SetTodoEntries,
    payload: entries,
});

// Create a new todo entry with the given name.
export const newTodo = (name: string): IAction => ({
    type: ActionType.NewTodo,
    payload: name,
});

// Toggle the `completed` state of the todo entry with the given id.
export const toggleTodoCompleted = (id: number): IAction => ({
    type: ActionType.ToggleTodoCompleted,
    payload: id,
});

// Filter todo entries by given name.
export const filterByName = (name: string): IAction => ({
    type: ActionType.FilterTodoByName,
    payload: name,
});

// Filter todo entries by completed state.
export const filterByCompleted = (completed: FilterCompleted): IAction => ({
    type: ActionType.FilterTodoByCompleted,
    payload: completed,
});
