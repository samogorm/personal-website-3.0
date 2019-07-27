import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, Collapse } from 'reactstrap';

import Logo from './../logo/Logo';

import './Navigation.css';
import brand from './../../assets/images/sam-pixel.svg';

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
            <Navbar expand="md" className={this.state.isOpen ? 'sub-nav-open' : 'sub-nav-closed'}>
                <div className="nav-brand">
                    <NavLink href="/">
                       <div className="brand-wrapper">
                            <Logo image={brand} />
                       </div>
                    </NavLink>
                </div>
                <button type="button" className="navbar-toggler" onClick={this.toggle}>
                    <i className="fas fa-bars"></i>
                </button>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={() => this._scrollToElement('#about')}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this._scrollToElement('#skills-and-expertise')}>Skills &amp; Expertise</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this._scrollToElement('#projects')}>Projects</NavLink>
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

    _scrollToElement = (element) => {
        element = document.querySelector(element);
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
}

export default Navigation;
