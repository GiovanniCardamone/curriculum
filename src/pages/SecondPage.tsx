import PageA4 from '../components/PageA4'

import React, { Children, useRef } from 'react'
import { makeStyles, useTheme, fade, useMediaQuery } from '@material-ui/core'

import { Radar, Bar } from 'react-chartjs-2'
import Chart from 'chart.js'

import ShieldSelector from '../components/ShieldSelector'

import OriginalVim from '../shields/original/Vim'
import ColouredVim from '../shields/custom/Vim'

import OriginalVSCode from '../shields/original/VSCode'
import ColouredVSCode from '../shields/custom/VSCode'

import OriginalJetbrains from '../shields/original/Jetbrains'
import ColouredJetbrains from '../shields/custom/Jetbrains'

import OriginalAtom from '../shields/original/Atom'
import ColouredAtom from '../shields/custom/Atom'

import OriginalPyCharm from '../shields/original/PyCharm'
import ColouredPyCharm from '../shields/custom/PyCharm'

import OriginalAndroid from '../shields/original/Android'
import ColouredAndroid from '../shields/custom/Android'

import OriginalLaravel from '../shields/original/Laravel'
import ColouredLaravel from '../shields/custom/Laravel'

import OriginalReact from '../shields/original/React'
import ColouredReact from '../shields/custom/React'

import OriginalVue from '../shields/original/Vue'
import ColouredVue from '../shields/custom/Vue'

import OriginalFlutter from '../shields/original/Flutter'
import ColouredFlutter from '../shields/custom/Flutter'

import OriginalNodeJS from '../shields/original/NodeJs'
import ColouredNodeJS from '../shields/custom/NodeJs'

import OriginalElectron from '../shields/original/Electron'
import ColouredElectron from '../shields/custom/Electron'

import OriginalFlask from '../shields/original/Flask'
import ColouredFlask from '../shields/custom/Flask'

import OriginalDotNet from '../shields/original/DotNet'
import ColouredDotNet from '../shields/custom/DotNet'

import OriginalFirebase from '../shields/original/Firebase'
import ColouredFirebase from '../shields/custom/Firebase'

import OriginalWebPack from '../shields/original/WebPack'
import ColouredWebPack from '../shields/custom/WebPack'

import OriginalBabel from '../shields/original/Babel'
import ColouredBabel from '../shields/custom/Babel'

import OriginalPostgreSql from '../shields/original/PostgreSql'
import ColouredPostgreSql from '../shields/custom/PostgreSql'

import OriginalMysql from '../shields/original/Mysql'
import ColouredMysql from '../shields/custom/Mysql'

import OriginalMongoDB from '../shields/original/MongoDB'
import ColouredMongoDB from '../shields/custom/MongoDB'

import OriginalRedis from '../shields/original/Redis'
import ColouredRedis from '../shields/custom/Redis'

import OriginalMaterialUI from '../shields/original/MaterialUI'
import ColouredMaterialUI from '../shields/custom/MaterialUI'

import OriginalComposer from '../shields/original/Composer'
import ColouredComposer from '../shields/custom/Composer'

import OriginalYarn from '../shields/original/Yarn'
import ColouredYarn from '../shields/custom/Yarn'

import OriginalNPM from '../shields/original/Npm'
import ColouredNPM from '../shields/custom/Npm'

import OriginalDocker from '../shields/original/Docker'
import ColouredDocker from '../shields/custom/Docker'

import OriginalGit from '../shields/original/Git'
import ColouredGit from '../shields/custom/Git'

import OriginalGitHub from '../shields/original/GitHub'
import ColouredGitHub from '../shields/custom/GitHub'

import OriginalGitLab from '../shields/original/GitLab'
import ColouredGitLab from '../shields/custom/GitLab'

import OriginalBitBucket from '../shields/original/Bitbucket'
import ColouredBitBucket from '../shields/custom/Bitbucket'

import OriginalHeroku from '../shields/original/Heroku'
import ColouredHeroku from '../shields/custom/Heroku'

import OriginalGoogleCloudPlatform from '../shields/original/GoogleCloud'
import ColouredGoogleCloudPlatform from '../shields/custom/GoogleCloud'

import OriginalAws from '../shields/original/AWS'
import ColouredAws from '../shields/custom/AWS'

import OriginalApache from '../shields/original/Apache'
import ColouredApache from '../shields/custom/Apache'

