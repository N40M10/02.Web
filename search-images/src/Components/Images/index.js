import getData from '../../Utils/Api'
import './index.scss'

const setElement = (urlImage, webImg, idImg) => {
  const view = `
  <a href="${urlImage}" id="${idImg}">
    <img src="${webImg}" alt="imagen ${idImg}" />
  </a>
  `
  return view
}

const isData = async (search, per, page) => {
  const response = await getData(search, per, page)
  const data = await response.json()
  const imgList = []
  data.hits.map(item => {
    imgList.push(setElement(item.largeImageURL, item.webformatURL, item.id))
  })

  return imgList
}

const Images = async (search, per, page) => {
  const main = document.querySelector('.main')
  main.innerHTML = ''
  const imgList = await isData(search, per, page)
  main.insertAdjacentHTML('beforeend', [...imgList])
}

export default Images
