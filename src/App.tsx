import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Projetos from "./containers/Projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import Global, { Container } from "./styles";
import temaLight from "./themes/lights";
import temaDark from "./themes/dark";

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <Global />
      <Container>
      <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App;
