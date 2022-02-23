import { Component } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import './Eyebrow.scss';


class Eyebrow extends Component {

    state = {
        clicked: false,
    };

    handleHamburgerClick = () => {
        this.setState({ 
            clicked: !this.state.clicked
        });
    }
       

    render() {
        return(
            <header className="Header">
                <nav className="Header__eyebrow" aria-label="Eyebrow">
                    <Logo/>
                    <button className="Header__mobile-btn"
                            aria-label="Open Primary Navigation"
                            type="button"
                            onClick={this.handleHamburgerClick}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
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

                <div className={this.state.clicked ? `Header__nav-wrapper is-active`: `Header__nav-wrapper`}>
                    <Navbar/>
                </div>
            </header> 
        );
    }
}

export default Eyebrow;