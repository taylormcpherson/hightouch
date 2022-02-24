import { Component } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import './Header.scss';


class Header extends Component {

    state = {
        clicked: false,
    };

    // alternate clicked state when hamburger btn is clicked
    handleHamburgerClick = () => {
        this.setState({ 
            clicked: !this.state.clicked
        });
    }
       
    render() {
        return(
            <header className="Header">
                {/* Eyebrow Navigation */}
                <nav className="Header__eyebrow" aria-label="Eyebrow">

                    <Logo/>

                    {/* Hamburger btn for mobile navigation */}
                    <button className="Header__mobile-btn"
                            aria-label="Open Primary Navigation"
                            type="button"
                            onClick={this.handleHamburgerClick}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                     {/* Signup / Login for tablet and larger screens
                       * Mobile buttons appear in Navbar.js
                       */}
                    <div className="Header__eyebrow-btns">
                        <Button
                            type="button"
                            hierarchy="Secondary"
                            classes="Eyebrow__btn"
                            title="Sign Up"
                        />
                        <Button
                            type="button"
                            hierarchy="Primary"
                            classes="Eyebrow__btn"
                            title="Login"
                        />
                    </div>
                </nav>

                {/* Mobile Navbar, visible (active) after hamburger button is clicked */}
                <div className={this.state.clicked ? `Header__nav-wrapper is-active`: `Header__nav-wrapper`}>
                    <Navbar/>
                </div>
            </header> 
        );
    }
}

export default Header;