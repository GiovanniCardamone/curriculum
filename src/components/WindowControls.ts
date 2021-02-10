import { makeStyles } from '@material-ui/core'
import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
  },
})

export default function WindowControls({}: Props) {
  return null
}
