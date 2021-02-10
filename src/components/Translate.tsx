import React, { Fragment } from 'react'

interface TranslateProps {
  t: string
  to?: 'uppercase' | 'lowercase' | 'titlecase'
}

export default function Translate({ t, to }: TranslateProps) {
  function caseString() {
    switch (to) {
      case 'uppercase':
        return t.toUpperCase()

      case 'lowercase':
        return t.toLowerCase()

      case 'titlecase':
        return t.toTitleCase()

      default:
        return t
    }
  }

  return <Fragment>{caseString()}</Fragment>
}
