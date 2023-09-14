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

const isData = async () => {
  const response = await getData()
  const data = await response.json()
  console.log(data)
  const imgList = []
  data.hits.map(item => {
    imgList.push(setElement(item.largeImageURL, item.webformatURL, item.id))
  })

  return imgList
}

const Images = async () => {
  const main = document.querySelector('.main')
  const imgList = await isData()
  main.insertAdjacentHTML('beforeend', [...imgList])
}

export default Images
