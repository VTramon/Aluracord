import { useState } from 'react'
import appConfig from '../../../config.json'
import { Emoji } from '../icons'
import styles from './style.module.scss'

type ButtonSendStickerProps = {
  onStickerClick: (value: string) => void
}

export function ButtonSendSticker(props: ButtonSendStickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={styles.stickerBox}
        style={{
          position: 'relative',
        }}
      >
        <button
          style={{
            backgroundColor: appConfig.theme.colors.neutrals[300],
            color: appConfig.theme.colors.neutrals[800],
            // filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Emoji />
        </button>
        {isOpen && (
          <div
            className={styles.innerBox}
            style={{
              backgroundColor: appConfig.theme.colors.neutrals[800],
            }}
            onClick={() => setIsOpen(false)}
          >
            <p
              style={{
                color: appConfig.theme.colors.neutrals['050'],
                fontWeight: 'bold',
              }}
            >
              Stickers
            </p>
            <ul className={styles.list}>
              {appConfig.stickers.map((sticker, index) => (
                <img
                  key={sticker + 'img' + index}
                  onClick={() => {
                    console.log(`:sticker:${sticker}`)
                    props.onStickerClick(`:sticker:${sticker}`)
                  }}
                  src={sticker}
                  alt={`sticker `}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
