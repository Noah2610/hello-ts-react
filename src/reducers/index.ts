import todoApp from "./todoApp";
import { IAction } from "/actions";
import { IState, TodoAppState } from "/store/state";

const REDUX_ACTION_TYPE_PREFIX = "@@";

export const isReduxAction = (action: IAction): boolean =>
    action.type.startsWith(REDUX_ACTION_TYPE_PREFIX);

export const reducers = {
    todoApp,
};
