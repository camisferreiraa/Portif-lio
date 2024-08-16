import { styled } from 'styled-components'
import MenuInferior from '../Components/InferiorBar'
import Header from '../Components/Header'

import '../Styles/AboutMe.css'


 const Container = styled.div `
 background-color: #181016;
 width: 100vw;
 padding: 10rem 0 10rem 0;
 height: 100vh;
 `

function AboutMe() {
  

    return (
      <>
      <Header/>
      <Container className="fade-in container-fluid">
      <h1 className='fs-1 fs-md-6'>Me Conheça</h1>

      <div>

      </div>

      </Container>
      <MenuInferior/>
      </>
    )
  }
  
  export default AboutMe