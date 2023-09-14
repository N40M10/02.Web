import img01 from '@images/img01.png'
import img02 from '@images/img02.png'
import img03 from '@images/img03.png'
import img04 from '@images/img04.png'
import img05 from '@images/img05.png'
import img06 from '@images/img06.png'
import './index.scss'

const Main = () => {
  const view = `
    <main class="main">
      <img src="${img01}" alt="img" />
      <img src="${img02}" alt="img" />
      <img src="${img03}" alt="img" />
      <img src="${img04}" alt="img" />
      <img src="${img05}" alt="img" />
      <img src="${img06}" alt="img" />
    </main>
  `
  return view
}

export default Main
