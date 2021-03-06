import { Component } from "react";
import './Button.scss';


class Button extends Component {

    /* Button component supports primary and secondary button types */
    state = {
        type: '',
        hierarchy: '',
        classes: '',
        title: '',
    };

    render() {
        return(
            <button type={this.props.type}
                    className={`Button ` + this.props.classes}
                    data-hierarchy={this.props.hierarchy}>
                {this.props.title}
            </button>
        );
    }
}

export default Button;