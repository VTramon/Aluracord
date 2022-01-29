import styles from './style.module.scss'
import appConfig from '../../../config.json'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../context/user'

const Welcome = () => {
  const [username, setUsername] = useState<string>('')
  const Router = useRouter()

  const { signIn } = useContext(UserContext)

  return (
    <div
      style={{
        backgroundColor: appConfig.theme.colors.neutrals['050'],
      }}
      className={styles.welcome}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          signIn(username)
          Router.push('/chat')
        }}
        className={styles.welcomeForm}
      >
        <h2>Boas vindas de volta!</h2>
        <p
          style={{
            marginBottom: '32px',
            color: appConfig.theme.colors.neutrals[400],
          }}
        >
          {appConfig.name}
        </p>

        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <div
        className={styles.userArea}
        style={{
          backgroundColor: appConfig.theme.colors.neutrals[800],
          borderColor: appConfig.theme.colors.primary['999'],
        }}
      >
        {username && username?.length > 2 ? (
          <>
            <img
              style={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <p
              style={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
              }}
            >
              {username}
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}

export { Welcome }
