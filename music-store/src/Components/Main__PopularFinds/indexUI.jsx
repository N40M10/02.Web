import React from "react";
import ImgPopularFinds01 from '@images/popular_finds_01.png'
import ImgPopularFinds02 from '@images/popular_finds_02.png'
import ImgPopularFinds03 from '@images/popular_finds_03.png'
import ImgPopularFinds04 from '@images/popular_finds_04.png'
import './index.scss'

const Main__PopularFindsUI = () => {
  return (
    <>
      <section className="main__popularfinds">
        <span></span>
        <h4>Popular Finds</h4>

        <div className="popularfinds__container">
          <article className="popularfind">
            <a href=""><img src={ImgPopularFinds01} alt="new product 01"/></a>
            <div>
              <h3>
                <a href=""> Brand Name </a>
                <strong>$2,995</strong>
              </h3>
              <strong>Product description here</strong>
              <div>
                <p>
                  <strong>0</strong>
                  colors available
                </p>
              </div>
            </div>
          </article>
          <article className="popularfind">
            <a href=""><img src={ImgPopularFinds02} alt="new product 01"/></a>
            <div>
              <h3>
                <a href=""> Brand Name </a>
                <strong>$2,995</strong>
              </h3>
              <strong>Product description here</strong>
              <div>
                <p>
                  <strong>0</strong>
                  colors available
                </p>
              </div>
            </div>
          </article>
          <article className="popularfind">
            <a href=""><img src={ImgPopularFinds03} alt="new product 01"/></a>
            <div>
              <h3>
                <a href=""> Brand Name </a>
                <strong>$2,995</strong>
              </h3>
              <strong>Product description here</strong>
              <div>
                <p>
                  <strong>0</strong>
                  colors available
                </p>
              </div>
            </div>
          </article>
          <article className="popularfind">
            <a href=""><img src={ImgPopularFinds04} alt="new product 01"/></a>
            <div>
              <h3>
                <a href=""> Brand Name </a>
                <strong>$2,995</strong>
              </h3>
              <strong>Product description here</strong>
              <div>
                <p>
                  <strong>0</strong>
                  colors available
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Main__PopularFindsUI
