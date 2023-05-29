import { styled } from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`

export const Descricao = styled(P)`
  margin: 24px 0 40px;
`

export const Botao = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`