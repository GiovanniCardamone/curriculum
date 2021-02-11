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
    fontSize: '11.2px',
    ['@media print']: {
      fontSize: '16px',
      lineHeight: '23.2px',
    },
  },
}))

export default function Experience({ children }: Props) {
  const classes = useStyles()
  return <span className={classes.root}>{children}</span>
}
