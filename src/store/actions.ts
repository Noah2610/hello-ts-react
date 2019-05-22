import { IState, ITodoEntry, TodoAppState } from "./state";

export type IActionType = string;

export interface IAction {
    type: IActionType;
    payload?: any;
}

export interface IRunnerAction extends IAction {
    run: <S extends IState>(state: S) => S;
    // run: (state: TodoAppState) => TodoAppState;
}

// This action class is passed the reducer function to execute.
// No reducer will do anything with this action's data,
// except call the action's `run` function and let the action handle
// the reducing logic iteself. Useful for quick and simple actions.
class RunnerAction implements IRunnerAction {
    public type: IActionType;
    public run: <S extends IState>(state: S) => S;
    // public run: (state: TodoAppState) => TodoAppState;

    public constructor(
        type: IActionType,
        run: <S extends IState>(state: S) => S,
    ) {
        this.type = type;
        this.run = run;
    }
}

// `IActionCreator`s are functions that return anything that extends `IAction`.
export type IActionCreator = <T>(arg: T) => IAction;

export const newTodo = (name: string): IRunnerAction => ({
    type: "NEW_TODO",
    run: (state: any): any => {
        let newId = 0;
        state.todoEntries.forEach(
            (entry: ITodoEntry): void => {
                if (entry.id > newId) {
                    newId = entry.id;
                }
            },
        );
        return new TodoAppState(
            [].concat(state.todoEntries, {
                id: newId,
                name,
                completed: false,
            }),
        );
    },
});
