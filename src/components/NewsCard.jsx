import React from "react";

const NewsCard = ({news}) => {


    const {title, url, urlToImage, author, description } = news


  return (
    <>
      <div className="col-12 mb-2">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={urlToImage} className="img-fluid rounded-start" alt="..." 
              style={{height: "100%"}} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                   {author}
                  </small>
                </p>
                <a href={url} target="_blank" className="btn btn-primary btn-sm">Read  More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
