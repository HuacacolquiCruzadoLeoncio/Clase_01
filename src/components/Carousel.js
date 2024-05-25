import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{ height: '500px' }}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://www.toolshero.com/wp-content/uploads/2020/03/horizontal-integration-toolshero.jpg"
                  alt="First slide"
                  style={{ objectFit: 'cover', maxHeight: '500px' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://www.sydle.com/blog/assets/post/vertical-and-horizontal-business-623dd8a4b820e763c7075d08/vertical-and-horizontal-business.jpg"
                  alt="Second slide"
                  style={{ objectFit: 'cover', maxHeight: '500px' }}
                />
              </div>
              {/* Agrega más imágenes según sea necesario */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
