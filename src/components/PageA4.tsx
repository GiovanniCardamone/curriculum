import React from 'react'
import { makeStyles, useMediaQuery } from '@material-ui/core'

interface PageA4Props {
  children: JSX.Element
}

const useStyles = makeStyles({
  root: {
    width: `calc(100 / 31 * 21vh)`,
    height: `calc(100 / 31 * 29.7vh)`,
    margin: `calc(100 / 62 * 1.24vh) calc(100 / 62 * 1.24vh)`,
    border: `1px #d3d3d3 solid`,
    background: '#fff',
    boxShadow: `#888 0 6px 6px -3px`,
    ['@media print']: {
      background: '#000',
      boxShadow: 'none',
      border: '1px solid black',
      pageBreakAfter: 'always',
    },
  },
})

export default function PageA4({ children }: PageA4Props) {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}
