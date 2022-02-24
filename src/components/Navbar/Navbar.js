import { Component } from "react";
import { NavMenuItems } from "./NavMenuItems";
import './Navbar.scss';
import Button from "../Button/Button";


class Navbar extends Component {
    
    /**
     * Navbar that gets data from NavMenuItems.js
     * 
     * @src: data loading help from 
     *       https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
     */
    
    render() {
        return(
            <nav className="Navbar" aria-label="Primary">
                <ul className="Navbar__items">
                    {/* Nav items from file: Navbar.js */}
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
                    { 
                       /* Signup / Login btns (mobile only)
                       * tablet and greater sized screens display the btns in Header.js
                       */ 
                    }
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