import './index.scss'

const Home__NewsLetter = () => {
  const view = `
  <div class="home__newsletter">
    <h2>
      SING UP FOR THE NEWSLETTER
    </h2>
    <h3>
      Subscribe for the lastest stories and promotions
    </h3>
    <form action="submit" method="post" class="newsletter__form">
      <input type="email" name="home__email" placeholder="Enter your e-mail address" value="" autocomplete class="newsletter__form--email" />
      <input type="submit" class="newsletter__form--submit" value="sobre" />
    </form>
  <div>
  `
  return view
}

export default Home__NewsLetter
