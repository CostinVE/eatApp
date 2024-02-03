import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Carousel from 'react-bootstrap/Carousel';
import JerrysPizzaImage from './images/JerrysPizza.png'; // Import the image file
import KFCImage from './images/KFC Picture.jfif'
import MCImage from './images/McDonalds Picture.png'
import SushiImage from './images/sushi garden.png'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={JerrysPizzaImage} alt="First slide" className='text-center' style={{height:"180px",width:"100%", borderRadius:"8%"}} /> {/* Use the <img> element to display the image */}
        <Carousel.Caption>
          <h3>First slide label</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={KFCImage} alt="Seccond slide" className='text-center' style={{height:"180px",width:"100%", borderRadius:"8%"}} /> {/* Use the <img> element to display the image */}
        <Carousel.Caption>
          <h3 className='text-light  text-center'>Kentucy Fried Chicken</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={MCImage} alt="First slide" className='text-center' style={{height:"180px",width:"100%", borderRadius:"8%"}} /> {/* Use the <img> element to display the image */}
        <Carousel.Caption>
          <h3>First slide label</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SushiImage} alt="First slide" className='text-center' style={{height:"180px",width:"100%", borderRadius:"8%"}} /> {/* Use the <img> element to display the image */}
        <Carousel.Caption>
          <h3>First slide label</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
