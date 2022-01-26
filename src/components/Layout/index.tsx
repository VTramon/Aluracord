import { useState } from 'react'
import { BackgroundVideo } from '../BackgroundVideo'
import { Header } from '../Header'
// import appConfig from '../../../config.json'
import styles from './style.module.scss'
type LayoutProps = {}

const Layout: React.FC<LayoutProps> = (props) => {
  const [mute, setMute] = useState<boolean>(true)

  return (
    <main
      // style={{
      //   backgroundColor: appConfig.theme.colors.neutrals[999],
      // }}
      className={styles.layout}
    >
      <Header handleClick={() => setMute(!mute)} />
      <BackgroundVideo muteValue={mute} />
      {props.children}
    </main>
  )
}
export { Layout }
