import styles from './style.module.scss'
import appConfig from '../../../config.json'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Welcome = () => {
  const [username, setUsername] = useState<string>('')
  const Router = useRouter()

  const HandleFetch = async () => {
    const response = await axios.get(`https://api.github.com/users/${username}`)

    const result = response.data
    console.log(result)
  }

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
          Router.push('/chat')
          HandleFetch()
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
      {/* Formulário */}
      {/* Photo Area */}
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
        ) : undefined}
      </div>
    </div>
  )
}

export { Welcome }
