import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Botao, Descricao, SidebarContainer } from "./styles"

type PropsTema = {
  trocaTema: () => void
}

const Sidebar = (props: PropsTema) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Jonatan</Titulo>
        <Paragrafo fontSize={16} tipo="secundario">
          Jonatan1103
        </Paragrafo>
        <Descricao fontSize={12} tipo="principal">
          Engenheiro Front-end
        </Descricao>
        <Botao onClick={props.trocaTema}>Trocar tema</Botao>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar