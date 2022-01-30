import { useEffect, useState } from 'react'
import styles from './style.module.scss'

const Instructions = () => {
  const [imgPage, setImgPage] = useState<number>(1)
  const [instructionsIsOpen, setInstructionsIsOpen] = useState(false)

  const handleNever = () => {
    localStorage.setItem('Instructions', 'true')
    setInstructionsIsOpen(false)
  }

  useEffect(() => {
    const alreadyKnow = localStorage.getItem('Instructions')
    if (!alreadyKnow) {
      setInstructionsIsOpen(true)
    }
  }, [])

  return (
    <>
      {instructionsIsOpen && (
        <section className={styles.background}>
          <div className={styles.instructionsBox}>
            <img src={`/images/instructions-${imgPage}.png`} alt="" />

            {imgPage === 1 ? (
              <>
                <h2>Instruções</h2>
                <p>
                  Para aqueles que quiserem ter uma experiência completa podem
                  clicar no botão "unmute" assim como na imagem acima
                </p>
              </>
            ) : (
              <p>
                Assim que entrar na página de chat poderá escolher quais das
                muscias quiser ouvir. Não esquecer do clicar no botão "unmute".
              </p>
            )}
            <div>
              <button
                onClick={() => {
                  setImgPage(imgPage - 1)
                  console.log(imgPage)
                }}
                disabled={imgPage <= 1}
              >
                Prev
              </button>

              {imgPage === 2 && (
                <button onClick={handleNever}>Não mostrar novamente</button>
              )}

              {imgPage === 2 ? (
                <button onClick={() => setInstructionsIsOpen(false)}>
                  Até mais
                </button>
              ) : (
                <button
                  onClick={() => {
                    setImgPage(imgPage + 1)
                    console.log(imgPage)
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export { Instructions }
