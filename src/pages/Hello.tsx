import { Container } from "/components/styled";
import Hello from "/components/Hello";
import { React, ReactElement } from "/prelude/react";

const HelloPage = (props: {}): ReactElement => (
    <Container>
        <Hello compiler="TypeScript" framework="React" />
    </Container>
);

export default HelloPage;
