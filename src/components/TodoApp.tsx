import Entries from "./Entries";
import NewTodo from "./NewTodo";
import TodoFilterButtons from "./TodoFilterButtons";
import { Spacing } from "/components/styled";
import { React, ReactDOM, ReactElement } from "/prelude/react";
import TodoEntriesLocalStorage from "/services/TodoEntriesLocalStorage";

export default class TodoApp extends React.Component<{}, {}> {
    public render(): ReactElement {
        return (
            <div>
                <TodoEntriesLocalStorage />
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
