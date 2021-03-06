import { Component } from "react";
import './Articles.scss';

import { ArticleData } from "./ArticleData";
import ArticleCard from "./ArticleCard/ArticleCard";

class Articles extends Component {

    /**
     * Container component for all article cards and the section header 
     * 
     * Article card data from ArticleData.js
     * 
     * @src: data loading help from 
     *       https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
     */

    state = {
        title: '',
    };
       
    render() {
        return(
            <section className="Articles">
                <h2 className="Articles__title">
                    {this.props.title}
                </h2>

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