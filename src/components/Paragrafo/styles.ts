import { styled } from "styled-components";
import { PropsParagrafo } from "./index";

export const P = styled.p<PropsParagrafo>`
  color: ${(props) => (props.tipo === 'principal' ? props.theme.corPrincipal : props.theme.corSecundaria )};
  font-size: ${props => props.fontSize ? props.fontSize + 'px' : '14px'};
  line-height: 22px;
`