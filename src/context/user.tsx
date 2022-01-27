import axios from 'axios'
import { createContext, ReactNode, useState } from 'react'

type UserProps = {
  name: string
  login: string
  id: number
}

type loginProps = {
  login: UserProps | undefined
  signIn: (userName: string) => Promise<void>
}

type userProvider = {
  children: ReactNode
}

export const UserContext = createContext({} as loginProps)

export const UserProvider = (props: userProvider) => {
  const [login, setLogin] = useState<UserProps | undefined>()

  const signIn = async (userName: string) => {
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    const result = response.data
    setLogin(result)
  }

  return (
    <UserContext.Provider value={{ login, signIn }}>
      {props.children}
    </UserContext.Provider>
  )
}
