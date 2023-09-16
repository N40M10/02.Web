import { Images } from '@components/Images'
import './index.scss'

const getInput = () => {
  const isInput = document.querySelector('.inputbar')
  isInput.addEventListener(
    'change',
    (change) => Images(change.originalTarget.value)
  )
}

export default getInput
