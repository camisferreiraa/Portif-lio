import { styled } from 'styled-components'
import MenuInferior from '../Components/InferiorBar'
import Header from '../Components/Header'
import projectOne from '../Assets/Projects/projectOne.png';
import projectTwo from '../Assets/Projects/ProjectTwo.png';
import projectThree from '../Assets/Projects/ProjectThree.png'
import { FaGithub } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

import '../Styles/Projects.css'

const Container = styled.div `
 background-color: #181016;
 padding-top: 10rem;
 width: 100vw;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 `
 const Paragrafo = styled.div `
 background-color: transparent;
 color: white;
 font-size: 24px;
 margin-bottom: 1rem;
 `
const H2 = styled.h2`
color: white;


`
const Button = styled.button `
background-color: #f60b94;
border-radius: 30px;
padding: 10px 15px;
border: none;
margin-right: 5px;
&:hover {
  background-color: #ffffff ;
  box-shadow: 1px 1px 13px 0px #ff08888f;
}
`
function Projects() {
  

    return (
      <>
      <Header/>
      <Container className="fade-in">
      <h1>Projetos</h1>

    
      


      <section className='container_projects'>

      <div className="row align-items-center project">
        <div className="col-md-4">
          <img src={projectOne} alt="" className='img-fluid image' />
        </div>
        <div className="col-md-6">
          <H2>Vanessa Nails</H2>
          <Paragrafo>Projeto de um site de Manicure e Pedicure, usando HTML, CSS</Paragrafo>
          <div>
            <Button><a className='btn' href="https://vanessa-nails.vercel.app/" target='_blank'><IoEyeSharp size={30} className='me-2'/>Deploy</a></Button>
            <Button><a className='btn' href="https://github.com/camisferreiraa/Vanessa-Nails.git" target='_blank'><FaGithub className='me-2' size={30}/>Ver Código</a></Button>
          </div>
        </div>
      </div>

      <div className="row align-items-center project">
        <div className="col-md-4">
          <img src={projectOne} alt="" className='img-fluid image'/>
        </div>
        <div className="col-md-6">
          <H2>Clone Netflix</H2>
          <Paragrafo>Projeto do curso +PraTi, usando HTML, CSS, REACT</Paragrafo>
          <div>
            <Button><a className='btn' href="https://vanessa-nails.vercel.app/" target='_blank'><IoEyeSharp size={30} className='me-2'/>Deploy</a></Button>
            <Button><a className='btn' href="https://github.com/camisferreiraa/Vanessa-Nails.git" target='_blank'><FaGithub className='me-2' size={30}/>Ver Código</a></Button>
          </div>
        </div>
      </div>

      <div className="row align-items-center project">
        <div className="col-md-4">
          <img src={projectThree} alt="" className='img-fluid image' />
        </div>
        <div className="col-md-6">
          <H2>Page de Serviços</H2>
          <Paragrafo>Projeto de uma Page de Serviços, ultilizando BOOTSTRAP, JAVASCRIPT, CSS E HTML</Paragrafo>
          <div>
            <Button><a className='btn' href="https://projeto-mais-pra-ti-fpk7.vercel.app/" target='_blank'><IoEyeSharp size={30} className='me-2'/>Deploy</a></Button>
            <Button><a className='btn' href="https://github.com/camisferreiraa/ProjetoMaisPraTi.git" target='_blank'><FaGithub className='me-2' size={30}/>Ver Código</a></Button>
          </div>
        </div>
      </div>

      <div className="row align-items-center project">
        <div className="col-md-4">
          <img src={projectTwo} alt="" className='img-fluid image' />
        </div>
        <div className="col-md-6">
          <H2>Trip On Paradise</H2>
          <Paragrafo>Projeto do curso +PraTi, usando HTML, CSS, JAVASCRIPT</Paragrafo>
          <div>
            <Button><a className='btn' href="https://trip-on-paradise-mais-pra-ti.vercel.app/index.html" target='_blank'><IoEyeSharp size={30} className='me-2'/>Deploy</a></Button>
            <Button><a className='btn' href="https://github.com/camisferreiraa/TripOnParadise.git" target='_blank'><FaGithub className='me-2' size={30}/>Ver Código</a></Button>
          </div>
        </div>
      </div>

     

      </section>

      </Container>
      <MenuInferior/> 
      </>
    )
  }
  
  export default Projects