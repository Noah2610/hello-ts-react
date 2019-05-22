import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Hello } from "./components/Hello";
import TodoApp from "./components/TodoApp";
import { configureStore } from "./store";
import { Container } from "/components/styled";

const init = (): void => {
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <Container>
                <Hello compiler="TypeScript" framework="React" />
            </Container>
            <Container>
                <TodoApp />
            </Container>
        </Provider>,
        document.getElementById("app"),
    );
};

init();
