import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';

//import Logo from './../logo/Logo';

import './Navigation.css';
//import brand from './../../assets/svg/icons/sam-brand.svg';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isScrolled: false
        }

        this.toggle = this.toggle.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount = () => {
        this._listenForPageScroll();
    }

    componentDidUpdate = () => {
        this._addNavigationScrolled();
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    scroll = (state) => {
        this.setState({ isScrolled: state });
    }

    render = () => {
        return (
            <Navbar expand="md">
                <div className="nav-brand">
                    <NavLink href="/">
                        {/* <Logo image={brand} /> */}
                    </NavLink>
                </div>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/experience">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/skills">Skills &amp; Expertise</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects">Projects</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

    /**
     * Event listener that waits for page scroll before triggering
     * scroll function.
     */
    _listenForPageScroll = () => {
        window.addEventListener('scroll', (e) => {
            let positionY = window.pageYOffset;

            if (positionY >= 10) this.scroll(true);
            else if (positionY < 9) this.scroll(false);
        });
    }

    _addNavigationScrolled = () => {
        let nav = document.querySelector('.navbar');
        if (this.state.isScrolled) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    }
}

export default Navigation;
