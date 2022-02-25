import { Component } from "react";
import './Hero.scss';

class Hero extends Component {

    state = {
        iconSrc: '',
        iconAlt: '',
        title: '',
        copy: '',
    };
       
    render() {
        return(
            <section className="Hero">
                <img className="Hero__icon"
                     src={this.props.iconSrc} 
                     alt={this.props.iconAlt}
                     width="100%"
                >        
                </img>
                <h2 className="Hero__title">
                    {this.props.title}
                </h2>
                <p className="Hero__copy">
                    {this.props.copy}
                </p>
            </section>
        );
    }
}

export default Hero;