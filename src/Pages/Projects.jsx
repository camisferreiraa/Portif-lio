import { styled } from 'styled-components'
import MenuInferior from '../Components/InferiorBar'
import Header from '../Components/Header'

import '../Styles/Projects.css'

const Container = styled.div `
 background-color: #181016;
 width: 100vw;
 height: calc(100vh - 160px);
 `
function Projects() {
  

    return (
      <>
       <Header/>
      <Container className="fade-in">
      <h1>Projetos</h1>

      </Container>
      <MenuInferior/> 
      </>
    )
  }
  
  export default Projects