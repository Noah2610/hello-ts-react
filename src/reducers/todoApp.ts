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
        case ActionType.SetTodoEntries: {
            newState.todoEntries = action.payload;
            break;
        }

        case ActionType.NewTodo: {
            const newId: number =
                newState.todoEntries.reduce(
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

        case ActionType.DeleteTodo: {
            let entryIndex = null;
            // We use `find` here so looping stops when the target entry is found.
            newState.todoEntries.find(
                (entry: ITodoEntry, index: number): boolean => {
                    if (entry.id === action.payload) {
                        entryIndex = index;
                        return true;
                    } else {
                        return false;
                    }
                },
            );
            // We have to explicitly check that `entryIndex` is not `null`,
            // because `0` is false-y.
            if (entryIndex !== null) {
                newState.todoEntries.splice(entryIndex, 1);
            } else {
                console.log(action);
            }
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
