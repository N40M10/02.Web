import iconFacebook from '@icons/facebook.svg'
import iconTwitter from '@icons/twitter.svg'
import iconInstagram from '@icons/insta.svg'
import iconYouTube from '@icons/youtube.svg'
import './index.scss'

const Footer__TreeSocial = () => {
  const view = `
  <div class="footer_treesocial">
    <ul>
      <li><a href=""><img src="${iconFacebook}" alt="iconFacebook"/></a></li>
      <li><a href=""><img src="${iconTwitter}" alt="iconTwitter"/></a></li>
      <li><a href=""><img src="${iconInstagram}" alt="iconInstagram"/></a></li>
      <li><a href=""><img src="${iconYouTube}" alt="iconYouTube"/></a></li>
    </ul>
  </div>
  `
  return view
}

export default Footer__TreeSocial
