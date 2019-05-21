import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Hello } from "./components/Hello";
import TodoApp from "./components/TodoApp";
import { configureStore } from "./store";

const init = (): void => {
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <div>
                <Hello compiler="TypeScript" framework="React" />
                <TodoApp />
            </div>
        </Provider>,
        document.getElementById("app"),
    );
};

init();
