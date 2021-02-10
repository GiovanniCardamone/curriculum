import React from 'react'
import { makeStyles } from '@material-ui/core'

interface PrintButtonProp {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    right: '1vw',
    bottom: '1vh',
    background: '#fff',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '1em',
  },
})

export default function PrintButton({ onClick }: PrintButtonProp) {
  return (
    <button className='printButton' onClick={onClick}>
      icona salva
    </button>
  )
}
