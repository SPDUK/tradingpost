import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './album.css';

// images
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

// start initial slide at 3 due to a bug where the image loads in too big,
// still happens but on last slide so not as bad I guess.

// currently has an error when you leave a component..
// if you downgrade to previous version it fixes this problem
// but the image slider does not work on internet explorer.
// basically update slick when possible

const Album = () => {
  const settingsAlbum = {
    dots: true,
    className: 'center',
    arrows: true,
    centerMode: true,
    initialSlide: 3,
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 400,
    lazyLoad: true,
    autoplayspeed: 3500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          lazyLoad: true,
          centerMode: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div >
      <Navbar />
      <div className="album">
        <div className="album-container">
          <Slider {...settingsAlbum}>
            <div className="album-container-images">
              <img src={img01} alt="Trading Post Crystal Lake Pets" />
            </div>
            <div className="album-container-images">
              <img src={img02} alt="Various Electronics" />
            </div>
            <div className="album-container-images">
              <img src={img03} alt="Jewlery" />
            </div>
            <div className="album-container-images">
              <img src={img04} alt="Signed Jersey" />
            </div>
            <div className="album-container-images">
              <img src={img05} alt="Laptops and Speakers" />
            </div>
            <div className="album-container-images">
              <img src={img06} alt="Home Electric Appliances" />
            </div>
            <div className="album-container-images">
              <img src={img07} alt="Bookshelf of DVDs and Blu Ray disks" />
            </div>
            <div className="album-container-images">
              <img src={img08} alt="Wooden Furniture" />
            </div>
            <div className="album-container-images">
              <img src={img10} alt="Guitars and Amplifiers" />
            </div>
            <div className="album-container-images">
              <img src={img11} alt="Laptops and Headphones" />
            </div>
            <div className="album-container-images">
              <img src={img12} alt="Console Games" />
            </div>
            <div className="album-container-images">
              <img src={img13} alt="Washing Machines and home appliances" />
            </div>
            <div className="album-container-images">
              <img src={img14} alt="Shelves of tools" />
            </div>
          </Slider>
        </div>
        <div className="container album-description">
          <div className="album-description-text">
            <p>See something you like? Come visit in store or check out our <span>Ebay</span> and <span>Offerup</span> listings</p>
          </div>
          <div className="album-description-links">
            <a className="album-description-links-ebay" href="https://www.ebay.com/sch/pajatek1/m.html?_nkw=&_armrs=1&_ipg=&_from=">Ebay</a>
            <a className="album-description-links-offerup" href="https://offerupnow.com/p/2881193/">Offerup</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Album;
