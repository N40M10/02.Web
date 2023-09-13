import './index.scss'

const Home__NewsLetter = () => {
  const view = `
  <div class="home__newsletter">

    <div class="newsletter__txt">
      <h2>
        SING UP FOR THE NEWSLETTER
      </h2>
      <h3>
        Subscribe for the lastest stories and promotions
      </h3>
    </div>

    <form action="submit" method="post" class="newsletter__form">
      <input type="email" name="home__email" placeholder="Enter your e-mail address" value="" autocomplete class="newsletter__form--email" />
      <input type="submit" class="newsletter__form--submit" value="sobre" />
    </form>
  <div>
  `
  return view
}

export default Home__NewsLetter
