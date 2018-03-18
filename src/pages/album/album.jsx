import React, {Component} from 'react';
import Slider from 'react-slick';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './album.css';
//images
import img01 from '../../images/01.jpg';
import img02 from '../../images/02.jpg';
import img03 from '../../images/03.jpg';
import img04 from '../../images/04.jpg';
import img05 from '../../images/05.jpg';
import img06 from '../../images/06.jpg';
import img07 from '../../images/07.jpg';
import img08 from '../../images/08.jpg';
import img10 from '../../images/10.jpg';
import img11 from '../../images/11.jpg';
import img12 from '../../images/12.jpg';
import img13 from '../../images/13.jpg';
import img14 from '../../images/14.jpg';

export default class Album extends Component {
  render() {
    const settingsAlbum = {
      dots: true,
      className: 'center',
      arrows: true,
      centerMode: true,
      infinite: true,
      autoplay: true,
      speed: 400,
      lazyload: true,
      autoplayspeed: 3500,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 1201,
        settings: {
          lazyload: true,
          centerMode: false,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }],
    };
    return (
      <div >
        <Navbar/>
        <div className="album">
          <div className="album-container">
          <Slider {...settingsAlbum}>
            <div className="album-container-images">
              <img src={img01} alt="Trading Post Crystal Lake Pets"/>
            </div>
            <div className="album-container-images">
              <img src={img02} alt=" Electronics"/>
            </div>
            <div className="album-container-images">
              <img src={img03} alt=" Jewlery"/>
            </div>
            <div className="album-container-images">
              <img src={img04} alt=" Signed Jersey"/>
            </div>
            <div className="album-container-images">
              <img src={img05} alt="Laptops and Speakers"/>
            </div>
            <div className="album-container-images">
              <img src={img06} alt="Home Electric Appliances"/>
            </div>
            <div className="album-container-images">
              <img src={img07} alt="Trading Post Crystal Lake Pets"/>
            </div>
            <div className="album-container-images">
              <img src={img08} alt="Trading Post Crystal Lake Pets"/>
            </div>
            <div className="album-container-images">
              <img src={img10} alt="Trading Post Crystal Lake Pets"/>
            </div>
            <div className="album-container-images">
              <img src={img11} alt="Trading Post Crystal Lake Pets"/>
            </div>
            <div className="album-container-images">
              <img src={img12} alt="Trading Post Crystal Lake Pets"/>
            </div>
            <div className="album-container-images">
              <img src={img13} alt="Trading Post Crystal Lake Pets"/>
            </div>
            <div className="album-container-images">
              <img src={img14} alt="Trading Post Crystal Lake Pets"/>
            </div>
            </Slider>
          </div>
          <div className="container">
          hello
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}