import { isReduxAction } from ".";
import { ActionType, IAction } from "/actions";
import { IState, ITodoEntry, TodoAppState } from "/store/state";

export default (
    state: TodoAppState = new TodoAppState(),
    action: IAction,
): TodoAppState => {
    if (isReduxAction(action)) {
        return state;
    }

    const newState = new TodoAppState(state);

    switch (action.type) {
        case ActionType.NewTodo: {
            const newId: number =
                state.todoEntries.reduce(
                    (highest: number, entry: ITodoEntry): number => {
                        return entry.id > highest ? entry.id : highest;
                    },
                    0,
                ) + 1;
            newState.todoEntries.push({
                id: newId,
                name: action.payload,
                completed: false,
            });
            break;
        }

        case ActionType.ToggleTodoCompleted: {
            const targetEntry = newState.todoEntries.find(
                (entry: ITodoEntry): boolean => {
                    return entry.id === action.payload;
                },
            );
            targetEntry.completed = !targetEntry.completed;
            break;
        }

        case ActionType.FilterTodoByName: {
            newState.filter.name = action.payload;
            break;
        }

        case ActionType.FilterTodoByCompleted: {
            newState.filter.completed = action.payload;
            break;
        }
    }

    return newState;
};
