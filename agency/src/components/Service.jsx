import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman2.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'



const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  width: 50%;
`

const Image = styled.img`
  width: 70%;
  margin-left: 100px;
`

const Right = styled.div`
  width: 50%;
  display: flex;
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const Desc = styled.p`
  font-size: 20px;
  color: #555;
  margin-bottom: 50px;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: #fff;
  font-size: 20px;
  padding: 15px;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  align-items: center;
  &:hover {
    background-color: lightblue;
  }
`
const Icon = styled.img`
   width: 20px;
   margin-right: 10px;
`

const Service = () => {
  return(
    <Container>
      <Left>
        <Image src={Woman} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experince services to startups and small
            businesses who are looking for partners of their digital media,
            design and deployment, lead generation and communications requirement.
            We work with you, not for you. ALthough we have a great resources.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button><Icon src={Play} />How it works</Button>
        </Wrapper>
      </Right>
    </Container>
  )
}

export default Service
