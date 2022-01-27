import { useState } from 'react'
import { Layout } from '../components/Layout'
import appConfig from '../../config.json'
import { useRouter } from 'next/router'

type messageProps = {
  id: number
  from: string
  text: string
}

type MessageListProps = {
  list: messageProps[]
  // message?: string
}

const HeaderChat = () => {
  const Router = useRouter()
  return (
    <>
      <div
        style={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: '100',
        }}
      >
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

const MessageList: React.FC<MessageListProps> = (props) => {
  console.log('MessageList', props)
  return (
    <ul
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column-reverse',
        // flex: 1,
        height: '100%',
        color: appConfig.theme.colors.neutrals['050'],
        marginBottom: '16px',
      }}
    >
      {props.list
        ? props.list.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  borderRadius: '5px',
                  padding: '6px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    marginBottom: '8px',
                  }}
                >
                  <img
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'inline-block',
                      marginRight: '8px',
                    }}
                    src={`https://github.com/${item.from}.png`}
                  />
                  {/* <strong>{props.message.from}</strong> */}
                  <span
                    style={{
                      fontSize: '10px',
                      marginLeft: '8px',
                      color: appConfig.theme.colors.neutrals[300],
                    }}
                  >
                    {new Date().toLocaleDateString()}
                    <strong> - </strong>
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
                {item.text}
              </li>
            )
          })
        : undefined}
    </ul>
  )
}

export default function ChatPage() {
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

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          zIndex: '1',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          width: '60vw',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
          margin: '10vh 0 50px 0',
        }}
      >
        <HeaderChat />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
            justifyContent: 'space-between',
          }}
        >
          <MessageList list={messageList} />

          <form
            onSubmit={(event) => {
              event.preventDefault()
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  console.log(e)
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
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <button onClick={() => handleNewMessage(messages)} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
