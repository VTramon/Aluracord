import { useState } from 'react'
import { Video2019, Video2020, Video2022 } from '../BackgroundVideo'
import { Header } from '../Header'
import styles from './style.module.scss'
type LayoutProps = {
  location?: string
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [mute, setMute] = useState<boolean>(true)
  const [video, setVideo] = useState<string>('')

  const handleWichVideoWillPlay = (value: any) => {
    setMute(true)
    setVideo(value)
  }

  return (
    <main className={styles.layout}>
      <Header
        volume={mute}
        handleVolume={() => setMute(!mute)}
        handleClick={handleWichVideoWillPlay}
      />
      {props.location && props.location === 'index' ? (
        <>
          <h1>"Esqueça-me Se For Capaz" -Marília Mendonça-</h1>
          <Video2022 muteValue={mute} location={props.location} />
        </>
      ) : undefined}

      {video === '2021' ? <Video2022 muteValue={mute} /> : undefined}

      {video === '2020' ? <Video2020 muteValue={mute} /> : undefined}

      {video === '2019' ? <Video2019 muteValue={mute} /> : undefined}

      {props.children}
    </main>
  )
}
export { Layout }
