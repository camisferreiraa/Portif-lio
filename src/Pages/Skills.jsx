import { styled } from 'styled-components'
import MenuInferior from '../Components/InferiorBar'
import Header from '../Components/Header'
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { TbBrandReact } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


import '../Styles/Skills.css'



 const Container = styled.div `
 background-color: #181016;
 width: 100vw;
 height: 100%;
 padding-top: 10rem;
 padding-bottom: 10rem;
 
 `
const HardSkills = styled.div `
display: flex;
gap: 4rem;
flex-direction: column ;
justify-content: space-around;
align-items: center;


`
const BoxText =styled.div `
line-height: 45px;
width: 40%;
background-color: transparent;
color: white;
font-size: 24px;
padding-left: 2rem;

@media screen {
  width: 90%;
}

`

function Skills() {
  

    return (
      <>
      <Header/>
        <Container className="fade-in">
        <h1>Skills</h1>
          <HardSkills>
            <section className='front-end'>
              <div className='front' data-aos="fade-up">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Styled Components</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul>
                <div>
                  <DiHtml5 size={40}/>
                  <DiCss3  size={40} />
                  <DiJavascript size={40} />
                  <TbBrandReact size={40} />
                  <FaBootstrap size={40} />
                </div>
              </div>
              <BoxText data-aos="fade-up">
              Com habilidades robustas em front-end, transformo ideias em realidades interativas e funcionais. Meu domínio em JavaScript, React, Bootstrap, HTML e CSS me permite desenvolver interfaces dinâmicas, responsivas e visualmente atraentes, que proporcionam uma navegação intuitiva e fluida.

              Além das competências técnicas, também tenho uma forte inclinação para o design gráfico. Utilizo o Figma para projetar layouts e interfaces que combinam estética e usabilidade. Com noções de UI e UX, garanto que cada projeto seja não apenas bonito, mas também funcional, colocando sempre a experiência do usuário em primeiro lugar.
              </BoxText>
            </section>

            <section className='front-end' style={{flexDirection: 'column-reverse'}}>
            <BoxText>
            Como desenvolvedora back-end, meu foco é criar a base sólida que garante o bom funcionamento de aplicações robustas e escaláveis. Com experiência em Java, JavaScript, Node.js, Spring, SQL e MongoDB, desenvolvo sistemas que suportam alto tráfego e desempenho consistente, garantindo que as operações sejam realizadas de forma rápida e segura.

            Tenho habilidades em bancos de dados relacionais e não-relacionais, o que me permite escolher e implementar a melhor solução para armazenar e gerenciar dados de acordo com as necessidades do projeto. Além disso, meu conhecimento em Git e GitHub assegura uma gestão de versão eficiente, permitindo que o código seja colaborativo e facilmente mantido ao longo do tempo.
              </BoxText>
              <div className='front' data-aos="fade-up">
                <ul>
                  <li>Node.js</li>
                  <li>Java</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>TypeScript</li>
                </ul>
                <div>
                  <FaNode size={40}/>
                  <FaJava  size={40} />
                  <GrMysql size={40} />
                  <SiMongodb size={40} />
                  <SiTypescript size={40} />
                </div>
              </div>
            </section>
          </HardSkills>
         
        </Container>
        <MenuInferior/>
      </>
    )
  }
  
  export default Skills