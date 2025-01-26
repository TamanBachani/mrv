import React, { useRef } from "react";
import DetailsContext from "../contexts/details/DetailsContext";
import "../stylesheets/pdfs.css";
import pdficon from "../images/pdf-icon.png";

const Carousel = () => {
  const { sampleUploadHandler } = React.useContext(DetailsContext);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -200, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 200, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  const pdfs = require
    .context("../reports", false, /\.pdf$/)
    .keys()
    .map((file) => file.replace("./", ""));

  return (
    <div className="carousel-container">
      <div className="arrow left" onClick={scrollLeft}>
        &#8592; {/* Left Arrow */}
      </div>
      <div className="carousel" ref={carouselRef}>
        {pdfs.map((pdf, index) => (
          <div className="card" key={index}>
            <a href={`/reports/${pdf}`} target="_blank" rel="noopener noreferrer">
              <div className="pdf-icon">
                <img className="phone-img" src={pdficon} alt="" />
              </div>
              <div className="pdf-name">{pdf}</div>
            </a>
            <div className="sample-upload-button">
              <button
                type="button"
                className="samples-btn m-15"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => sampleUploadHandler(pdf)}
              >
                Upload
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={scrollRight}>
        &#8594; {/* Right Arrow */}
      </div>
    </div>
  );
};

export default Carousel;
