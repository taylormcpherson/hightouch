import { Component } from "react";
import './Articles.scss';

import { ArticleData } from "./ArticleData";
import ArticleCard from "./ArticleCard/ArticleCard";

class Articles extends Component {

    state = {
        title: '',
    };
       
    render() {
        return(
            <section className="Articles">
                <h3 className="Articles__title">
                    {this.props.title}
                </h3>

                <ul className="Articles__list">
                    {ArticleData.map( (item, key) => {
                        return (
                            <li className="Articles__list-item"
                                key={key}
                            >
                                <ArticleCard
                                    imgUrl={item.imgUrl}
                                    imgAlt={item.imgAlt}
                                    title={item.title}
                                    copy={item.copy}
                                    link={item.link}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default Articles;