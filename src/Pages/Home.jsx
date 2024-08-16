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

justify-content: space-around;
height: 100vh;
`

function Home() {
  

    return (
      <>
      <Header/>
      <Container className="home">
        <div className="home__container col-md-6 order-md-2">
          <img className="img-fluid" src={person} style={{width: '750px', left: '300px', top: '180px'}}/>
        </div>
        <div className="box-title col-md-6 order-md-1">
          <h1 className="fs-md-5">Seja Bem-Vindo ao meu portifolio</h1>
          <p className="fs-md-5">Sou Camilly, Desenvolvedora Web e Designer de Interfaces</p>
        </div>
      </Container>
      <MenuInferior/>
      </>
    )
  }
  
  export default Home