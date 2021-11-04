import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 15%;
    background-color: crimson;
    color: lightgrey;
`

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px){
    flex-direction: column;
  }
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  @media only screen and (max-width: 480px){
    margin-bottom: 12px;
  }
`

const ListItem = styled.li`
  margin-right: 20px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`

const Copyright = styled.span`

`


const Footer = () => {
  return(
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>&copy; Sarif Design 2021.</Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer
