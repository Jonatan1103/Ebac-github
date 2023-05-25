import styled  from "styled-components";

type BotaoProps = {
  principal?: boolean
  font?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => props.principal ? 'green' : 'blue'};
  font-size: ${props => props.font || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return(
    <>
      <Botao font='24px' principal>Ola</Botao>
      <Botao font='18px'>Ola</Botao>
      <BotaoPerigo as={'a'} font='30px'>
        <span>
          Cancelar
        </span>
      </BotaoPerigo>
    </>
  )
}

export default Teste