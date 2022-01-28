import styles from './style.module.scss'

export type BackgroundVideoProps = {
  muteValue: boolean
  location: string
}

export const Marilia: React.FC<BackgroundVideoProps> = (props) => {
  return (
    <video
      autoPlay={true}
      muted={props.muteValue}
      className={styles.video}
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src="/videos/Marilia.mp4" type="video/mp4" />
    </video>
  )
}

export const Video2022: React.FC<BackgroundVideoProps> = (props) => {
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

export const Video2020: React.FC<BackgroundVideoProps> = (props) => {
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

export const Video2019: React.FC<BackgroundVideoProps> = (props) => {
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
