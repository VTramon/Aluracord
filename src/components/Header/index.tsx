import { Box, Button } from '@skynexui/components'

type HeaderProps = {
  handleClick: () => void
}

const Header: React.FC<HeaderProps> = ({ handleClick }) => {
  return (
    <Box
      styleSheet={{
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        height: '8vh',
      }}
    >
      <Button onClick={handleClick} label={'mute value'}></Button>
    </Box>
  )
}

export { Header }
