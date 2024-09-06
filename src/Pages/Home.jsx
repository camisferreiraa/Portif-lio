import Header from "../Components/Header"
import styled from "styled-components"
import wave from '../Assets/Background/waves.svg'
import person from '../Assets/Background/person.png'
import '../Styles/Home.css'
import MenuInferior from "../Components/InferiorBar"



const Container = styled.div `
background-color: rgba(23, 18, 20, 1);
background-image: url(${wave});
background-size: 100%;
background-position: bottom;
background-repeat: no-repeat;
width: 100vw;
display: flex;
gap: 4rem;
overflow: hidden;
justify-content: center;
height: 100vh;

`
const Box = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;



`
const Div = styled.div `
height: 300px;
width: 400px;
position: relative;
left: 200px;

@media (max-width: 768px) {
   left: 10px;
   width: 560px;
   top: 60px;
  }
`

function Home() {
 
    return (
      <>
      <Header/>
      <Container className="container1">
        <Box>
          <img src={person}/>
          <Div className="box-title">
            <h1>Seja Bem-Vindo ao meu portifolio</h1>
            <p>Sou Camilly, Desenvolvedora Web e Designer de Interfaces</p>
          </Div>
        </Box>
      </Container>
      <MenuInferior/>
      </>
    )
  }
  
  export default Home