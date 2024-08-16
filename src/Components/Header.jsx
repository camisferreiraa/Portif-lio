import styled from 'styled-components'
import { DiCode } from "react-icons/di";
import { NavLink } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import '../Styles/Header.css'

const Container = styled.div `
z-index: 1000;
top: 0;
left: 0;
position: fixed;
background-color: rgba(23, 18, 20, 1);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

width: 100vW;
height: 80px;
`

function Header() {

    const whatsappNumber = "5599985273497"; 
    const message = "Olá, gostaria de mais informações!"; 

  

    return (
      <>
        <Container className='container-fluid text-white py-3'>
        <div className="col-6 col-md-3">
            <NavLink to='/' className='logo d-flex align-items-center'><DiCode size={50}/>Vic Designer</NavLink>
        </div>

        <nav className="navbar navbar-expand-md ml-auto">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to='/services' className="nav-link link-nav d-flex align-items-center no-hover">Serviços<MdDesignServices className='ms-1' size={25}/></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contact' className="nav-link link-nav d-flex align-items-center no-hover">Contatos<IoMdContact className='ms-1' size={25}/></NavLink>
                    </li>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank"
                     rel="noopener noreferrer" className='wpp d-flex align-items-center'>
                    WhatsApp <IoLogoWhatsapp size={25} className='ms-1'/>  
                    </a>
                </ul>
                
            </div>
            
        </nav>
        </Container>
      </>
    )
  }
  
  export default Header