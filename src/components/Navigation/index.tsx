import { History, Location } from "history";
import { withRouter, NavLink } from "react-router-dom";
import { compose } from "recompose";
import Routes from "/constants/Routes";
import { React, ReactElement } from "/prelude/react";

const LI_ACTIVE_CLASSNAME = "active";

interface IRoute {
    route: Routes;
    name: string;
}

interface IProps {
    location: Location;
}

class Navigation extends React.Component<IProps, {}> {
    private routes: Array<IRoute>;

    public constructor(props: IProps) {
        super(props);
        this.routes = [
            { route: Routes.Home, name: "Home" },
            { route: Routes.SignIn, name: "Sign In" },
            { route: Routes.SignUp, name: "Sign Up" },
            { route: Routes.TodoApp, name: "Todos" },
        ];
    }

    public render(): ReactElement {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {this.routes.map(
                        ((route: IRoute, index: number): ReactElement => (
                            <NavLi
                                key={index}
                                route={route.route}
                                active={this.isActive(route.route)}
                            >
                                {route.name}
                            </NavLi>
                        )).bind(this),
                    )}
                </ul>
            </div>
        );
    }

    private isActive(route: Routes): boolean {
        const regex = /\/*$/;
        return (
            this.props.location.pathname.replace(regex, "") ===
            route.replace(regex, "")
        );
    }
}

interface INavLiProps {
    route: Routes;
    active: boolean;
    children: any; // TODO: Remove any.
}

const NavLi = (props: INavLiProps): ReactElement => (
    <li className={props.active ? LI_ACTIVE_CLASSNAME : ""}>
        <NavLink to={props.route}>{props.children}</NavLink>
    </li>
);

// Note: We are using `compose` here to avoid typescript errors;
//       `IProps` would need to have some additional properties,
//       provided by `withRouter`, which we don't need.
//       With compose typescript seems to oversee this.
//       I prefer this over `// @ts-ignore`.
export default compose(withRouter)(Navigation);
