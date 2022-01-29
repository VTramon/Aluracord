import { Close } from '../icons'
import styles from './style.module.scss'

export type userProps = {
  login: string
  id: number
  avatar_url: string
  html_url: string
  public_repos: number
  company: string
  location: string
  // bio: string
}

type UserModalProps = {
  isOpen: boolean
  user?: userProps
  setIsOpen: () => void
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, user, setIsOpen }) => {
  return (
    <>
      {isOpen && user ? (
        <div className={styles.outerModal}>
          <div className={styles.modal} id={`${user.login}${user.id}`}>
            <button className={styles.button} onClick={setIsOpen}>
              <Close />
            </button>

            <div className={styles.userMain}>
              {/* <div> */}
              <img src={user.avatar_url} alt={user.login} />
              <h2>{user.login}</h2>
            </div>
            <div className={styles.userData}>
              <div>
                <h2>Repositórios:</h2>
                <h3>{user.public_repos}</h3>
              </div>
              <div>
                <h2>Local:</h2>
                <h3>{user.location}</h3>
              </div>
              <div>
                <h2>Trabalho:</h2>
                <h3>{user.company}</h3>
              </div>
              <a href={user.html_url}>Visitar GitHub</a>
            </div>
          </div>
          {/* </div> */}
        </div>
      ) : null}
    </>
  )
}

export { UserModal }
