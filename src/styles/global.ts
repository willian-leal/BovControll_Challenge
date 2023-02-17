import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystem, 'Segoe UI', Roboto, Oxygem, 
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 100px 150px
    }
`

export default GlobalStyles
