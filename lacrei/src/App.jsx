import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { HashRouter } from "react-router-dom";

function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
        <GlobalStyle />
      </HashRouter>
    </ ThemeProvider >

  )
}

export default App
