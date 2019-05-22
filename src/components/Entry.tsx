import styled from "styled-components";
import { ActionCreator, IAction } from "/actions";
import { toggleTodoCompleted } from "/actions/todoActions";
import { React, ReactDOM, ReactElement } from "/prelude/react";
import { connect, Dispatch } from "/prelude/redux";
import { ITodoEntry } from "/store/state";

interface IProps extends ITodoEntry {
    toggleCompleted?: ActionCreator;
}

class Entry extends React.Component<IProps, {}> {
    public constructor(props: IProps) {
        super(props);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    public render(): ReactElement {
        let className = "todo";
        if (this.props.completed) {
            className += " todo--completed";
        }
        return (
            <div className="row">
                <div className="col-xs-8">
                    <span className={className}>{this.props.name}</span>
                </div>
                <div className="col-xs-4">
                    <Checkbox
                        checked={this.props.completed}
                        onChange={this.onCheckboxChange}
                    />
                </div>
            </div>
        );
    }

    // TODO: Get rid of `any`
    private onCheckboxChange(event: any): void {
        this.props.toggleCompleted(this.props.id);
    }
}

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    border-radius: 16px;
`;

const mapDispatchToProps = (dispatch: Dispatch): object => ({
    toggleCompleted: (id: number): IAction => dispatch(toggleTodoCompleted(id)),
});

export default connect(
    null,
    mapDispatchToProps,
)(Entry);
