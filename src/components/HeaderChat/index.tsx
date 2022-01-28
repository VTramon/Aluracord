import { useRouter } from 'next/router'
import { Lougout } from '../icons'
import styles from './style.module.scss'

const HeaderChat = () => {
  const Router = useRouter()
  return (
    <>
      <div className={styles.headerChat}>
        <p>Chat</p>
        <button
          onClick={() => {
            Router.push('/')
          }}
        >
          <Lougout />
        </button>
      </div>
    </>
  )
}

export { HeaderChat }
