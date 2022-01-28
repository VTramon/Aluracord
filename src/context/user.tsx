import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

type UserProps = {
  login: string
}

type loginProps = {
  login: UserProps | undefined
  signIn: (userName: string) => Promise<void>
  signOut: () => void
}

type userProvider = {
  children: ReactNode
}

export const UserContext = createContext({} as loginProps)

export const UserProvider = (props: userProvider) => {
  const [login, setLogin] = useState<UserProps | undefined>()

  const signIn = async (userName: string) => {
    const response = await axios.get<UserProps>(
      `https://api.github.com/users/${userName}`
    )
    const result = response.data

    localStorage.setItem('user', result.login)
    setLogin(result)
  }

  const signOut = () => {
    localStorage.removeItem('user')
  }

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      setLogin({ login: user })
    }
  }, [])

  return (
    <UserContext.Provider value={{ login, signIn, signOut }}>
      {props.children}
    </UserContext.Provider>
  )
}
