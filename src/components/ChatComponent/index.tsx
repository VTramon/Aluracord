import { useContext, useEffect, useState } from 'react'
import { MessageList, messageProps } from '../MessageList'
import appConfig from '../../../config.json'
import { HeaderChat } from '../HeaderChat'
import styles from './style.module.scss'
import { UserContext } from '../../context/user'
import { createClient } from '@supabase/supabase-js'

const ChatComponent = () => {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState<messageProps[]>([])

  const { login } = useContext(UserContext)

  const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANNON_KEY!
  )

  const handleSupaData = async () => {
    const response = await supabaseClient
      .from<messageProps>('messages')
      .select('*')
    const result = response.data
    if (result !== null) {
      console.log(result)
      setMessageList(result.reverse())
    }
  }

  const handleNewMessage = async (newMessage: string) => {
    if (newMessage.trim() !== '' && login) {
      const response = await supabaseClient
        .from<messageProps>('messages')
        .insert({
          de: login.login,
          texto: newMessage,
        })
      const result = response.data

      if (result !== null) {
        setMessageList([result[0], ...messageList])
      }
    }
  }

  useEffect(() => {
    handleSupaData()
  }, [])

  const deleteMessage = (messageId: number) => {
    const updatedList = messageList.filter(
      (element) => element.id !== messageId
    )
    setMessageList(updatedList)
  }

  return (
    <div
      className={styles.chat}
      style={{
        backgroundColor: appConfig.theme.colors.neutrals[700],
      }}
    >
      <HeaderChat />
      <div
        className={styles.innerChat}
        style={{
          backgroundColor: appConfig.theme.colors.neutrals[600],
        }}
      >
        <MessageList handleDelete={deleteMessage} list={messageList} />

        <form
          className={styles.formChat}
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <input
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleNewMessage(message)
                setMessage('')
              }
            }}
            placeholder="Insira sua mensagem aqui..."
            type="text"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
            }}
            style={{
              backgroundColor: appConfig.theme.colors.neutrals[800],
              color: appConfig.theme.colors.neutrals[200],
            }}
          />
          <button
            style={{
              backgroundColor: appConfig.theme.colors.neutrals[900],
            }}
            onClick={() => {
              handleNewMessage(message)
              setMessage('')
            }}
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export { ChatComponent }
