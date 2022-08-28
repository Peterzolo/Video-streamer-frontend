import React from "react";
import styled from "styled-components";
import ImageVideoOO1 from "../../images/image-movie001.jpg"

const Container = styled.div`
  width: 225px;
  height: 120px;
  background-color: #ad8b00;
  margin-top: 5px;
  margin-right: 5px;
  /* padding: 10px; */
  border-radius: 10px;
  margin-bottom: 5px;
`;
const Image = styled.img`
width: 100%;
height: 120px;
padding: 5px;
object-fit: cover;
`;
// const Container = styled.div``
// const Container = styled.div``

const ListItems = () => {
  return (
    <Container>
      <Image src={ImageVideoOO1} alt ="" />
    </Container>
  );
};

export default ListItems;
