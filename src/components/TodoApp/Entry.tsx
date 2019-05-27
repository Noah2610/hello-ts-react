import { ActionCreator, IAction } from "/actions";
import { deleteTodo, toggleTodoCompleted } from "/actions/todoActions";
import { Checkbox, DeleteButton } from "/components/styled";
import { React, ReactDOM, ReactElement } from "/prelude/react";
import { connect, Dispatch } from "/prelude/redux";
import { ITodoEntry } from "/store/state";

interface IProps extends ITodoEntry {
    toggleCompleted?: ActionCreator;
    deleteTodo?: ActionCreator;
}

class Entry extends React.Component<IProps, {}> {
    public constructor(props: IProps) {
        super(props);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    public render(): ReactElement {
        let className = "todo";
        if (this.props.completed) {
            className += " todo--completed";
        }
        const inputSize = "24px";
        return (
            <div className="row">
                <div className="col-xs-8 text-left">
                    <span className={className}>{this.props.name}</span>
                </div>
                <div className="col-xs-4 text-right">
                    <Checkbox
                        s={inputSize}
                        checked={this.props.completed}
                        onChange={this.onCheckboxChange}
                    />
                    <DeleteButton s={inputSize} onClick={this.onDeleteClick} />
                </div>
            </div>
        );
    }

    // TODO: Get rid of `any`
    private onCheckboxChange(event: any): void {
        this.props.toggleCompleted(this.props.id);
    }

    // TODO: Get rid of `any`
    private onDeleteClick(event: any): void {
        this.props.deleteTodo(this.props.id);
    }
}

const mapDispatchToProps = (dispatch: Dispatch): object => ({
    toggleCompleted: (id: number): IAction => dispatch(toggleTodoCompleted(id)),
    deleteTodo: (id: number): IAction => dispatch(deleteTodo(id)),
});

export default connect(
    null,
    mapDispatchToProps,
)(Entry);
