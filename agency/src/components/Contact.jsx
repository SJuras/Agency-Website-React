import React from 'react'
import styled from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'


const Container = styled.div`
  height: 85%;
  background-color: #fafafa;
`

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px){
    flex-direction: column;
  }
`

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 480px){
    width: 100%;
    margin-bottom: 16px;
  }
`

const Title = styled.h1`
  margin: 50px;
  margin-top: 0px;
  text-align: center;

  @media only screen and (max-width: 480px){
    margin: 20px;
  }
`

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
  box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
  padding: 24px;

  @media only screen and (max-width: 480px){
    flex-direction: column;
    padding: 0px;
    box-shadow: none;
  }
`

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px){
    height: 50px;
    margin-right: 0px;
    margin-bottom: 60px;
  }
`

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px){
    width: 100%;
  }
`

const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media only screen and (max-width: 480px){
    padding: 5px;
    margin-bottom: 6px;
  }
`

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  resize: none;
  padding: 20px;

  @media only screen and (max-width: 480px){
    padding: 5px;
  }
`

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: lightblue;
  }
`

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px){
    width: 100%;
  }
`

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 480px){
    margin-bottom: 20px;
  }
`

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;

  @media only screen and (max-width: 480px){
    font-size: 12px;
  }
`


const Contact = () => {
  return(
    <Container>
      <Wrapper>
        <FormContainer>
        <Title>Questions? <br /> Let's Get In Touch</Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>22 Park Avenue, New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+ 1 33 788 - 3291</Text>
            <Text>+ 1 33 887 - 5421</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@agency.com</Text>
            <Text>sales@agency.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact
