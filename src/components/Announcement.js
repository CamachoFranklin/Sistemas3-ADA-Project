import styled from "styled-components";

const Container = styled.div`
  height: 30%;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container  spacing={2} xs={12} align="center">Aprovechas nuestros precios en alquileres y reservacion de eventos!!!!</Container>;
};

export default Announcement;
