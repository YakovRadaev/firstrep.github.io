import React from "react"
import Slider from "react-slick";

const TestSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Slider {...settings}>
          <div>
            <h3 className="h3_slider">1</h3>
          </div>
          <div>
            <h3 className="h3_slider">2</h3>
          </div>
          <div>
            <h3 className="h3_slider">3</h3>
          </div>
          <div>
            <h3 className="h3_slider">4</h3>
          </div>
          <div>
            <h3 className="h3_slider">5</h3>
          </div>
          <div>
            <h3 className="h3_slider">6</h3>
          </div>
        </Slider>
    )

}

export default TestSlider