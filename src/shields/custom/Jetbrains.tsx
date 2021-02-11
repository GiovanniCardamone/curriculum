import React from 'react'

interface Props {
  color: string
}

export default ({ color }: Props) => (
  <svg viewBox='0 0 128 128'>
    <g fill={color}>
      <path d='M119.2 54.2c0-1.2.8-1.9 2.3-1.9 1.6 0 2.5.5 5.5 2v-4.5c-3-1.3-3.8-1.8-5.8-1.8-4.3 0-6 2.6-6 6.6 0 8.3 8.2 6.9 8.2 10.7 0 1.4-.9 2.2-2.4 2.2-2 0-3-.8-6-3v5c2 1.2 3.3 2.3 5.8 2.3 4.1 0 6.7-2.6 6.7-7.1 0-8-8.3-7-8.3-10.5zM64.6 60.5c2.1-1.2 3.2-3.3 3.2-5.8 0-3.5-1.7-6.8-5.5-6.8h-7.3v23h4v-9l6.2 9h4.5l-6.4-10.2c.5 0 .8.1 1.3-.2zm-3.5-2.5h-2.1v-6h2c1.7 0 2.7 1.2 2.7 3-.1 2-1.3 3-2.6 3zM77.1 48l-6.9 23h4.3l1.4-4h7.2l1.5 4h4.4l-7.6-23h-4.3zm.1 15l2.2-9 2.4 9h-4.6zM90 48h4v23h-4zM109 62.4l-8-14.4h-4v23h4v-14.5l9 14.5h3v-23h-4zM49.3 58.6c1.6-1 2.6-2.6 2.6-4.6 0-1-.2-2.1-.7-3.1-1.5 1.3-3.1 2.8-3.6 3.2.1.3.1.3.1.6 0 1.2-.7 2.3-2.3 2.3h-1.4v-5.199999999999999l4.8-3.3c-.7-.3-1.6-.6-2.6-.6h-6.2v23h6.7c5.4 0 6.6-3.9 6.6-6.6 0-2.6-1.3-4.8-4-5.7zm-3.9 8.4h-1.4v-5h2.1c1.6 0 2.8.7 2.8 2.4 0 2-.9 2.6-3.5 2.6zM50 48.5l-.5.5-4.5 3.2v3.6c1-.7 1.6-1.4 2.2-1.9l3.5-3.1s1.7-1.6 2.7-2.5l.3-.3c.3-.2.4-.4.4-.6 0-.1 1.1-1.6 1-1.7-.3-.3-3.3 1.5-5.1 2.8zM33.5 58.9c.1-.5.1-.9.1-.9.4-3 .8-6 .8-8.1 0-1-.1-1.7-.3-2.1-.2-.3-.4-.4-.7-.5-.4-.1-.8.1-1.2.4-1.3.9-2 3.6-2 8.2 0 1.5.1 3.2.2 5.1-.2.1-.9.8-.9.8l-1.3 1.2-.1.1c-1.2 1.1-2 1.7-2.3 1.8-.4.1-.7.2-1 .2 1.7-1.2 3-3.9 3-5.4 0-.2 0-.3-.1-.5-.3-1.1-.8-1.9-1.6-2.3-.7-.4-1.6-.4-2.7 0l-.4.2c-1.8.8-7.5 4-9.2 5 .2-2.5 1.2-13.7 1.5-19.6.2-3.8 0-1.5 0-2.2 0-2.8-3.5 0-5.4 1.9-.8.8-3.3 3.1-2.4 4.9 1 1.9 2 1.3 2.6 4.5 1 5.7.2 11.6.2 12-.3.1-2.7 1.3-2.7 1.3-4.1 1.9-7.3 3.4-7.3 5.8 0 .4.1.8.2 1.2 3.4 9 8.1 13.8 10 13.3 2.7-.7 2.8-4.2 3-9.6.1-2.7.2-5.7.6-9 .2-.1 4.7-3.5 5.6-4-.4.8-.4 1.6-.4 2 0 1.1.2 1.9.4 2.4.4.8.7 1.3 1.5 1.7 1.1.5 2 .6 3.8-.1.8-.3 2.2-1.3 3.7-2.6.3.5 1.6 2.8 1.6 2.8l1.2 2.1c.5 1 1.4 1.3 2.4.8.7-.4 1.2-.7 1.4-1.2v-.3c0-.3.1-.6-.1-.9-1.4-2.5-1.3-4.7-1.3-6.3v-.3c0-.2 2.4-1.9 2.4-1.9l2.6-2v-3.6l-2.5 1.7c.1-.1-2.1 1.4-2.9 2zm-24.5 18.8c-1.1-.9-1.6-1.6-2.4-3.6-1.4-3.3.5-4.3 3.9-6.2-.4 3.4-.7 10.6-1.5 9.8zm13.6-14.1c0-1.2-.3-2.8 1.3-3.7.6-.3 1-.1 1.2.1.4.5-.6 2.4-2.5 3.6z'></path>
    </g>
  </svg>
)