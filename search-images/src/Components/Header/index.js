import Inputbar from '../Inputbar'
import Navbar from '../Navbar'
import './index.scss'

const Header = () => {
  const view = `
  <header class="header">
    ${Navbar()}
    ${Inputbar()}
  </header>
  `
  return view
}

export default Header
