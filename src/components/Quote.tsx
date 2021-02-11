import { makeStyles } from '@material-ui/core'
import React from 'react'

interface Props {
  children: string
  marginTop?: string
  border?: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    alignSelf: 'center',
    justifySelf: 'start',
    fontSize: '0.7em',
    boxSizing: 'border-box',
    ['@media print']: {
      fontSize: '1em',
      lineHeight: '1.45em',
    },
  },
}))

export default function Quote({ marginTop, border, children }: Props) {
  const classes = useStyles()
  return (
    <span
      className={classes.root}
      style={{
        marginTop: marginTop ? marginTop : 0,
        border: border ? border : 0,
      }}
    >
      {children}
    </span>
  )
}
