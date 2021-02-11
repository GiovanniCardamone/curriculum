import React, { JSXElementConstructor, useRef } from 'react'
import { makeStyles, useTheme } from '@material-ui/core'

import AvatarPhoto from '../assets/profile.sourcesense.jpg'
import ShieldSelector from '../components/ShieldSelector'

import theme from '../theme'

import OriginalC from '../shields/original/C'
import ColouredC from '../shields/custom/C'

import OriginalCPlusPlus from '../shields/original/CPlusPlus'
import ColouredCPlusPlus from '../shields/custom/CPlusPlus'

import OriginalCSharp from '../shields/original/CSharp'
import ColouredCSharp from '../shields/custom/CSharp'

import OriginalPython from '../shields/original/Python'
import ColouredPython from '../shields/custom/Python'

import OriginalKotlin from '../shields/original/Kotlin'
import ColouredKotlin from '../shields/custom/Kotlin'

import OriginalJavascript from '../shields/original/Javascript'
import ColouredJavascript from '../shields/custom/Javascript'

import OriginalTypescript from '../shields/original/Typescript'
import ColouredTypescript from '../shields/custom/Typescript'

import OriginalPhp from '../shields/original/Php'
import ColouredPhp from '../shields/custom/Php'

import OriginalHTML from '../shields/original/HTML'
import ColouredHTML from '../shields/custom/HTML'

import OriginalJava from '../shields/original/Java'
import ColouredJava from '../shields/custom/Java'

import OriginalBash from '../shields/original/Bash'
import ColouredBash from '../shields/custom/Bash'
import Quote from '../components/Quote'

interface FirstPageProp {}

const useStylesFirstPage = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '30%',
    background: theme.palette.primary.main,
    ['@media print']: {
      background: theme.palette.common.white,
    },
  },
  title: {
    position: 'relative',
    display: 'block',
    height: '5%',
    boxSizing: 'border-box',
    paddingTop: '20.8px',
    fontSize: '11.2px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
    ['@media print']: {
      fontSize: '16px',
      color: theme.palette.common.black,
    },
  },
  avatar: {
    width: '100%',
    height: '21.3%',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '50%',
  },
  skillsTitle: {
    position: 'relative',
    display: 'block',
    height: '5%',
    boxSizing: 'border-box',
    paddingTop: '4.8px',
    fontSize: '24px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
    ['@media print']: {
      color: theme.palette.common.black,
    },
  },
  skillsContainer: {
    flexGrow: 1,
    width: '100%',
    boxSizing: 'border-box',
    padding: '11.2px 11.2px',
    paddingLeft: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  right: {
    width: '70%',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'start',
    background: theme.palette.common.white,
  },
  rightTitle: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxSizing: 'border-box',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    display: 'flex',
    ['@media print']: {
      color: theme.palette.common.black,
      background: 'transparent',
    },
  },
  rightTop: {
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    padding: '16px',
    boxSizing: 'border-box',
  },
  rightBottom: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
}))

export default function FirstPage({}: FirstPageProp) {
  const classes = useStylesFirstPage()
  const useOriginal = true

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <span className={classes.title}>Giovanni Cardamone</span>
        <img
          alt='Giovanni Cardamone'
          className={classes.avatar}
          src={AvatarPhoto}
        />
        <span className={classes.skillsTitle}>Preview:</span>
        <div className={classes.skillsContainer}>
          <SkillProgress language='C' progress={75}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalC />}
              coloured={ColouredC}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='C++' progress={65}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalCPlusPlus />}
              coloured={ColouredCPlusPlus}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='C#' progress={65}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalCSharp />}
              coloured={ColouredCSharp}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='Java' progress={85}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalJava />}
              coloured={ColouredJava}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='Python' progress={95}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalPython />}
              coloured={ColouredPython}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='Php' progress={70}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalPhp />}
              coloured={ColouredPhp}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='Kotlin' progress={45}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalKotlin />}
              coloured={ColouredKotlin}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='Javascript' progress={100}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalJavascript />}
              coloured={ColouredJavascript}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='Typescript' progress={100}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalTypescript />}
              coloured={ColouredTypescript}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='Bash/Sh' progress={60}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalBash />}
              coloured={ColouredBash}
              color={theme.palette.primary.main}
            />
          </SkillProgress>

          <SkillProgress language='HTML & CSS' progress={75}>
            <ShieldSelector
              useOriginal={useOriginal}
              original={<OriginalHTML />}
              coloured={ColouredHTML}
              color={theme.palette.primary.main}
            />
          </SkillProgress>
        </div>
      </div>

      <div className={classes.right}>
        <span className={classes.rightTitle}>Bio</span>
        <div className={classes.rightTop}>
          <Quote>
            Programming is the best way to express yourself. Code it!
          </Quote>
          <Quote marginTop='32px'>
            Da sempre appassionato dell'informatica e dell'open source dedico
            quasi tutto il mio tempo libero ad essa, adoro apprendere nuove
            tecnologie e studiare nuovi paradigmi di programmazione.
          </Quote>
          <div className={classes.grow}></div>
          <Quote border='1px solid'>
            Autorizzo il trattamento dei miei dati personali ai sensi dell'art
            13 Dig 196 del 30 giugno 2003 e dell'art 13 GDPR (Regolamento UE
            2016/679) ai fini della ricerca e selzione del personale
          </Quote>
        </div>
        <span className={classes.rightTitle}>RoadMap</span>
        <div className={classes.rightBottom}>
          <Roadmap from='Sourcesense S.P.A.' date={[2020, undefined]}>
            <RoadMapTrack>Cerved MediaMonitoring [frontend React]</RoadMapTrack>
            <RoadMapTrack>Cerved MediaMonitoring [backend Python]</RoadMapTrack>
          </Roadmap>

          <Roadmap from='Beghelli S.P.A.' date={[2018, 2020]}>
            <RoadMapTrack>Sistema Salvalavita GO [android sdk]</RoadMapTrack>
            <RoadMapTrack>Sistema Salvalavita GO [cloud firebase]</RoadMapTrack>
            <RoadMapTrack>Sistema Salvalavita GO [backoffice Vue]</RoadMapTrack>
            <RoadMapTrack>
              Sistema Salvalavita GSM [backend javascript]
            </RoadMapTrack>
            <RoadMapTrack>Sistema Brain integrazione Alexa [C#]</RoadMapTrack>
          </Roadmap>

          <Roadmap from='Fratelli Vitiello S.R.L.' date={[2014, 2017]}>
            <RoadMapTrack>Sistemi di parcheggio [android sdk]</RoadMapTrack>
            <RoadMapTrack>Sistemi di parcheggio [backend PHP]</RoadMapTrack>
            <RoadMapTrack>CV Lettura Targa [android / opencv]</RoadMapTrack>
            <RoadMapTrack>Sistemi controllo porte [C / Python]</RoadMapTrack>
          </Roadmap>

          <Roadmap from='UNISA' date={[2011, 2014]}>
            <RoadMapTrack>Percorso di studi (Non completato)</RoadMapTrack>
          </Roadmap>

          <Roadmap from='Itis Ettore Majorana' date={[2007, 2011]}>
            <RoadMapTrack>Percorso di studi</RoadMapTrack>
          </Roadmap>
        </div>
      </div>
    </div>
  )
}

