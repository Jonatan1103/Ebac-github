import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Titulo</Titulo>
      <Paragrafo tipo="principal">
        Lorem isum dolor sit amet consectetur adipisicing elit. Debitis, ipsum totam! Delectus consequuntur mollitia, possimus est at illo incidunt in quis quod saepe perferendis nam explicabo reprehenderit minus facilis doloremque?
      </Paragrafo>

      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=Jonatan1103&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jonatan1103&layout=compact&langs_count=7&theme=dracula"/>
      </GithubSecao>
    </section>
  )
}

export default Sobre