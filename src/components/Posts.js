import React from "react";

const Posts = ({posts, layout}) => {
    return (
        <div className={layout == "list" ?
            "uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" : "uk-grid uk-child-width-1-2@s uk-child-width-1-3@m"}>
            {posts.map(post => {
                return (
                    <div key={post.id}>

                        {layout == 'list' ?
                            <a
                                href=""
                                className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
                                data-uk-grid
                            >
                                <div className="uk-card-media-left uk-cover-container">
                                    <img src="https://picsum.photos/600/400" alt="" data-uk-cover/>
                                    <canvas width={600} height={400}/>
                                </div>
                                <div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title">{post.title}</h3>
                                        <p>{post.body}</p>
                                        <a href="#" className="uk-button uk-button-text">Read more</a>
                                    </div>
                                </div>
                            </a>
                            :
                            <div>
                                <div className="uk-card uk-card-default uk-margin-medium-bottom">
                                    <div className="uk-card-header">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">{post.title}</h3>
                                    </div>
                                    <div className="uk-card-body">
                                        <p>{post.body}</p>
                                    </div>
                                    <div className="uk-card-footer">
                                        <a href="#" className="uk-button uk-button-text">Read more</a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                );
            })};
        </div>
    )
}

export default Posts;
