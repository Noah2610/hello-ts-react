import { ActionCreator, IAction } from "/actions";
import { filterByName, newTodo } from "/actions/todoActions";
import { React, ReactDOM, ReactElement } from "/prelude/react";
import { connect, Dispatch } from "/prelude/redux";

interface IProps {
    newTodo?: ActionCreator;
    filterByName?: ActionCreator;
}

interface IState {
    inputValue: string;
}

class NewTodo extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = { inputValue: "" };
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
    }

    public render(): ReactElement {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="New Todo..."
                    onChange={this.onInputChange}
                    onKeyDown={this.onInputKeyDown}
                    value={this.state.inputValue}
                />
            </div>
        );
    }

    public componentDidUpdate(_: IProps, prevState: IState): void {
        if (prevState.inputValue !== this.state.inputValue) {
            if (this.props.filterByName) {
                this.props.filterByName(this.state.inputValue);
            }
        }
    }

    // TODO: Get rid of `any`
    private onInputChange(event: any): void {
        this.setState({ inputValue: event.target.value });
    }

    private onInputKeyDown(event: React.KeyboardEvent): void {
        if (event.key === "Enter" && this.state.inputValue) {
            if (this.props.newTodo) {
                this.props.newTodo(this.state.inputValue);
            }
            this.setState({ inputValue: "" });
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch): object => ({
    newTodo: (name: string): IAction => dispatch(newTodo(name)),
    filterByName: (name: string): IAction => dispatch(filterByName(name)),
});

export default connect(
    null,
    mapDispatchToProps,
)(NewTodo);
