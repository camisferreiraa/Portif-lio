
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	width: 100%;
	height: 100%;
    align-content: center;
    justify-items: center;

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
 }
    
`;

const ServiceCard = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e8e8e8;
    cursor: pointer;
    
  }
`;

const ServiceName = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  color: #555;
`;

const SelectButton = styled.button`
  background-color: #ff00aa;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #f10d8a;
  }
`;

const services = [
  { id: 1, name: 'Design de Interfaces', description: 'Prototipagem de Aplicação no figma' },
  { id: 2, name: 'Web Designer', description: 'Criação de Sites e Landing Pages com as melhores techs' },
  { id: 3, name: 'Desenvolvedora Front-end', description: 'Colaboração em serviços front-end' },
  { id: 4, name: 'CopyWritter', description: 'Elaboração de textos e copys que atraem leads' },
  { id: 5, name: 'Branding de Marca', description: 'Produção de adereços de marca' },
  { id: 6, name: 'Design de Materiais Promocionais', description: 'Produção de flyer e banners para midia' },
];

const ServiceCards = () => {
  const selectService = (service) => {
    const message = `Olá, gostaria de agendar o serviço de ${service.name}.`;
    const phoneNumber = '+5599985273497'; // Substitua pelo número desejado
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Container>
      {services.map((service) => (
        <ServiceCard key={service.id} onClick={() => selectService(service)}>
          <ServiceName>{service.name}</ServiceName>
          <ServiceDescription>{service.description}</ServiceDescription>
          <SelectButton>Selecionar</SelectButton>
        </ServiceCard>
      ))}
    </Container>
  );
};

export default ServiceCards;