interface RoadMapProps {
  from: string
  date: [number, number | undefined]
  children: JSX.Element | JSX.Element[]
}

const useStylesRoadmap = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    marginLeft: '5%',
    borderLeft: `4px solid ${theme.palette.secondary.main}`,
    position: 'relative',
  },
  dot: {
    boxSizing: 'border-box',
    width: '24px',
    height: '24px',
    marginLeft: '-14px',

    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 16,

    display: 'flex',
    width: 'calc(100% - 24px)',
    height: '24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'baseline',
  },
  title: {
    fontSize: '14.4px',
    ['@media print']: {
      fontSize: '28.8px',
    },
  },
  time: {
    fontSize: '9.6px',
    ['@media print']: {
      fontSize: '19.2px',
    },
  },
  track: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: 10,
  },
}))

function Roadmap({ from, date, children }: RoadMapProps) {
  const classes = useStylesRoadmap()

  return (
    <div className={classes.root}>
      <div className={classes.dot}></div>
      <div className={classes.header}>
        <span className={classes.title}>{from}</span>
        <span className={classes.time}>
          {date[0]} / {date[1] !== undefined ? date[1] : 'current'}
        </span>
      </div>
      <div className={classes.track}>
        {Array.isArray(children) ? (
          <div> {children.map((c) => c)} </div>
        ) : (
          <div> {children} </div>
        )}
      </div>
    </div>
  )
}

interface RoadMapTrackProps {
  children: string
}

const useStylesRoadmapTrack = makeStyles((theme) => ({
  root: {
    display: 'block',
    margin: 0,
    textAlign: 'start',
    fontSize: '16px',
    ['@media print']: {
      fontSize: '19.2px',
      margin: '6.4px 0',
    },
  },
}))

function RoadMapTrack({ children }: RoadMapTrackProps) {
  const classes = useStylesRoadmapTrack()

  return <span className={classes.root}>{children}</span>
}

interface SkillProgressProp {
  language: string
  progress: number
  children?: JSX.Element
}

const useStylesSkillProgress = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    display: 'flex',
    float: 'left',
    width: 'auto',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%',
  },
  container: {
    position: 'relative',
    flexGrow: 1,
    background: 'white',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.common.black}`,
  },
  language: {
    position: 'absolute',
    boxSizing: 'border-box',
    fontSize: '8px',
    top: '20%',
    bottom: '20%',
    left: '-3%',
    width: '55%',
    border: '1px solid',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ['@media print']: {
      fontSize: '11.2px',
    },
  },
  value: {
    height: '100%',
    ['@media print']: {
      borderRight: '2px solid',
    },
  },
}))

function SkillProgress({ language, progress, children }: SkillProgressProp) {
  const items = 13 // hardcoded right now
  const classes = useStylesSkillProgress()
  const theme = useTheme()

  const min = theme.palette.error.main.replace('#', '')
  const max = theme.palette.success.main.replace('#', '')

  const mix = (start: number, end: number, percent: number) =>
    start + percent * (end - start)

  const progressColor = () => {
    const r1 = parseInt(min.substr(0, 2), 16)
    const g1 = parseInt(min.substr(2, 2), 16)
    const b1 = parseInt(min.substr(4, 2), 16)

    const r2 = parseInt(max.substr(0, 2), 16)
    const g2 = parseInt(max.substr(2, 2), 16)
    const b2 = parseInt(max.substr(4, 2), 16)

    const q = progress / 100
    return `rgb(${Math.round(mix(r1, r2, q))}, ${Math.round(
      mix(g1, g2, q)
    )}, ${Math.round(mix(b1, b2, q))})`
  }

  const iconRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className={classes.root} style={{ height: `${100 / items}%` }}>
      <div style={{ width: 30 }} className={classes.icon} ref={iconRef}>
        {children}
      </div>
      <div className={classes.container}>
        <span className={classes.language}>{language}</span>

        <div
          className={classes.value}
          style={{ width: `${progress}%`, backgroundColor: progressColor() }}
        ></div>
      </div>
    </div>
  )
}
