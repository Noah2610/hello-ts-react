import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import TodoApp from "./components/TodoApp";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <TodoApp />
    </div>,
    document.getElementById("app"),
);
