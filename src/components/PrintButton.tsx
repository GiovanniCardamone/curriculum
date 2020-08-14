import React from 'react'

interface PrintButtonProp {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function PrintButton({ onClick }: PrintButtonProp) {
  return (
    <button className='printButton' onClick={onClick}>
      icona salva
    </button>
  )
}
