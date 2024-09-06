import styled from "styled-components"
import Header from "../Components/Header"
import MenuInferior from "../Components/InferiorBar"
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../Styles/Contact.css'
import { useState } from "react";
import emailjs from 'emailjs-com'


const Container = styled.div `
 background-color: #1e1d1e;
 width: 100vw;
 height: 100vh;
 `
const Div = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
padding: 1rem ;
width: 100vw;

`
const Div2 = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
padding-bottom: 6rem;


@media (max-width: 766px) {
  
}
`

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6xfrnf8',
      'template_3p4hqy6', 
      formData,
      'cHEsCmwLelPGiaIYl' 
    )
    .then((response) => {
      console.log('E-mail enviado com sucesso!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');
    }, (err) => {
      console.error('Erro ao enviar o e-mail:', err);
      alert('Erro ao enviar mensagem, tente novamente.');
    });

   
    setFormData({ name: '', email: '', message: '' });
  };
  

    return (
      <>
      <Header/>
        <Container className='fade-in'>
        <Div style={{paddingTop: '100px'}}>
          <h1 >Redes Sociais</h1>
          <div className="media-socias">
            <div>
              <div>
              <h2><a href="tel:+5599985273497"><FaPhoneAlt className="me-1"/>Telefone</a></h2>
              </div>
              <div>
                <h2><a href="https://www.instagram.com/vic.designer.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><AiFillInstagram  className="me-1"/>Instagram</a></h2>
              </div>
              <div>
                <h2><a href=""><FaFacebookSquare className="me-1"/>Facebook</a></h2>
              </div>
            </div>
            <div>
            <div>
                <h2><a href="https://github.com/camisferreiraa" target="_blank"><FaGithub className="me-1"/>Github</a></h2>
            </div>
            <div>
                <h2><a href="https://www.behance.net/gallery/193082573/Portifolio-Camilly-Vitoria"target="_blank"><FaSquareBehance className="me-1"/>Behance</a></h2>
            </div>
            <div>
                <h2><a href="https://www.linkedin.com/in/camillyvitoriaferreiraa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blanck"><FaLinkedin className="me-1"/>LinkedIn</a></h2>
            </div>
            </div>
          </div>
        </Div>
        <Div2>
          <h1>Mande sua mensagem</h1>
          <form onSubmit={handleSubmit} className="form-standard">
            <input type="text" placeholder="Seu nome"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
             />
            <input type="email" placeholder="Seu e-mail" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            />
            <textarea placeholder="escreva sua mensagem"
            id="message"
            name="message"
            rows='4'
            value={formData.message}
            onChange={handleChange}
            required
            />
            <button type="submit">Enviar</button>
          </form>
        </Div2>
        </Container>
      <MenuInferior/>
      </>
    )
  }
  
  export default Contact