import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', minHeight: '70vh', paddingTop: '20px' }}> 
      <Carousel style={{ width: '80%', maxWidth: '1000px', marginBottom: '20px' }}> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.toolshero.com/wp-content/uploads/2020/03/horizontal-integration-toolshero.jpg" // URL de la primera imagen
            alt="First slide"
            style={{ objectFit: 'cover', maxHeight: '400px' }} 
          />
          <Carousel.Caption>
            <h3 style={{ marginBottom: '0' }}>hola</h3> 
            <p style={{ marginBottom: '0' }}>colocar aqui una descripcion.</p> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.sydle.com/blog/assets/post/vertical-and-horizontal-business-623dd8a4b820e763c7075d08/vertical-and-horizontal-business.jpg" // URL de la segunda imagen
            alt="Second slide"
            style={{ objectFit: 'cover', maxHeight: '400px' }} 
          />
          <Carousel.Caption>
            <h3 style={{ marginBottom: '0' }}>holaa</h3> 
            <p style={{ marginBottom: '0' }}>coocar una descripcion.</p> 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
