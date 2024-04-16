import React from "react";

const Carousel = () => {
  const customStyle = {
    height: "50vh",
  };

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tu3fTab493fUeSM4shEedifeS_M-BWA7Ww&usqp=CAU"
              className="d-block w-100"
              alt="..."
              style={customStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.shutterstock.com/image-photo/digital-contents-concept-social-networking-260nw-2164090919.jpg"
              className="d-block w-100"
              alt="..."
              style={customStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202403/pm-080542439-16x9_0.jpg?VersionId=ja6yio9UeWPZPQlTT5Sxd2oFZjhphkOG&size=690:388"
              className="d-block w-100"
              alt="..."
              style={customStyle}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
