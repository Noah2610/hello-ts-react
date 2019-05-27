import TodoFilterButton from "./TodoFilterButton";
import { React, ReactElement } from "/prelude/react";
import { FilterCompleted } from "/store/state";

export default (): ReactElement => {
    return (
        <div className="btn-group">
            <TodoFilterButton filter={FilterCompleted.All}>
                All
            </TodoFilterButton>
            <TodoFilterButton filter={FilterCompleted.NotCompleted}>
                Not Completed
            </TodoFilterButton>
            <TodoFilterButton filter={FilterCompleted.Completed}>
                Completed
            </TodoFilterButton>
        </div>
    );
};
