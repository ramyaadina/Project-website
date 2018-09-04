import React from 'react';
import { Route, NavLink } from "react-router-dom";

import NavItem from './NavItem';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Sitemap from './Sitemap';


export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <NavItem name="About" />
                    <NavItem name="Contact" />
                    <NavItem name="Sitemap" />
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/sitemap" component={Sitemap} />
                </div>
            </nav>
        )
    }
}
