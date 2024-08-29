import styled from 'styled-components'
import { DiCode } from "react-icons/di";
import { NavLink } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import '../Styles/Header.css'
import { useState, useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";

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
overflow: hidden;

width: 100vW;
height: 80px;
`

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const whatsappNumber = "5599985273497"; 
    const message = "Olá, gostaria de mais informações!"; 

  

    return (
      <>
        <Container className='container-fluid text-white py-3'>
        <div className="col-6 col-md-3">
            <NavLink to='/' className='logo d-flex align-items-center'><DiCode size={50}/>Vic Designer</NavLink>
        </div>

        <nav className="navbar navbar-expand-md ml-auto">
            <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div ref={menuRef} className={`offcanvas ${isMenuOpen ? 'show' : 'hide'}`} id="navbarNav">
            <button  type="button" className="close x" aria-label="Close" onClick={() => setIsMenuOpen(false)}>
            <span aria-hidden="true" ><IoClose/></span>
            </button>
                <ul className="navbar-nav " style={{paddingLeft: '16px'}}>
                    <li className="nav-item">
                        <NavLink to='/services' className="nav-link link-nav d-flex align-items-center no-hover">Serviços<MdDesignServices className='ms-1' size={25}/></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contact' className="nav-link link-nav d-flex align-items-center no-hover">Contatos<IoMdContact className='ms-1' size={25}/></NavLink>
                    </li>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank"
                     rel="noopener noreferrer" className='wpp d-flex align-items-center'>
                    WhatsApp <IoLogoWhatsapp size={35} className='ms-1'/>  
                    </a>
                </ul>
                
            </div>
            
        </nav>
        </Container>
      </>
    )
  }
  
  export default Header