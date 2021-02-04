/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

const Square = (props) => {
  return (
    <>
      <div className='square-container'>
        <div id='1' className={`action ${props.bloquer}`} />

        <div className='square-space'>
          <div id='2' className={`action ${props.inspirer}`} />
          <div className='square'>
            <div className={`dot ${props.dotClass}`} />
          </div>
          <div id='3' className={`action ${props.expirer}`} />
        </div>

        <div id='4' className={`action ${props.bloquer}`} />
      </div>
    </>
  )
}

export default Square
