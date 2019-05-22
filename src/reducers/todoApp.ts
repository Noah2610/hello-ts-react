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

    switch (action.type) {
        case ActionType.NEW_TODO: {
            const newId: number =
                state.todoEntries.reduce(
                    (highest: number, entry: ITodoEntry): number => {
                        return entry.id > highest ? entry.id : highest;
                    },
                    0,
                ) + 1;
            return new TodoAppState(
                [].concat(state.todoEntries, {
                    id: newId,
                    name: action.payload,
                    completed: false,
                }),
            );
        }
        case ActionType.TOGGLE_TODO_COMPLETED: {
            return new TodoAppState(
                state.todoEntries.map((entry: ITodoEntry) => {
                    if (entry.id === action.payload) {
                        return { ...entry, completed: !entry.completed };
                    } else {
                        return entry;
                    }
                }),
            );
        }
        default:
            return state;
    }
};
