import styles from './style.module.scss'

type BackgroundVideoProps = {
  muteValue: boolean
  location?: string
}

export const Video2022: React.FC<BackgroundVideoProps> = (props) => {
  return (
    <video
      className={styles.video}
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
      muted={props.muteValue}
      autoPlay={true}
    >
      {props.location && props.location === 'index' ? (
        <source src="/videos/2021-s.mp4#t=1091,1134" type="video/mp4" />
      ) : (
        <source src="/videos/2021-s.mp4" type="video/mp4" />
      )}
    </video>
  )
}

export const Video2020: React.FC<BackgroundVideoProps> = (props) => {
  return (
    <video
      className={styles.video}
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
      muted={props.muteValue}
      autoPlay={true}
    >
      <source src="/videos/2020.mp4" type="video/mp4" />
    </video>
  )
}

export const Video2019: React.FC<BackgroundVideoProps> = (props) => {
  return (
    <video
      className={styles.video}
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
      muted={props.muteValue}
      autoPlay={true}
    >
      <source src="/videos/2019.mp4" type="video/mp4" />
    </video>
  )
}
