import styles from './style.module.scss'
import appConfig from '../../../config.json'

type HeaderProps = {
  handleClick: () => void
}

const Header: React.FC<HeaderProps> = ({ handleClick }) => {
  return (
    <div
      style={{
        backgroundColor: appConfig.theme.colors.primary[900],
      }}
      className={styles.header}
    >
      <div>
        <button className={styles.headerButton} onClick={handleClick}>
          mute
        </button>
      </div>
    </div>
  )
}

export { Header }
