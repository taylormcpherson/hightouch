import { Component } from "react";
import './Logo.scss'


class Logo extends Component {
    render() {
        return(
            <div className="Logo">
                <h1 className="Logo__heading">
                    <a className="Logo__heading-link" href="/">
                        hightouch
                        <span className="Logo__heading-secondary">
                            docs
                        </span>
                    </a>
                </h1>
            </div>
        );
    }
}

export default Logo;