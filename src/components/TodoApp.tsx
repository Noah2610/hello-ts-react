import styled from "styled-components";

import Entries from "./Entries";
import { ActionCreator, IAction } from "/actions";
import { newTodo } from "/actions/todoActions";
import { React, ReactDOM, ReactElement } from "/prelude/react";
import { connect, Dispatch } from "/prelude/redux";

interface IProps {
    newTodo?: ActionCreator;
}

interface IState {
    inputValue: string;
}

class TodoApp extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = { inputValue: "" };
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
    }

    public render(): ReactElement {
        return (
            <div>
                <h1 className="text-justify">Todo App</h1>
                <input
                    type="text"
                    onChange={this.onInputChange}
                    onKeyDown={this.onInputKeyDown}
                    value={this.state.inputValue}
                />
                <Spacing height="32px" />
                <Entries />
            </div>
        );
    }

    // TODO: Get rid of `any`
    private onInputChange(event: any): void {
        this.setState({ inputValue: event.target.value });
    }

    private onInputKeyDown(event: React.KeyboardEvent): void {
        if (event.key === "Enter" && this.state.inputValue) {
            this.props.newTodo(this.state.inputValue);
            this.setState({ inputValue: "" });
        }
    }
}

interface ISpacingProps {
    height?: string;
    width?: string;
}

const Spacing = styled.div<ISpacingProps>`
    width: ${(p: ISpacingProps): string => (p.width ? p.width : "0px")};
    height: ${(p: ISpacingProps): string => (p.height ? p.height : "0px")};
`;

const mapDispatchToProps = (dispatch: Dispatch): object => ({
    newTodo: (name: string): IAction => dispatch(newTodo(name)),
});

export default connect(
    null,
    mapDispatchToProps,
)(TodoApp);
