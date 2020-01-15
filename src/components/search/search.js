import React from 'react';
import { withRouter } from "react-router";
class Search extends React.Component {
    state = {
        articlesList: []
    }

    constructor(props) {
        super(props);
        this.state = {
            articlesList: []
        }
        this.keyPressed = this.keyPressed.bind(this);
        this.searchNews = this.searchNews.bind(this);
        this.searchNewsNotices = this.searchNewsNotices.bind(this);
    }

    searchNews(event) {
        this.searchNewsNotices(event.target.value);
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            this.searchNewsNotices(event.target.value);
        }
    }

    searchNewsNotices(text) {
        fetch(`https://newsapi.org/v2/everything?q=${text}&apiKey=803fdd9b8517490d89d8c85ade466b8d`)
            .then(res => res.json())
            .then((data) => {
                this.props.history.push({
                    pathname:"/articles",
                    state:{
                        articlesList: data.articles
                    }
                });
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control" type="text" 
                    onKeyPress={this.keyPressed}
                    aria-label="Search" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" id="button-addon2" onClick={this.searchNews}>Search</button>
                </div>
            </div>
        );
    }
}
export default withRouter(Search);