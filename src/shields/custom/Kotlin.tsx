import React from 'react'

interface Props {
  color: string
}

export default ({ color }: Props) => (
  <svg viewBox='0 0 128 128'>
    <g>
      <path fill={color} d='M 0,0 61.4,0 0,60.4 z'></path>
      <path fill={color} d='M 0,128 128,0 64.6,0 0,63.7 z'></path>
      <path fill={color} d='M 128,128 64.6,66.6 3.3,128 z'></path>
    </g>
  </svg>
)
