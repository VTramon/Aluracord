import { useRouter } from 'next/router'
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
          logout
        </button>
      </div>
    </>
  )
}

export { HeaderChat }
