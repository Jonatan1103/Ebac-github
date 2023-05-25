import Projetos from "./containers/Projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import Global, { Container } from "./styles";

function App() {
  return (
    <div>
      <Global />
      <Container>
      <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </div>
  )
}

export default App;
