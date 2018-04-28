import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "whatwg-fetch";

import config from "../../config";

import Slide from "./slide";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: false,
        variableWidth: false
      }
    }
  ]
};

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  componentWillMount() {
    fetch(config.blogApi)
      .then(response => response.json())
      .then(data => this.setState(data));
  }
  render() {
    const { actualSlide, isMobile, index } = this.props;
    let showImages = !!(actualSlide >= index);
    const featured = this.state.featured
      ? [
          <div>
            <Slide
              showImages={showImages}
              {...this.state.featured}
              key={`swiper--1`}
            />
          </div>
        ]
      : [];
    const elements = this.state.lists.map((element, index) => (
      <div>
        <Slide showImages={showImages} {...element} key={`swiper-${index}`} />
      </div>
    ));
    return (
      <section id="blog">
        <h3 className="section__title__background">What i write</h3>
        {!this.props.isMobile && (
          <Slider {...sliderSettings}>
            {(() => [...featured, ...elements])()}
          </Slider>
        )}
        {this.props.isMobile && (
          <div>{(() => [...featured, ...elements])()}</div>
        )}
      </section>
    );
  }
}
