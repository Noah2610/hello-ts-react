import { combineReducers, createStore, Store } from "redux";
import { TodoAppState } from "./state";
import { reducers } from "/reducers";

export interface ICombinedState {
    todoApp: TodoAppState;
}

export const configureStore = (): Store => {
    return createStore(
        combineReducers(reducers),
        { todoApp: new TodoAppState() },
        devtoolsExtensionMiddleware(),
    );
};

// Middleware for chrom devtools redux extension
const devtoolsExtensionMiddleware = (): any =>
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();
