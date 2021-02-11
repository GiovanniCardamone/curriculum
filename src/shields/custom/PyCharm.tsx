import React from 'react'

interface Props {
  color: string
}

export default ({ color }: Props) => (
  <svg viewBox='0 0 128 128'>
    <g id='original'>
      <path
        fill={color}
        d='M96.25,40.67h-.51A23.45,23.45,0,0,0,72.88,58.24h-.12a20.1,20.1,0,0,1-39.85-3.78,15.9,15.9,0,0,1,.16-2.21c0-.15,0-.3.06-.45s.1-.57.16-.85A63.63,63.63,0,0,1,66.75,7.43,48.94,48.94,0,0,0,4.21,50.23c-.06.18-.15.35-.21.53v71.55H33V99.18A49,49,0,0,0,100,40.67h-3.8Z'
      ></path>
      <path
        fill={color}
        d='M67.92,57.32l.09-.15A28.23,28.23,0,0,1,95.4,35.75c.29,0,.57,0,.86,0h.65l12.34,0a15,15,0,0,0,6.16-1.51c-.48-.06-1-.13-1.44-.23a19.82,19.82,0,0,1-15-13.41A19.83,19.83,0,0,0,110.8,28a19.64,19.64,0,0,0,11.88-1.35A15.13,15.13,0,0,0,108.86,5.48l-11.07,0H95.4A58.54,58.54,0,0,0,38.22,51.52a15,15,0,0,0-.39,3,15.18,15.18,0,0,0,30.09,2.86Zm36.23-43.1a4.7,4.7,0,1,1,3.69,5.52A4.71,4.71,0,0,1,104.16,14.22ZM124,107.4a15.15,15.15,0,0,1-15.15,15.15H95.4a58.23,58.23,0,0,1-38.3-14.34A53.72,53.72,0,0,0,91.72,92a29.19,29.19,0,0,0,3.68.26c.29,0,13.25,0,13.45,0A15.16,15.16,0,0,1,124,107.4Z'
      ></path>
    </g>
  </svg>
)