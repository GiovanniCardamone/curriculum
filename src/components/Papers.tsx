import React from 'react'
import { makeStyles } from '@material-ui/core'

import PageA4 from './PageA4'

interface PapersProp {
  children: JSX.Element | JSX.Element[]
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    ['@media print']: {
      width: '270mm',
    },
  },
})

export default function Papers({ children }: PapersProp) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {Array.isArray(children) ? (
        children.map((c, index) => <PageA4 key={index}>{c}</PageA4>)
      ) : (
        <PageA4>{children}</PageA4>
      )}
    </div>
  )
}
