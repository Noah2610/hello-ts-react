import { ActionCreator, IAction } from "/actions";
import { filterByCompleted } from "/actions/todoActions";
import { React, ReactElement } from "/prelude/react";
import { connect, Dispatch } from "/prelude/redux";
import { ICombinedState } from "/store";
import { FilterCompleted } from "/store/state";

interface IProps {
    filter: FilterCompleted;
    active?: boolean;
    filterByCompleted?: ActionCreator;
}

class TodoFilterButton extends React.Component<IProps, {}> {
    public constructor(props: IProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public render(): ReactElement {
        let className = "btn btn-default";
        if (this.props.active) {
            className += " active";
        }
        return (
            <button className={className} onClick={this.onClick}>
                {this.props.children}
            </button>
        );
    }

    // TODO: Remove any
    private onClick(event: any): void {
        if (!this.props.active && this.props.filterByCompleted) {
            this.props.filterByCompleted(this.props.filter);
        }
    }
}

const mapStateToProps = (state: ICombinedState, props: IProps): object => ({
    active: state.todoApp.filter.completed === props.filter,
});

const mapDispatchToProps = (dispatch: Dispatch): object => ({
    filterByCompleted: (completed: FilterCompleted): IAction =>
        dispatch(filterByCompleted(completed)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoFilterButton);
