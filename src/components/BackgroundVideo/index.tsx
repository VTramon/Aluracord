type BackgroundVideoProps = {
  muteValue: boolean
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ muteValue }) => {
  return (
    <video
      width="100%"
      height="100%"
      disablePictureInPicture
      disableRemotePlayback
      muted={muteValue}
      autoPlay={true}
      controls
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
        zIndex: '-1',
        background: 'black',
      }}
    >
      <source src="/2021.mp4" type="video/mp4" />
      <source src="/2021.mp4" type="video/mp4" />
    </video>
  )
}

export { BackgroundVideo }
