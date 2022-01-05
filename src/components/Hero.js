import * as React from 'react'
import styled from "@emotion/styled";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  background-color: #1d1d1d;
  padding-top: 15em;
  padding-bottom: 15em;
`

const Container = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
`

const TextContent = styled.div`
  max-width: 600px;
`


const Title = styled.h1`
  color: white;
  font-weight: 600;
  margin: 10px 0;
`

const SubTitle = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.53);
  font-weight: 200;
  margin: 0;
`

const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.80);
  line-height: 1.75rem;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Button = styled.a`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 10px;
  font-weight: 600;
  transition: 250ms;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #fff;
  }
`
const BorderButton = styled.a`
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  padding: 10px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  transition: 250ms;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #fff;
  }
`

const HeroImg = styled.img`
    
`

const Hero = () => {
    return (
        <Section>
            <Container>
                <TextContent>
                    <SubTitle>Powered by Kryptokrona</SubTitle>
                    <Title>Welcome to Hugin Messenger</Title>
                    <Text>Hugin is a messaging service where messages are stored on the kryptokrona blockchain. Your
                        messages are secured with industry leading encryption so that only you and your chat partner have
                        the possibility to read them.</Text>
                    <ButtonWrapper>
                        <Button onClick={() => scrollTo('#download')}>Download</Button>
                        <BorderButton id="home">Whitepaper</BorderButton>
                    </ButtonWrapper>
                </TextContent>
                <HeroImg src=""/>
            </Container>
        </Section>
    )
}

export default Hero