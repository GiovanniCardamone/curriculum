import PageA4 from '../components/PageA4'

import React from 'react'

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
          <SkillProgress language='C' progress={85} />
          <SkillProgress language='C++' progress={85} />
          <SkillProgress language='C#' progress={85} />
          <SkillProgress language='Java' progress={85} />
          <SkillProgress language='Python' progress={85} />
          <SkillProgress language='Php' progress={85} />
          <SkillProgress language='Kotlin' progress={85} />
          <SkillProgress language='Dart' progress={85} />
          <SkillProgress language='Lua' progress={85} />
          <SkillProgress language='Javascript' progress={85} />
          <SkillProgress language='Typescript' progress={85} />
          <SkillProgress language='Bash/Sh' progress={85} />
          <SkillProgress language='HTML & CSS' progress={85} />
        </div>

        <div className='contact-container'>
          <Contact type='email' contact='g.cardamone2@gmail.com' />
        </div>
      </div>

      <div className='firstpage--rightside'>
        <span className='name'></span>
      </div>
    </div>
  )
}

interface SkillProgressProp {
  language: string
  progress: number
}

function SkillProgress({ language, progress }: SkillProgressProp) {
  return (
    <div className='progress'>
      <div className='center-text language'>
        <span className='clear-text'>{language}</span>
      </div>
      <div className='center-text percentage'>
        <span className='clear-text'>{progress}%</span>
      </div>

      <div className='progress-arrow' style={{ width: progress + '%' }}></div>
      <div className='arrow-head' style={{ width: progress + '%' }}></div>
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
