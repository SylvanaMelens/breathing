/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

import SquareOption from '../utils/SquareOption'
import { IoVolumeMute, IoVolumeHigh } from 'react-icons/io5'

const SoundIcon = props => {
  return (
    <>
      <SquareOption
        onClick={props.handleSound}
        OptionOn={IoVolumeHigh}
        OptionOff={IoVolumeMute}
        option={props.option}
      />
    </>
  )
}

export default SoundIcon
