import top_rating_01 from '@images/topRating01.png'
import top_rating_02 from '@images/topRating02.png'
import top_rating_03 from '@images/topRating03.png'
import top_rating_04 from '@images/topRating04.png'
import top_rating_05 from '@images/topRating05.png'
import top_rating_06 from '@images/topRating06.png'
import top_rating_07 from '@images/topRating07.png'
import top_rating_08 from '@images/topRating08.png'
import top_rating_09 from '@images/topRating09.png'
import iconStar from '@icons/star.svg'
import './index.scss'

const Home__TopSale = () => {
  const view = `
  <section class="home__topsale">

    <h2>
      TOP RATING
    </h2>

    <div class="home__topsale__container">
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_01}" />
          <img src="${top_rating_01}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Tray with Foot
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_02}" />
          <img src="${top_rating_02}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Small Bamboo Box
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_03}" />
          <img src="${top_rating_03}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Glazed Stoneware Plate
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_04}" />
          <img src="${top_rating_04}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Glazed Stoneware Plate
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_05}" />
          <img src="${top_rating_05}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Glazed Stoneware Plate
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_06}" />
          <img src="${top_rating_06}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Glazed Stoneware Plate
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_07}" />
          <img src="${top_rating_07}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Glazed Stoneware Plate
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_08}" />
          <img src="${top_rating_08}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Glazed Stoneware Plate
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
      <article class="home__topsale__item">
        <picture>
          <source media="(min-width: 1300px)" srcset="${top_rating_09}" />
          <img src="${top_rating_09}" alt="articulo" />
        </picture>

        <div class="home__topsale__txt">
          <h3>
            Glazed Stoneware Plate
          </h3>
          <ul>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
            <li><button type="button"><img src="${iconStar}" alt="icon star" /></button></li>
          </ul>
          <p>
            61$
          </p>
        </div>
      </article>
    </div>
    <button type="button">load more products</button>
  </section>
  `
  return view
}

export default Home__TopSale
