import './index.scss'

const addContent = () => {
  const container = document.querySelector('.main')

  window.addEventListener('scroll', () => {
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement
    scrollTop + clientHeight > scrollHeight - 40 && setTimeout(setDumies, 2000)
  })

  container.addEventListener('click', () => setDumies())

  const setDumies = () => {
    console.log('hola')
    let dumies = []
    for (let index = 0; index < 20; index++) {
      const box = document.createElement('div')
      dumies.push(box)
    }
    container.append(...dumies)
  }
}

export default addContent
