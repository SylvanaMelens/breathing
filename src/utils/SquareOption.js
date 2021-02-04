/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

const SquareOption = (props) => {
  const { OptionOn, OptionOff, onClick, option } = props

  return (
    <div>
      {option ? (
        <OptionOn style={{ color: '#bbdefb', fontSize: '1.5em' }} onClick={onClick} />
      )
        : (
          <OptionOff style={{ color: '#42a5f5', fontSize: '1.5em' }} onClick={onClick} />
          )}
    </div>
  )
}

export default SquareOption
