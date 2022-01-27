export function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
        // min-width: 100vw;
        // overflow: hidden;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        min-width: 100vw;
        overflow: hidden;
        // display: flex;
        // flex: 1;
      }
    `}</style>
  )
}
