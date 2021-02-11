import { makeStyles } from '@material-ui/core'
import React from 'react'

interface Props {
  children: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    alignSelf: 'start',
    justifySelf: 'start',
    fontSize: '0.7em',
    ['@media print']: {
      fontSize: '1em',
      lineHeight: '1.45em',
    },
  },
}))

export default function Experience({ children }: Props) {
  const classes = useStyles()
  return <span className={classes.root}>{children}</span>
}
