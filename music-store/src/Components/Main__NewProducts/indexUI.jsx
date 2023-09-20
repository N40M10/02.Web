import React from "react";
import ImgNewProduct01 from '@images/new_product_01.png'
import ImgNewProduct02 from '@images/new_product_02.png'
import ImgNewProduct03 from '@images/new_product_03.png'
import ImgNewProduct04 from '@images/new_product_04.png'
import './index.scss'

const Main__NewProductsUI = () => {
  return (
    <>
      <section className="main__newproducts">
        <span></span>
        <h4>New Products</h4>

        <div className="newproduct__container">
          <article className="newproduct">
            <a href=""><img src={ImgNewProduct01} alt="new product 01"/></a>
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
          <article className="newproduct">
            <a href=""><img src={ImgNewProduct02} alt="new product 01"/></a>
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
          <article className="newproduct">
            <a href=""><img src={ImgNewProduct03} alt="new product 01"/></a>
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
          <article className="newproduct">
            <a href=""><img src={ImgNewProduct04} alt="new product 01"/></a>
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

export default Main__NewProductsUI
