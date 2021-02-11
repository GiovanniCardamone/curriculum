import React, { JSXElementConstructor } from 'react'

interface Props {
  useOriginal: boolean
  original: JSX.Element
  coloured: JSXElementConstructor<SvgColoured>
  color: string
}

interface SvgColoured {
  color: string
}

export default function ShieldSelector({
  useOriginal,
  original,
  coloured,
  color,
}: Props): JSX.Element | React.ReactElement {
  return useOriginal
    ? original
    : React.createElement<SvgColoured>(coloured, { color: color })
}
