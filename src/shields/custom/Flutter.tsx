import React from 'react'

interface Props {
  color: string
}

export default ({ color }: Props) => (
  <svg viewBox='0 0 128 128'>
    <path fill={color} d='M 12.3 64.2 76.3 0 115.7 0 32.1 83.6z'></path>
    <path
      fill={color}
      d='M 76.3 128 115.7 128 81.6 93.9 115.7 59.1 76.3 59.1 42.2 93.5z'
    ></path>
  </svg>
)
