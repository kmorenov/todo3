import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {posts.map(post => {
        return (
          <div key={post.id}>
            <a
              href=""
              className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
              data-uk-grid
            >
              <div className="uk-card-media-left uk-cover-container">
                <img src="https://picsum.photos/600/400" alt="" data-uk-cover />
                <canvas width={600} height={400} />
              </div>
              <div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
