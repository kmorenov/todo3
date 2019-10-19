import React from "react";
import ReactDOM from "react-dom";

import FilterBar from "./components/FilterBar";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

// https://tppr.me/nYtAv

class App extends React.Component {
    state = {
        search: "",
        order: "desc",
        perPage: 6,
        page: 1,
        total: 100,
        layout: "grid", // list
        posts: [],
        loading: false
    };

    fetch = () => {
        const params = `?_limit=${this.state.perPage}&_page=${
            this.state.page
            }&title_like=${this.state.search}&_sort=title&_order=${this.state.order}`;

        fetch(`https://jsonplaceholder.typicode.com/posts${params}`)
            .then(response => response.json())
            .then(posts => {
                this.setState({
                    posts
                });
            });
    };

    handlePage = page => {
        this.setState(
            {
                page
            },
            () => {
                this.fetch();
            }
        );
    };

    onChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState(
            {
                [name]: value
            },
            () => {
                this.fetch();
            }
        );
    };

    handleLayout = value => {
        this.setState({
            layout: value
        });
    };

    loadMore = () => {
        this.setState({loading: true, perPage: this.state.perPage*2}, () => {
            this.fetch()
            this.setState({loading: false})
        })

    }

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        {/* <pre tab="2">{JSON.stringify(this.state)}</pre> */}
                        <FilterBar
                            layout={this.state.layout}
                            perPage={this.state.perPage}
                            order={this.state.order}
                            search={this.state.search}
                            handleSearch={this.handleSearch}
                            handleLayout={this.handleLayout}
                            handleOrder={this.handleOrder}
                            handlePerPage={this.handlePerPage}
                            onChange={this.onChange}
                        />
                        <Posts
                            posts={this.state.posts}
                            layout={this.state.layout}
                        />
                        <div className="uk-margin">
                            <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                                    onClick={() => this.loadMore()}>
                                {this.state.loading ?
                                    <div className="uk-margin-small-left" uk-spinner="ratio: 0.6"></div>
                                    :
                                    'Load more'
                                }
                            </button>
                        </div>
                        <Pagination
                            page={this.state.page}
                            total={this.state.total}
                            perPage={this.state.perPage}
                            handlePage={this.handlePage}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
