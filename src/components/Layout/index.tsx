import { useState } from 'react'
import { Marilia, Video2019, Video2020, Video2022 } from '../BackgroundVideo'
import { Header } from '../Header'
import styles from './style.module.scss'
type LayoutProps = {
  location: 'index' | 'chat'
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [mute, setMute] = useState<boolean>(true)
  const [video, setVideo] = useState<string>('')

  const handleWichVideoWillPlay = (value: any) => {
    setMute(true)
    setVideo(value)
  }

  const handlePlay = () => {
    const audio: any = document.getElementById('marilia')!
    audio.play()
  }

  const Unmute = () => {
    if (props.location === 'index') {
      handlePlay()
    }
    setMute(!mute)
  }

  return (
    <main className={styles.layout}>
      <Header
        location={props.location}
        volume={mute}
        handleVolume={Unmute}
        handleClick={handleWichVideoWillPlay}
      />
      {props.location && props.location === 'index' ? (
        <>
          <h1>"Esqueça-me Se For Capaz" -Marília Mendonça-</h1>
          <Marilia muteValue={mute} />
        </>
      ) : null}

      {video === '2021' ? <Video2022 muteValue={mute} /> : null}

      {video === '2020' ? <Video2020 muteValue={mute} /> : null}

      {video === '2019' ? <Video2019 muteValue={mute} /> : null}

      {props.children}
    </main>
  )
}
export { Layout }
