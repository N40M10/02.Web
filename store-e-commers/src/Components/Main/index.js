import Home__Slide from '@components/Home__Slide'
import Home__HotSale from '@components/Home__HotSale'
import Home__Banner from '@components/Home__Banner'
import Home__TopSale from '@components/Home__TopSale'
import Home__NewsLetter from '@components/Home__NewsLetter'

import './index.scss'

const Main = () => {
    const view = `
    <main id="main">
        ${Home__Slide()}
        ${Home__HotSale()}
        ${Home__Banner()}
        ${Home__TopSale()}
        ${Home__NewsLetter()}
    </main>
    `
    return view
}

export default Main
