import { useContext, useEffect, useState } from 'react'
import { MessageList, messageProps } from '../MessageList'
import appConfig from '../../../config.json'
import { HeaderChat } from '../HeaderChat'
import styles from './style.module.scss'
import { UserContext } from '../../context/user'
import { createClient } from '@supabase/supabase-js'
import { UserModal, userProps } from '../UserModal'
import axios from 'axios'
import { ButtonSendSticker } from '../ButtonSendSticker'

const ChatComponent = () => {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState<messageProps[]>([])
  const [modalData, setModaldata] = useState<userProps>()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { login } = useContext(UserContext)

  const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANNON_KEY!
  )

  const handleSupabaseData = async () => {
    const response = await supabaseClient
      .from<messageProps>('mensagens')
      .select('*')
    const result = response.data
    console.log(result)
    if (result !== null) {
      setMessageList(result.reverse())
    }
  }

  const handleNewMessage = async (newMessage: string) => {
    if (newMessage.trim() !== '' && login) {
      const response = await supabaseClient
        .from<messageProps>('mensagens')
        .insert({
          de: login.login,
          texto: newMessage,
        })
      const result = response.data
      console.log(result)
      if (result !== null) {
        setMessageList([result[0], ...messageList])
      }
    }
  }

  const deleteMessage = async (messageId: number) => {
    await supabaseClient.from('mensagens').delete().match({ id: messageId })
    handleSupabaseData()
  }

  const handleModalData = async (user: string) => {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    const result = response.data
    setModaldata(result)
    setModalIsOpen(true)
  }
  useEffect(() => {
    handleSupabaseData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
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
          <MessageList
            handleModal={handleModalData}
            handleDelete={deleteMessage}
            list={messageList}
          />

          <form
            className={styles.formChat}
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <ButtonSendSticker onStickerClick={handleNewMessage} />
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
                backgroundColor: appConfig.theme.colors.primary[600],
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <button
              style={{
                backgroundColor: appConfig.theme.colors.primary[600],
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
      <UserModal
        setIsOpen={() => setModalIsOpen(false)}
        isOpen={modalIsOpen}
        user={modalData}
      />
    </>
  )
}

export { ChatComponent }
