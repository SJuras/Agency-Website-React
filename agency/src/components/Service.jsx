import React, { useState } from 'react'
import styled from 'styled-components'
import Woman from '../img/woman2.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'
import Video1 from '../video/video1.mp4'
import AnimatedShapes from './AnimatedShapes'



const Container = styled.div`
  display: flex;
  height: 100%;
`

const Left = styled.div`
  width: 50%;
  position: relative;
`

const Image = styled.img`
  display: ${(props)=> props.open && "none"};
  width: 70%;
  margin-left: 100px;
`

const Video = styled.video`
  display: ${(props)=> !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
`

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

  const [ open, setOpen ] = useState(false)

  return(
    <Container>
      <Left>
        <Image open={open} src={Woman} />
        <Video open={open} autoPlay loop controls src={Video1} />
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
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Service
