import bg_bed from '@images/bg_bed.png'
import './index.scss'

const Home__Banner = () => {
  const view = `
  <article class="home__banner">
    <div class="banner__img__container">
      <picture>
        <source media="(min-width: 1300px)" srcset="${bg_bed}" />
        <img src="${bg_bed}" alt="articulo" />
      </picture>
    </div>
    <div class="banner__title__container">
      <h3>BEDSHEET SETS</h3>
      <span>
        <h4>$50.00</h4>
        <h4>$220.00</h4>
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
      <button type="button">
        VIEW DETAILS
      </button>
    </div>
  </article>
  `
  return view
}

export default Home__Banner
