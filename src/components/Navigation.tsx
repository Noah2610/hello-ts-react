import { NavLink } from "react-router-dom";
import Routes from "/constants/Routes";
import { React, ReactElement } from "/prelude/react";

const LI_ACTIVE_CLASSNAME = "active";

// Returns `LI_ACTIVE_CLASSNAME` if the given path matches the current page location,
// returns `""` otherwise.
const classNameForPath = (path: string): string =>
    matchesPath(path) ? LI_ACTIVE_CLASSNAME : "";

// Returns `true` if the given string matches `location.pathname`
const matchesPath = (path: string): boolean =>
    location.pathname.replace(/\/*$/, "") === path.replace(/\/*$/, "");

const Navigation = (props: {}): ReactElement => {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className={classNameForPath(Routes.Home)}>
                    <NavLink to={Routes.Home}>Home</NavLink>
                </li>
                <li className={classNameForPath(Routes.SignIn)}>
                    <NavLink to={Routes.SignIn}>Sign In</NavLink>
                </li>
                <li className={classNameForPath(Routes.SignUp)}>
                    <NavLink to={Routes.SignUp}>Sign Up</NavLink>
                </li>
                <li className={classNameForPath(Routes.TodoApp)}>
                    <NavLink to={Routes.TodoApp}>Todos</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