import OriginalNgnix from '../shields/original/Ngnix'
import ColouredNgnix from '../shields/custom/Ngnix'

import OriginalExpress from '../shields/original/Express'
import ColouredExpress from '../shields/custom/Express'

import OriginalFastify from '../shields/original/Fastify'
import ColouredFastify from '../shields/custom/Fastify'
import Experience from '../components/Experience'

if (Chart.defaults.global.animation) {
  //@ts-ignore
  Chart.defaults.global.animation.duration = 0
}

interface SecondPageProp {}

const useStylesSecondPage = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxSizing: 'border-box',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    display: 'flex',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '40%',
    boxSizing: 'border-box',
    padding: '0 1em',
  },
  profileTop: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    ['@media print']: {},
  },
  profileTopLeft: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    display: 'block',
    margin: '0.1em 0',
  },
  profileTopRight: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBottom: {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  experience: {
    flexGrow: 1,
    display: 'flex',
    height: '60%',
    flexDirection: 'row',
  },
  experienceLeft: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
  },
}))

export default function SecondPage({}: SecondPageProp) {
  const theme = useTheme()
  const classes = useStylesSecondPage()
  const container = useRef<HTMLDivElement | null>(null)

  const shieldColorMedium = theme.palette.primary.main
  const useOriginal = !useMediaQuery('@media print')

  return (
    <div className={classes.root} ref={container}>
      <span className={classes.title}>Profile</span>
      <div className={classes.profile}>
        <div className={classes.profileTop}>
          <div className={classes.profileTopLeft}>
            <span className={classes.profileText}>Very fast learner</span>
            <span className={classes.profileText}>
              Great skills in programming
            </span>
            <span className={classes.profileText}>
              Poor in projecting ui/ux
            </span>
            <span className={classes.profileText}>Nice documenter</span>
            <span className={classes.profileText}>Average testing skills</span>
          </div>
          <div className={classes.profileTopRight}>
            <Radar
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scale: {
                  ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 25,
                  },
                },
              }}
              legend={{
                display: false,
              }}
              data={{
                labels: [
                  'learning',
                  'programming',
                  'ui / ux',
                  'documenting',
                  'testing',
                ],
                datasets: [
                  {
                    backgroundColor: fade(theme.palette.primary.main, 0.25),
                    borderColor: theme.palette.primary.main,
                    borderWidth: 1,
                    data: [90, 95, 45, 75, 80],
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className={classes.profileBottom}>
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            legend={{
              display: false,
            }}
            data={{
              labels: [
                'web',
                'client server',
                'desktop',
                'mobile',
                'soc/embedded',
                'cloud',
              ],
              datasets: [
                {
                  backgroundColor: fade(theme.palette.primary.main, 0.25),
                  borderColor: theme.palette.primary.main,
                  borderWidth: 1,
                  data: [0.9, 0.8, 0.3, 0.7, 0.6, 0.8],
                },
              ],
            }}
          />
        </div>
      </div>
      <span className={classes.title}>Experience</span>
      <div className={classes.experience}>
        <div className={classes.experienceLeft}>
          <Experience>
            Computer Vision image recognition/manipulation
          </Experience>
          <Experience>Bluetooth/BLE comunication protocols</Experience>
          <Experience>I2C / RS232 / RS485 comunication protocols</Experience>
          <Experience>Embedded device (ESP C/Micropython)</Experience>
          <Experience>SOC (Raspberry)</Experience>
          <Experience>Cloud Architecture Design</Experience>
          <Experience>HTTP Protocol</Experience>
          <Experience>Websocket Custom Protocols</Experience>
          <Experience>Custom TCP Protocols</Experience>
          <Experience>System Administration / DevOps</Experience>
          <Experience>Architecture / Infrastructure Design</Experience>
          <Experience>Database Layout/Schema</Experience>
          <Experience>Microservices</Experience>
          <Experience>Android framework</Experience>
          <Experience>Alexa / Google Assistant</Experience>
          <Experience>OAuth2</Experience>
          <Experience>REST / CRUD</Experience>
          <Experience>Automated Testcase</Experience>
          <Experience>CI / CD</Experience>
          <Experience>NIX SystemD</Experience>
          <Experience>DNS / DHCP service integration</Experience>
          <Experience>Docker Compose</Experience>
          <Experience>Cloud Function / Lambda Function</Experience>
          <Experience>Google Cloud Platform / Heroku / AWS</Experience>
          <Experience>Reactvie programming</Experience>
        </div>
        <Tile name='dbms & webserver' width={10}>
          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalRedis />}
            coloured={ColouredRedis}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalMongoDB />}
            coloured={ColouredMongoDB}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalMysql />}
            coloured={ColouredMysql}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalPostgreSql />}
            coloured={ColouredPostgreSql}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalFirebase />}
            coloured={ColouredFirebase}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalFastify />}
            coloured={ColouredFastify}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalExpress />}
            coloured={ColouredExpress}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalApache />}
            coloured={ColouredApache}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalNgnix />}
            coloured={ColouredNgnix}
            color={theme.palette.primary.main}
          />
        </Tile>

        <Tile name='frameworks' width={10}>
          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalFirebase />}
            coloured={ColouredFirebase}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalDotNet />}
            coloured={ColouredDotNet}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalFlask />}
            coloured={ColouredFlask}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalFlutter />}
            coloured={ColouredFlutter}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalMaterialUI />}
            coloured={ColouredMaterialUI}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalElectron />}
            coloured={ColouredElectron}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalLaravel />}
            coloured={ColouredLaravel}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalVue />}
            coloured={ColouredVue}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalReact />}
            coloured={ColouredReact}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalFlutter />}
            coloured={ColouredFlutter}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalAndroid />}
            coloured={ColouredAndroid}
            color={theme.palette.primary.main}
          />
        </Tile>

        <Tile name='tools & platform' width={10}>
          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalHeroku />}
            coloured={ColouredHeroku}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalGoogleCloudPlatform />}
            coloured={ColouredGoogleCloudPlatform}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalAws />}
            coloured={ColouredAws}
            color={theme.palette.primary.main}
          />
          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalGitHub />}
            coloured={ColouredGitHub}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalGitLab />}
            coloured={ColouredGitLab}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalBitBucket />}
            coloured={ColouredBitBucket}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalGit />}
            coloured={ColouredGit}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalComposer />}
            coloured={ColouredComposer}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalNPM />}
            coloured={ColouredNPM}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalYarn />}
            coloured={ColouredYarn}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalDocker />}
            coloured={ColouredDocker}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalWebPack />}
            coloured={ColouredWebPack}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalBabel />}
            coloured={ColouredBabel}
            color={theme.palette.primary.main}
          />
        </Tile>

        <Tile name='editors' width={15}>
          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalVim />}
            coloured={ColouredVim}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalVSCode />}
            coloured={ColouredVSCode}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalAtom />}
            coloured={ColouredAtom}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalJetbrains />}
            coloured={ColouredJetbrains}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalPyCharm />}
            coloured={ColouredPyCharm}
            color={theme.palette.primary.main}
          />

          <ShieldSelector
            useOriginal={useOriginal}
            original={<OriginalAndroid />}
            coloured={ColouredAndroid}
            color={theme.palette.primary.main}
          />
        </Tile>
      </div>
    </div>
  )
}

