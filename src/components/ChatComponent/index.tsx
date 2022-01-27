import { useState } from 'react'
import { MessageList, messageProps } from '../MessageList'
import appConfig from '../../../config.json'
import { HeaderChat } from '../HeaderChat'
import styles from './style.module.scss'

const ChatComponent = () => {
  const [messages, setMessages] = useState('')
  const [messageList, setMessageList] = useState<messageProps[]>([])

  const handleNewMessage = (newMessage: string) => {
    if (newMessage.trim() !== '') {
      const messege = {
        id: messageList.length + 1,
        from: 'VTramon',
        text: newMessage,
      }
      setMessageList([messege, ...messageList])
      setMessages('')
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
                handleNewMessage(messages)
              }
            }}
            placeholder="Insira sua mensagem aqui..."
            type="text"
            value={messages}
            onChange={(event) => {
              setMessages(event.target.value)
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
              handleNewMessage(messages)
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
