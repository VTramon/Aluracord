type BackgroundVideoProps = {
  muteValue: boolean
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ muteValue }) => {
  return (
    <video
      // width="100%"
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
      muted={muteValue}
      autoPlay={true}
      style={{
        position: 'absolute',
        // top: '0',
        // right: '0',
        // left: '0',
        // bottom: '0',
        height: '100%',
        // zIndex: '-1',
        background: 'black',
      }}
    >
      <source src="/videos/2021.mp4" type="video/mp4" />
    </video>
  )
}

export { BackgroundVideo }
