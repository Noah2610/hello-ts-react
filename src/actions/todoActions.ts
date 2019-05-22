import { ActionType, IAction } from ".";
import { FilterCompleted } from "/store/state";

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
