import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { configureStore } from "./store";
import Navigation from "/components/Navigation";
import Routes from "/constants/Routes";
import HelloPage from "/pages/Hello";
import TodoAppPage from "/pages/TodoApp";

const init = (): void => {
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
                <Route exact path={Routes.Home} component={HelloPage} />
                <Route path={Routes.TodoApp} component={TodoAppPage} />
            </BrowserRouter>
        </Provider>,
        document.getElementById("app"),
    );
};

init();
