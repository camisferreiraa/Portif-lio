import styled from "styled-components"
import Header from "../Components/Header"
import MenuInferior from "../Components/InferiorBar"


const Container = styled.div `
 background-color: #181016;
 width: 100vw;
 height: calc(100vh - 160px);
 `

function Contact() {
  

    return (
      <>
      <Header/>
        <Container className='fade-in'>

        </Container>
      <MenuInferior/>
      </>
    )
  }
  
  export default Contact