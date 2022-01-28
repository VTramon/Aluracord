import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UserContext } from '../../context/user'
import { Lougout } from '../icons'
import styles from './style.module.scss'

const HeaderChat = () => {
  const Router = useRouter()

  const { signOut } = useContext(UserContext)
  return (
    <>
      <div className={styles.headerChat}>
        <p>Chat</p>
        <button
          onClick={() => {
            Router.push('/')
            signOut()
          }}
        >
          <Lougout />
        </button>
      </div>
    </>
  )
}

export { HeaderChat }
