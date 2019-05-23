import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { configureStore } from "./store";
import Navigation from "/components/Navigation";
import Routes from "/constants/Routes";
import HelloPage from "/pages/Hello";
import TodoAppPage from "/pages/TodoApp";
import FirebaseProvider from "/services/firebase/Provider";

const init = (): void => {
    const store = configureStore();

    ReactDOM.render(
        <FirebaseProvider>
            {/* For some reason, react/typescript want two children elements here;
                doesn't accept a single ReactElement */}
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation />
                    <Route exact path={Routes.Home} component={HelloPage} />
                    <Route path={Routes.TodoApp} component={TodoAppPage} />
                </BrowserRouter>
            </Provider>
        </FirebaseProvider>,
        document.getElementById("app"),
    );
};

init();
