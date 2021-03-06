import { Component } from "react";
import './ArticleCard.scss';
import { FaArrowRight } from 'react-icons/fa';


class ArticleCard extends Component {

    state = {
        imgUrl: '',
        imgAlt: '',
        title: '',
        copy: '',
        link: '',
    };
       
    render() {
        return(
            <div className="ArticleCard">

                {/* Overlay link that makes the entire card clickable */}
                <a className="ArticleCard__link-overlay"
                   href={this.props.link}
                   aria-label="Read the article."
                >
                    <span className="is-hidden">
                        Read article
                    </span>
                </a>

                <img className="ArticleCard__img"
                     src={this.props.imgUrl} 
                     alt={this.props.imgAlt}
                     width="100%"
                >
                </img>

                <h4 className="ArticleCard__title">
                    {this.props.title}
                </h4>

                <p className="ArticleCard__copy">
                    {this.props.copy}
                </p>

                {/* Standard link, tabIndex set to -1 because the overlay exists.
                  * It would be redundant to have two of the same links for accessibility reasons.
                 */}
                <a className="ArticleCard__link"
                   href={this.props.link}
                   tabIndex="-1"
                >
                    Read Article
                    <span>
                        <FaArrowRight className="ArticleCard__link-icon"/>
                    </span>
                  
                </a>
            </div>
        );
    }
}

export default ArticleCard;