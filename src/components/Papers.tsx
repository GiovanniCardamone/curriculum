import React, { JSXElementConstructor } from 'react'
import PageA4 from './PageA4'

interface PapersProp {
  papers: JSX.Element | JSX.Element[]
}

export default function Papers({ papers }: PapersProp) {
  return (
    <div className='papers'>
      {Array.isArray(papers) ? (
        papers.map((paper, index) => <PageA4 key={index}>{paper}</PageA4>)
      ) : (
        <PageA4>{papers}</PageA4>
      )}
    </div>
  )
}
