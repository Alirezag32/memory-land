import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slider.css'
import image1 from "../images/7.png";
import image2 from "../images/11.png";
import image3 from "../images/2.png";
import image4 from '../images/10.png'
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="col-lg-9 col-md-9 col-sm-12 col-xs-12 simpleSlider" {...settings}>
      <div>
        <img  src={image1} alt="تصویر اسلاید 1" />
      </div>
      <div>
        <img src={image2} alt="تصویر اسلاید 2" />
      </div>
      <div>
        <img src={image3} alt="تصویر اسلاید 3" />
      </div>
      <div>
        <img src={image4} alt="تصویر اسلاید 3" />
      </div>
    </Slider>
  );
}
