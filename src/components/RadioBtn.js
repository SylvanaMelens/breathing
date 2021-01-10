import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[100]
    }
  },
  checked: {}
})((props) => <Radio color='default' {...props} />)

const RadioBtn = (props) => {
  const choice = props.durations.map(num => (

    <FormControlLabel
      key={num}
      value={num}
      control={<BlueRadio />}
      label={`${num}`}
      checked={props.selected === num.toString()}
    />

  ))
  return (
    <>
      <div>
        <RadioGroup
          aria-label='duration'
          name='duration'
          value={props.selected}
          onChange={props.onChange}
          row
        >
          {choice}
        </RadioGroup>
      </div>
    </>
  )
}

export default RadioBtn
