import { styled } from 'styled-components'
import MenuInferior from '../Components/InferiorBar'
import Header from '../Components/Header'
import eu from '../Assets/Background/IMG_20240523_144521_198_polarr.jpeg'

import '../Styles/AboutMe.css'


 const Container = styled.div `
 background-color: #181016;
 width: 100vw;
 padding: 10rem 0 10rem 0;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 `


function AboutMe() {
  

    return (
      <>
      <Header/>
      <Container className="fade-in container-fluid">
      <h1  className='fs-1 fs-md-6'>Me Conheça</h1>
      <img src={eu} alt="" style={{position: 'inherit'}} />
      <div className='texts'>
        <p>Olá, eu sou a Camilly, uma entusiasta da tecnologia com 20 anos e uma paixão inabalável por criar experiências digitais impactantes. Há um ano, mergulhei de cabeça no mundo do desenvolvimento e desde então, não consegui parar. Estou cursando Análise e Desenvolvimento de Sistemas, e cada linha de código que escrevo só reforça meu amor pelo front-end.

        Minha jornada começou com um fascínio pelo design gráfico, onde encontrei no Figma uma poderosa ferramenta para transformar ideias em realidade. Essa paixão pelo visual me levou naturalmente ao desenvolvimento front-end, onde posso unir a criatividade do design com a lógica da programação. A combinação dessas habilidades me permite criar interfaces não só funcionais, mas também visualmente atraentes.</p>
        <hr />
        <p>Fora do trabalho, adoro passar tempo com a minha família, ouvir música e explorar novas formas de me expressar criativamente. Já fui fotógrafa, uma experiência que me ensinou a importância de capturar a essência das coisas — uma lição que levo para cada projeto em que trabalho.

        Seja criando um layout elegante ou codificando uma experiência de usuário fluida, estou sempre em busca da próxima oportunidade para desafiar meus limites e evoluir como desenvolvedora.</p>
      </div>

      </Container>
      <MenuInferior/>
      </>
    )
  }
  
  export default AboutMe