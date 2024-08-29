import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { FaProjectDiagram } from "react-icons/fa";
import { FaSmileWink } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import '../Styles/InferiorBar.css'


const Menu = styled.div `  
 width: 100vw;
 height: 80px;
 background-color: #cc1f73;
 display: flex;
 justify-content: space-around;
 align-items: center;
 z-index: 1000;
 position: fixed;
 bottom: 0;
 left: 0;

`
const Div = styled.div `

`
function MenuInferior() {
  

    return (
      <>
        <Menu>
            <Div>
            <NavLink style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600', 
            }} to="/skills" className="nav-link d-flex align-items-center " activeClassName="active"><FaUserCog className="me-2" size={20}/>Habilidades</NavLink>
            </Div>
            <Div>
            <NavLink style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600', 
            }} to="/aboutme" className="nav-link d-flex align-items-center " activeClassName="active"><FaSmileWink className="me-2" size={20}/>Sobre Mim</NavLink>
            </Div>
            <Div>
            <NavLink style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600', 
            }} to="/projects" className="link nav-link d-flex align-items-center" activeClassName="active"><FaProjectDiagram className="me-2" size={20}/>Projetos</NavLink>
            </Div>
        </Menu>
      </>
    )
  }
  
  export default MenuInferior