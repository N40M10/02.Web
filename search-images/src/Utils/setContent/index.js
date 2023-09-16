import { setElements } from '@components/Images'
import './index.scss'

const setContent = async () => {
  const container = document.querySelector('.main__images')

  const addContent = async (search, per, page) => {

    try {
      const setPage = container.childNodes.length + 1

      const getSearch = document.querySelector('.inputbar')
      const setSearch = getSearch.children[0].value

      const searchValue = setSearch === '' ? 'linux' : setSearch

      const elementList = await setElements(searchValue, per, setPage)

      if (elementList.length <= 0) {
        const subcontainer = document.createElement('section')
        subcontainer.className = 'main__scroll--end'
        subcontainer.insertAdjacentText(
          'beforeend',
          `Felicidades llegaste al final, estas son todas las imagenes`
        )

        container.insertAdjacentElement('beforeend', subcontainer)
        window.removeEventListener('scroll', setScroll)
      } else {
        const subcontainer = document.createElement('section')
        subcontainer.insertAdjacentHTML('beforeend', [...elementList])
        subcontainer.innerHTML = subcontainer.innerHTML.replace(/,/g, '')

        container.insertAdjacentElement('beforeend', subcontainer)
      }

    } catch (error) {

      const subcontainer = document.createElement('section')
      subcontainer.className = 'main__scroll--end'
      subcontainer.insertAdjacentText(
        'beforeend',
        `Felicidades llegaste al final, estas son todas las imagenes`
      )

      container.insertAdjacentElement('beforeend', subcontainer)
      window.removeEventListener('scroll', setScroll)

    }
  }

  const setScroll = () => {
    const {scrollHeight, clientHeight, scrollTop } = document.documentElement
    scrollTop + clientHeight == scrollHeight && setTimeout(addContent, 200)
  }

  window.addEventListener('scroll', setScroll, false)
}

export default setContent
