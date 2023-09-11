import slide_chair from '@images/slide_chair.png'
import './index.scss'

const Home__Slide = () => {
  const view = `
  <div class="slide">
    <div class="slide__img">
      <picture>
        <soruce
          media="(min-width: 1300px)"
          srcset="../../Assets/images/slide-chair.png"
        />
        <img
          src="${slide_chair}"
          alt="Sillon"
        />
      </picture>
    </div>
    <div class="slide__txt_container">
      <p class="slide__txt">
        HOT DEALS THIS WEEK
      </p>
      <h3 class="slide__title">
        SALE UP 50%
        MODERN FURNITURE
      <h3>
      <button type="button" class="slide__button">
        VIEW NOW
      </button>
    </div>
  </div>
  `
  return view
}

export default Home__Slide
