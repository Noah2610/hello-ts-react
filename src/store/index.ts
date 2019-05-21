import { combineReducers, createStore, Store } from "redux";

import { IAction, IRunnerAction } from "./actions";
import { IState, State } from "./state";

const baseReducer = (
    state: IState = initialState(),
    action: IAction,
): IState => {
    return state;
};

const runnerReducer = (
    state: IState = initialState(),
    action: IRunnerAction,
): IState => {
    if (action.run) {
        return action.run(state);
    } else {
        return state;
    }
};

export const configureStore = (): Store => {
    // Initial state
    const state = initialState();
    return createStore(
        combineReducers({ baseReducer, runnerReducer }),
        { baseReducer: state, runnerReducer: state },
        devtoolsExtensionMiddleware(),
    );
};

// Returns the initial state
const initialState = (): IState => new State();

// Middleware for chrom devtools redux extension
const devtoolsExtensionMiddleware = (): any =>
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();
