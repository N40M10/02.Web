import hotsale01 from '@images/hotSale01.png'
import hotsale02 from '@images/hotSale02.png'
import hotsale03 from '@images/hotSale03.png'
import hotsale04 from '@images/hotSale04.png'
import slide_chair2 from '@images/slide_chair2.png'

import './index.scss'

const Home__HotSale = () => {
  const view = `
  <div class="hotsale">
    <h2>
      HOT DEALS
    </h2>
    <section class="hotsale__collection__container">
      <div class="collection__item">
        <article>
          <picture>
            <soruce media="(min-width: 1300px)" srcset="${hotsale01}" />
            <img src="${hotsale01}" alt="articulo" />
          </picture>
          <div>
            <p>
              Linen Beach Towel
            </p>
            <p>
             30$
            </p>
          </div>
        </article>
      </div>
      <div class="collection__item">
        <article>
          <picture>
            <soruce media="(min-width: 1300px)" srcset="${hotsale02}" />
            <img src="${hotsale02}" alt="articulo" />
          </picture>
          <div>
            <p>
              Linen Beach Towel
            </p>
            <p>
             30$
            </p>
          </div>
        </article>
      </div>
      <div class="collection__item">
        <article>
          <picture>
            <soruce media="(min-width: 1300px)" srcset="${hotsale03}" />
            <img src="${hotsale03}" alt="articulo" />
          </picture>
          <div>
            <p>
              Linen Beach Towel
            </p>
            <p>
             30$
            </p>
          </div>
        </article>
      </div>
      <div class="collection__item">
        <article>
          <picture>
            <soruce media="(min-width: 1300px)" srcset="${hotsale04}" />
            <img src="${hotsale04}" alt="articulo" />
          </picture>
          <div>
            <p>
              Linen Beach Towel
            </p>
            <p>
             30$
            </p>
          </div>
        </article>
      </div>
    </section>
    <section class="hotsale__favorites__container">
      <div class="favorites__item">
        <div class="slide__img">
          <picture>
            <soruce
              media="(min-width: 1300px)"
              srcset="../../Assets/images/slide-chair.png"
            />
            <img
              src="${slide_chair2}"
              alt="Sillon"
            />
          </picture>
        </div>
        <div class="slide__txt_container">
          <h3 class="slide__title">
            INY VINTAGE CHAIR
          <h3>
          <button type="button" class="slide__button">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </section>
  </div>
  `
  return view
}

export default Home__HotSale
