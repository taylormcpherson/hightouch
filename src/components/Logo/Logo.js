import { Component } from "react";
import './Logo.scss'


class Logo extends Component {
    render() {
        return(
            <div className="Logo">
                <a className="Logo__heading-link" href="/">
                    hightouch
                    <span className="Logo__heading-secondary">
                        docs
                    </span>
                </a>
            </div>
        );
    }
}

export default Logo;