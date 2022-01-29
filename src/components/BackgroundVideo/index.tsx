import styles from './style.module.scss'

export type BackgroundProps = {
  muteValue: boolean
}

export const Marilia: React.FC<BackgroundProps> = () => {
  return (
    <audio id="marilia" loop={true} muted={false} className={styles.video}>
      <source src="/audio/marilia.mp3" type="audio/mp3" />
    </audio>
  )
}

export const Video2022: React.FC<BackgroundProps> = (props) => {
  return (
    <video
      autoPlay={true}
      muted={props.muteValue}
      className={styles.video}
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src="/videos/2021-s.mp4" type="video/mp4" />
    </video>
  )
}

export const Video2020: React.FC<BackgroundProps> = (props) => {
  return (
    <video
      autoPlay={true}
      muted={props.muteValue}
      className={styles.video}
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src="/videos/2020.mp4" type="video/mp4" />
    </video>
  )
}

export const Video2019: React.FC<BackgroundProps> = (props) => {
  return (
    <video
      autoPlay={true}
      muted={props.muteValue}
      className={styles.video}
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src="/videos/2019.mp4" type="video/mp4" />
    </video>
  )
}
