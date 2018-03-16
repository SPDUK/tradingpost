import React, {Component} from 'react';
import Slider from 'react-slick';
import '../styles/ratings.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
class Ratings extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 400,
      dots: true,
      autoplayspeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <div className="ratings">
          <div>
          </div>
          <div className="ratings-reviews">
            <Slider {...settings}>
              <div id="ebay" className="ratings-reviews-review">
                  <div className="ratings-reviews-review-icon ratings-reviews-review-icon-ebay"><i className="fa fa-thumbs-up"/></div>
                  <div className="ratings-reviews-review-title"><p>Ebay</p></div>
                  <div className="ratings-reviews-review-stars">
                    <i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/>
                    <p>5 Stars - 6286 Ratings</p>
                  </div>
              </div>
              <div className="ratings-reviews-review">
              <div className="ratings-reviews-review-icon ratings-reviews-review-icon-offerup"><i className="fa fa-thumbs-up"/></div>
                  <div className="ratings-reviews-review-title"><p>Offerup</p></div>
                  <div className="ratings-reviews-review-stars">
                    <i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/>
                    <p>5 Stars - 79 Ratings</p>
                  </div>
              </div>
              <div className="ratings-reviews-review">
              <div className="ratings-reviews-review-icon ratings-reviews-review-icon-facebook"><i className="fa fa-thumbs-up"/></div>
                  <div className="ratings-reviews-review-title"><p>Facebook</p></div>
                  <div className="ratings-reviews-review-stars">
                    <i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star-half"/>
                    <p>4.5 Stars</p>
                  </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Ratings;
