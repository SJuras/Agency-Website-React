import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 50px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px){
    display: none;
  }
`

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: lightblue;
  }
`

const Button = styled.button`
  border: 2px solid #fff;
  padding: 10px 15px;
  background-color: crimson;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: lightblue;
  }
`

const Navbar = () => {
  return(
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