interface TileProps {
  name: string
  width: number
  children?: JSX.Element | JSX.Element[]
}

const useStylesTile = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    height: '100%',
    padding: '1em',
    paddingBottom: '0.5em',
    alignItems: 'start',
    borderLeft: `1px solid ${theme.palette.primary.main}`,
  },
  title: {
    textDecoration: 'underline',
    display: 'flex',
    width: '100%',
    height: 20,
    verticalAlign: 'bottom',
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: '0.8em',
    ['@media print']: {
      fontSize: '1.2em',
    },
  },
  grow: {
    flexGrow: 1,
  },
  img: {
    boxSizing: 'border-box',
    padding: '0.1em',
    width: '100%',
    ['@media print']: {
      padding: '0.4em',
    },
  },
}))

function Tile({ name, width, children }: TileProps) {
  const classes = useStylesTile()

  return (
    <div className={classes.root} style={{ width: `${width}%` }}>
      <span className={classes.title} style={{ fontSize: `${width / 20}em` }}>
        {name}
      </span>
      <div className={classes.grow}></div>
      {Array.isArray(children) ? (
        children.map((c) => <div className={classes.img}>{c}</div>)
      ) : (
        <div className={classes.img}>{children}</div>
      )}
    </div>
  )
}

// interface RadarProps {
//   learning: number
//   programming: number
//   ui: number
//   documenting: number
//   testing: number
// }

// function Radar({}: RadarProps) {
//   return null
// }
