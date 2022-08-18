

import React from 'react'
import styled from "styled-components";
import AvatarImage from "../images/Video-logo.jpg"
import Comment from './Comment';



const Container = styled.div``
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 40px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid red;
  color: #8c8c8c;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
   <Container>
   <NewComment>
        <Avatar src={AvatarImage} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
   </Container>
  )
}

export default Comments
