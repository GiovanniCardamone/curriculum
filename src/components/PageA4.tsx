import React from 'react'

interface PageA4Props {
  children: JSX.Element
}

export default function PageA4({ children }: PageA4Props) {
  return <div className='page'>{children}</div>
}
