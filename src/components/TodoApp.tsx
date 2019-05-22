import Entries from "./Entries";
import NewTodo from "./NewTodo";
import TodoFilterButtons from "./TodoFilterButtons";
import { Spacing } from "/components/styled";
import { React, ReactDOM, ReactElement } from "/prelude/react";

export default class TodoApp extends React.Component<{}, {}> {
    public render(): ReactElement {
        return (
            <div>
                <h1 className="text-justify">Todo App</h1>
                <NewTodo />
                <Spacing height="16px" />
                <TodoFilterButtons />
                <Spacing height="16px" />
                <Entries />
            </div>
        );
    }
}
