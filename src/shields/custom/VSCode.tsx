import React from 'react'

interface Props {
  color: string
}

export default ({ color }: Props) => (
  <svg viewBox='0 0 128 128'>
    <path
      fill={color}
      d='M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z'
    ></path>
  </svg>
)