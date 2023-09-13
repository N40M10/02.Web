import hotsale01 from '@images/hotSale01.png'
import hotsale02 from '@images/hotSale02.png'
import hotsale03 from '@images/hotSale03.png'
import hotsale04 from '@images/hotSale04.png'
import hotsale05 from '@images/hotSale05.png'
import hotsale06 from '@images/hotSale06.png'
import hotsale07 from '@images/hotSale07.png'
import hotsale08 from '@images/hotSale08.png'
import slide_chair2 from '@images/slide_chair2.png'
import vase from '@images/vase.png'
import iconStar from '@icons/star.svg'

import './index.scss'

const Home__HotSale = () => {
  const view = `
  <div class="hotsale">
    <h2>
      HOT DEALS
    </h2>

    <section class="hotsale__collection__container">
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale01}" />
        <img src="${hotsale01}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale02}" />
        <img src="${hotsale02}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale03}" />
        <img src="${hotsale03}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale04}" />
        <img src="${hotsale04}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale05}" />
        <img src="${hotsale05}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale06}" />
        <img src="${hotsale06}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale07}" />
        <img src="${hotsale07}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    <article class="collection__item">
      <picture>
        <soruce media="(min-width: 1300px)" srcset="${hotsale08}" />
        <img src="${hotsale08}" alt="articulo" />
      </picture>
      <div>
        <p>
          Linen Beach Towel
        </p>
        <ul>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
          <li>
            <button><img src="${iconStar}" alt="star ranking" /></button>
          </li>
        </ul>
        <p>
         30$
        </p>
      </div>
    </article>
    </section>

    <section class="hotsale__favorites__container">
      <div class="favorites__item">
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

        <div>
          <h3>
            INY VINTAGE CHAIR
          <h3>
          <button type="button">
            VIEW DETAILS
          </button>
        </div>
      </div>
      <div class="favorites__item">
        <picture>
          <soruce
            media="(min-width: 1300px)"
            srcset="../../Assets/images/slide-chair.png"
          />
          <img
            src="${vase}"
            alt="Sillon"
          />
        </picture>

        <div>
          <h3>
            LARGE TERRACOTA VASE
          <h3>
          <button type="button">
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
