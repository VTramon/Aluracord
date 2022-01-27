import styles from './style.module.scss'

type BackgroundVideoProps = {
  muteValue: boolean
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ muteValue }) => {
  return (
    <video
      className={styles.video}
      // width="100%"
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
      muted={muteValue}
      autoPlay={true}
      loop
      style={{
        position: 'absolute',
        // top: '0',
        // right: '0',
        // left: '0',
        // bottom: '0',
        height: '100%',
        // zIndex: '-1',
        background: 'black',
        // backgroun
      }}
    >
      <source src="/videos/2021-s.mp4#t=1091,1134" />
    </video>
  )
}

export { BackgroundVideo }
