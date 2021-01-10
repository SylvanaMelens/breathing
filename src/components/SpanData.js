
import React from 'react'
import dataDescr from '../data/dataDescr'
import { GoInfo } from 'react-icons/go'

const SpanData = () => {
  return (
    <span
      data-descr={dataDescr}
      className='information'
    >
      <GoInfo />
    </span>
  )
}

export default SpanData
