import { P } from './styles'

export type PropsParagrafo = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: PropsParagrafo) => {
  return (
    <P tipo={tipo}>{children}</P>
  )
}

export default Paragrafo