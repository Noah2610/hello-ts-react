import { combineReducers, createStore, Store } from "redux";

import { IAction, IRunnerAction } from "./actions";
import { IState, TodoAppState } from "./state";

const REDUX_ACTION_TYPE_PREFIX = "@@";

const isReduxAction = (action: IAction): boolean =>
    action.type.startsWith(REDUX_ACTION_TYPE_PREFIX);

const reducers = {
    todoApp: (
        state: TodoAppState = initialTodoAppState(),
        action: IRunnerAction,
    ): TodoAppState => {
        if (isReduxAction(action)) {
            return state;
        }
        return action.run(state);
    },
};

export const configureStore = (): Store => {
    return createStore(
        combineReducers(reducers),
        { todoApp: initialTodoAppState() },
        devtoolsExtensionMiddleware(),
    );
};

// Returns the initial state
const initialTodoAppState = (): TodoAppState => new TodoAppState();

// Middleware for chrom devtools redux extension
const devtoolsExtensionMiddleware = (): any =>
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();
