import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled from "styled-components";

import { Hello } from "./components/Hello";
import TodoApp from "./components/TodoApp";
import { configureStore } from "./store";

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

const Container = styled.div.attrs({ className: "container" })`
    border: 1px solid gray;
    border-radius: 4px;
`;

init();
