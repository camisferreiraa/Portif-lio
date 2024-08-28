import styled from 'styled-components'
import '../Styles/Services.css'
import Header from '../Components/Header'
import MenuInferior from '../Components/InferiorBar'
import ServiceCards from '../Components/ServiceCard'



const Container = styled.div `
background-color: #181016;
padding-top: 10rem;
padding-bottom: 12rem;
width: 100vw;
height: 100%;
overflow-x: hidden;
`

function Services() {
  

    return (
      <>
      <Header/>
      <Container className='fade-in'>
        <h1>Serviços</h1>
      <ServiceCards/>
     
      </Container>
      <MenuInferior/>
      </>
    )
  }
  
  export default Services