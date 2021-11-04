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

  @media only screen and (max-width: 480px){
    flex-direction: column;
  }
`

const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px){
    display: none;
  }
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

  @media only screen and (max-width: 480px){
    width: 100%;
  }
`

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px){
    width: 100%;
  }
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px){
    padding: 20px;
    width: 100%;
  }
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

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  zop: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
`

const CloseButton = styled.button`
  position: absolute;
  background-color: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30px;
`

const Service = () => {

  const [ open, setOpen ] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;

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
      {smallScreen && open && (
        <Modal>
          <Video open={open} autoPlay loop controls src={Video1} />
          <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
      <AnimatedShapes />
    </Container>
  )
}

export default Service
