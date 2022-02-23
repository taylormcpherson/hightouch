import { Component } from "react";
import { NavMenuItems } from "./NavMenuItems";
import './Navbar.scss';
import Button from "../Button/Button";


class Navbar extends Component {
    render() {
        return(
            <nav className="Navbar" aria-label="Primary">
                <ul className="Navbar__items">
                    {NavMenuItems.map( (item, key) => {
                        return (
                            <li className="Navbar__item"
                                key={key}
                            >
                                <a className="Navbar__item-link" href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })} 

                    <div className="Navbar__btns">
                        <li className="Navbar__btn-wrapper">
                            <Button type="button"
                                    hierarchy="Secondary"
                                    classes="Eyebrow__btn"
                                    title="Signup"    
                            />
                        </li>
                        <li className="Navbar__btn-wrapper">
                            <Button type="button"
                                    hierarchy="Primary"
                                    classes="Eyebrow__btn"
                                    title="Login"    
                            />
                        </li>
                       
                    </div>
                </ul>
            </nav>
        );
    }
}

export default Navbar;