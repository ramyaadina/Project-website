import React from 'react';
import { NavLink } from "react-router-dom";

export default class NavItem extends React.Component {
    render() {
        return (
            <li>
                <NavLink to={this.props.name}>{this.props.name}</NavLink>
            </li>
        )
    }
}
