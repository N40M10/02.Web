import iconPhone from '@icons/phone.svg'
import './index.scss'

const Footer__Contact = () => {
  const view = `
  <div class="footer__contact">
    <ul>
      <li><img src="${iconPhone}" alt="icon phone" /><a href="">+61 3 8376 6284</a></li>
      <li><a href="">121 king street, Melbourne 3000</a></li>
      <li><a href="">contact@urbanoutfitters.com</a></li>
    </ul>
  </div>
  `
  return view
}

export default Footer__Contact
