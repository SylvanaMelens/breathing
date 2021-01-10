import React from 'react'
import { FaStop, FaPlay } from 'react-icons/fa'

const StartButton = ({ handleClick, start }) => {
  return (
    <button
      onClick={handleClick}
      className='start'
    >
      {start ? <FaPlay /> : <FaStop />}
    </button>
  )
}

export default StartButton
