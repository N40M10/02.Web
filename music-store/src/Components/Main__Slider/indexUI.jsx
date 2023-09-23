import React from "react";
import ImgSliderSm from "@images/img_slide_sm.png";
import ImgSliderMd from "@images/img_slide_md.png";
import ImgSliderLg from "@images/img_slide_lg.png";
import './index.scss'

const Main__SliderUI = () => {
  return (
    <>
      <div className="main__slider">
          <h2>Fullfilling dreams with strings attached</h2>
          <picture>
            <source media="(min-width: 1440px)" srcSet={ImgSliderLg} />
            <source media="(min-width: 1024px)" srcSet={ImgSliderMd} />
            <img src={ImgSliderSm} alt="Slider Images"/>
          </picture>
      </div>
    </>
  )
}

export default Main__SliderUI
