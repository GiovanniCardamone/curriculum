import React from 'react'
import Translate from '../components/Translate'

import './FistPage.scss'

interface FirstPageProp {}

export default function FirstPage({}: FirstPageProp) {
  return (
    <div className='firstpage'>
      <div className='firstpage--leftside'>
        <div className='avatar-container'>
          <img alt='Giovanni Cardamone' className='avatar' src='https://avatars0.githubusercontent.com/u/5117748' />
          <span className='name'>Giovanni Cardamone</span>
        </div>
        <div className='skillprogress-container'>
          <SkillProgress language='C' progress={15} />
          <SkillProgress language='C++' progress={25} />
          <SkillProgress language='C#' progress={35} />
          <SkillProgress language='Java' progress={45} />
          <SkillProgress language='Python' progress={55} />
          <SkillProgress language='Php' progress={65} />
          <SkillProgress language='Kotlin' progress={75} />
          <SkillProgress language='Dart' progress={85} />
          <SkillProgress language='Lua' progress={95} />
          <SkillProgress language='Javascript' progress={100} />
          <SkillProgress language='Typescript' progress={5} />
          <SkillProgress language='Bash/Sh' progress={50} />
          <SkillProgress language='HTML & CSS' progress={25} />
        </div>

        {/* <div className='contact-container'>
          <Contact type='email' contact='g.cardamone2@gmail.com' />
        </div> */}
      </div>

      <div className='firstpage--rightside'>
        <span className='data-table'>
          <div>
            <span>
              <Translate t='nome' to='titlecase' />
            </span>
            <span>Giovanni</span>
          </div>
        </span>
        <span className='section-title'>Bio</span>
      </div>
    </div>
  )
}

interface SkillProgressProp {
  language: string
  progress: number
}

function SkillProgress({ language, progress }: SkillProgressProp) {
  const min = 'ef0078'
  const max = '90ee02'

  const mix = (start: number, end: number, percent: number) => start + percent * (end - start)

  const progressColor = () => {
    const r1 = parseInt(min.substr(0, 2), 16)
    const g1 = parseInt(min.substr(2, 2), 16)
    const b1 = parseInt(min.substr(4, 2), 16)

    const r2 = parseInt(max.substr(0, 2), 16)
    const g2 = parseInt(max.substr(2, 2), 16)
    const b2 = parseInt(max.substr(4, 2), 16)

    const q = progress / 100
    return `rgb(${Math.round(mix(r1, r2, q))}, ${Math.round(mix(g1, g2, q))}, ${Math.round(mix(b1, b2, q))})`
  }

  return (
    <div className='progress'>
      <div className='center-text language static-size-1'>
        <span className='clear-text'>{language}</span>
      </div>
      <div className='center-text percentage static-size-2'>
        <span className='clear-text'>{progress}%</span>
      </div>

      <div className='progress-arrow' style={{ width: progress + '%', backgroundColor: progressColor() }}></div>
    </div>
  )
}

interface ContactProps {
  type: 'email' | 'phone'
  contact: string
}

function Contact({ type, contact }: ContactProps) {
  return (
    <div className='contact'>
      <span className='type'>{type}</span>
      <span className='text'>{contact}</span>
    </div>
  )
}
