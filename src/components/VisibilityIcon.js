import SquareOption from '../utils/SquareOption'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const VisibilityIcon = (props) => {
  return (
    <>
      <SquareOption
        onClick={props.handleVisibility}
        OptionOn={FiEye}
        OptionOff={FiEyeOff}
        option={props.option}
      />
    </>
  )
}

export default VisibilityIcon
