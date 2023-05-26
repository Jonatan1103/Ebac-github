import { styled } from "styled-components";
import { PropsParagrafo } from "./index";

export const P = styled.p<PropsParagrafo>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494' )};
  font-size: 14px;
  line-height: 22px;
`