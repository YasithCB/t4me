import React, { useState } from "react";
import "../style/Galary.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: "/images/gallery/1.jpg" },
    { url: "/images/gallery/2.jpg" },
    { url: "/images/gallery/3.jpg" },
    { url: "/images/gallery/4.jpg" },
    { url: "/images/gallery/5.jpg" },
    { url: "/images/gallery/6.jpg" },
    { url: "/images/gallery/7.jpg" },
    { url: "/images/gallery/8.jpg" },
    { url: "/images/gallery/9.jpg" },
    { url: "/images/gallery/10.jpg" },
    { url: "/images/gallery/11.jpg" },
    { url: "/images/gallery/12.jpg" },
    { url: "/images/gallery/13.jpg" },
    { url: "/images/gallery/14.jpg" },
    { url: "/images/gallery/15.jpg" },
    { url: "/images/gallery/16.jpg" },
    { url: "/images/gallery/17.jpg" },
    { url: "/images/gallery/18.jpg" },
    { url: "/images/gallery/19.jpg" },
    { url: "/images/gallery/20.jpg" },
    { url: "/images/gallery/21.jpg" },
    { url: "/images/gallery/22.jpg" },
    { url: "/images/gallery/23.jpg" },
    { url: "/images/gallery/24.jpg" },
    { url: "/images/gallery/25.jpg" },
    { url: "/images/gallery/26.jpg" },
    { url: "/images/gallery/27.jpg" },
    { url: "/images/gallery/28.jpg" },
    { url: "/images/gallery/29.jpg" },
    { url: "/images/gallery/30.jpg" },
    { url: "/images/gallery/31.jpg" },
    { url: "/images/gallery/32.jpg" },
    { url: "/images/gallery/33.jpg" },
    { url: "/images/gallery/34.jpg" },
    { url: "/images/gallery/35.jpg" },
    { url: "/images/gallery/36.jpg" },
    { url: "/images/gallery/37.jpg" },
    { url: "/images/gallery/38.jpg" },
    { url: "/images/gallery/39.jpg" },
    { url: "/images/gallery/40.jpg" },
    { url: "/images/gallery/41.jpg" },
    { url: "/images/gallery/42.jpg" },
    { url: "/images/gallery/43.jpg" },
    { url: "/images/gallery/44.jpg" },
    { url: "/images/gallery/45.jpg" },
    { url: "/images/gallery/46.jpg" },
    { url: "/images/gallery/47.jpg" },
    { url: "/images/gallery/48.jpg" },
    { url: "/images/gallery/49.jpg" },
    { url: "/images/gallery/50.jpg" },
    { url: "/images/gallery/51.jpg" },
    { url: "/images/gallery/52.jpg" },
    { url: "/images/gallery/53.jpg" },
    { url: "/images/gallery/54.jpg" },
    { url: "/images/gallery/55.jpg" },
    { url: "/images/gallery/56.jpg" },
    { url: "/images/gallery/57.jpg" },
    { url: "/images/gallery/58.jpg" },
    { url: "/images/gallery/59.jpg" },
    { url: "/images/gallery/60.jpg" },
    { url: "/images/gallery/61.jpg" },
    { url: "/images/gallery/62.jpg" },
    { url: "/images/gallery/63.jpg" },
    { url: "/images/gallery/64.jpg" },
    { url: "/images/gallery/65.jpg" },
    { url: "/images/gallery/66.jpg" },
    { url: "/images/gallery/67.jpg" },
    { url: "/images/gallery/68.jpg" },
    { url: "/images/gallery/69.jpg" },
    { url: "/images/gallery/70.jpg" },
    { url: "/images/gallery/71.jpg" },
  ];

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container gallery-container my-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.url}
            className="gallery-image"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* modal */}
     //
    </>
  );
};

export default Gallery;
