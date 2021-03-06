import appConfig from '../../../config.json'
import { Delete } from '../icons'
import styles from './style.module.scss'

export type messageProps = {
  id: number
  de: string
  texto: string
}

type MessageListProps = {
  list: messageProps[]
  handleDelete: (value: number) => void
  handleModal: (user: string) => void
}

const MessageList: React.FC<MessageListProps> = (props) => {
  return (
    <ul
      className={styles.chatList}
      style={{
        color: appConfig.theme.colors.neutrals['050'],
      }}
    >
      {props.list
        ? props.list.map((item) => {
            return (
              <li className={styles.listUpperItem} key={item.id}>
                <div
                  style={{
                    marginBottom: '8px',
                  }}
                >
                  <img
                    className={styles.userImage}
                    onClick={() => {
                      props.handleModal(item.de)
                    }}
                    src={`https://github.com/${item.de}.png`}
                    alt={item.de}
                  />

                  <strong>{item.de}</strong>
                  <span
                    style={{
                      color: appConfig.theme.colors.neutrals[300],
                    }}
                  >
                    {new Date().toLocaleDateString()}
                    <strong> - </strong>
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>

                <div className={styles.listBottomItem}>
                  {item.texto.startsWith(':sticker:') ? (
                    <img
                      className={styles.stickerMessage}
                      src={item.texto.replace(':sticker:', '')}
                      alt={`sticker enviado por ${item.de}`}
                    />
                  ) : (
                    item.texto
                  )}
                  <button
                    className={styles.listIcon}
                    onClick={() => props.handleDelete(item.id)}
                  >
                    <Delete />
                  </button>
                </div>
              </li>
            )
          })
        : null}
    </ul>
  )
}

export { MessageList }
