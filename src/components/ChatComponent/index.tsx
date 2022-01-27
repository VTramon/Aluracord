import { useContext, useState } from 'react'
import { MessageList, messageProps } from '../MessageList'
import appConfig from '../../../config.json'
import { HeaderChat } from '../HeaderChat'
import styles from './style.module.scss'
import { UserContext } from '../../context/user'

const ChatComponent = () => {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState<messageProps[]>([])

  const { login } = useContext(UserContext)

  const handleNewMessage = (newMessage: string) => {
    if (newMessage.trim() !== '' && login?.id && login.name) {
      const message = {
        id: login.id + messageList.length,
        from: login.name,
        user: login.login,
        text: newMessage,
      }
      console.log(message)
      setMessageList([message, ...messageList])
      setMessage('')
    }
  }

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
