import styles from './style.module.scss'
import appConfig from '../../../config.json'
import { Muted, Unmuted } from '../icons'

type HeaderProps = {
  handleVolume: () => void
  handleClick: (video: string) => void
  volume: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: appConfig.theme.colors.primary[900],
      }}
      className={styles.header}
    >
      {/* <div> */}
      <div className={styles.volumeButton}>
        <button onClick={props.handleVolume}>
          {!props.volume ? <Unmuted /> : <Muted />}
        </button>
      </div>
      <button
        className={`${styles.videoButton} ${styles.vinteUm}`}
        onClick={() => props.handleClick('2021')}
      ></button>
      <button
        className={`${styles.videoButton} ${styles.vinte}`}
        onClick={() => props.handleClick('2020')}
      ></button>
      <button
        className={`${styles.videoButton} ${styles.dezenove}`}
        onClick={() => props.handleClick('2019')}
      ></button>
      {/* </div> */}
    </div>
  )
}

export { Header }
