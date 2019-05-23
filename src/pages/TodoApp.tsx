import { Container } from "/components/styled";
import TodoApp from "/components/TodoApp";
import { React, ReactElement } from "/prelude/react";

const TodoAppPage = (): ReactElement => (
    <Container>
        <TodoApp />
    </Container>
);

export default TodoAppPage;
