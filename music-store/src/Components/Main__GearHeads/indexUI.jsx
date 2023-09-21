import React from "react";
import ImgGearHead01 from '@images/gear_head_01.png'
import ImgGearHead02 from '@images/gear_head_02.png'
import ImgGearHead03 from '@images/gear_head_03.png'
import ImgGearHead04 from '@images/gear_head_04.png'
import ImgGearHead05 from '@images/gear_head_05.png'
import './index.scss'

const main__gearheadsUI = () => {
  return (
    <>
      <section className="main__gearheads">
        <span></span>
        <h4>Gear Heads</h4>

        <div className="gearhead__container">
          <figure className="gearhead">
            <a href=""><img src={ImgGearHead01} alt="Gear Head Element"/></a>
            <figcaption>
              <a href=""><h4>Article Title</h4></a>
              <h6>Article Subhead</h6>
            </figcaption>
          </figure>
          <figure className="gearhead">
            <a href=""><img src={ImgGearHead02} alt="Gear Head Element"/></a>
            <figcaption>
              <a href=""><h4>Article Title</h4></a>
              <h6>Article Subhead</h6>
            </figcaption>
          </figure>
          <figure className="gearhead">
            <a href=""><img src={ImgGearHead03} alt="Gear Head Element"/></a>
            <figcaption>
              <a href=""><h4>Article Title</h4></a>
              <h6>Article Subhead</h6>
            </figcaption>
          </figure>
          <figure className="gearhead">
            <a href=""><img src={ImgGearHead04} alt="Gear Head Element"/></a>
            <figcaption>
              <a href=""><h4>Article Title</h4></a>
              <h6>Article Subhead</h6>
            </figcaption>
          </figure>
          <figure className="gearhead">
            <a href=""><img src={ImgGearHead05} alt="Gear Head Element"/></a>
            <figcaption>
              <a href=""><h4>Article Title</h4></a>
              <h6>Article Subhead</h6>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}

export default main__gearheadsUI
