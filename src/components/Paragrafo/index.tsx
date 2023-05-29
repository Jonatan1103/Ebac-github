import { P } from './styles'

export type PropsParagrafo = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: PropsParagrafo) => {
  return (
    <P fontSize={fontSize} tipo={tipo}>{children}</P>
  )
}

export default Paragrafo