import * as React from 'react'
import styled from "@emotion/styled";
import scrollTo from "gatsby-plugin-smoothscroll";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #1d1d1d;
  position: fixed;
  top: 0;
  margin-top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`

const NavWrapper = styled.div`
  max-width: 1200px;
  box-sizing: border-box;
  padding: 20px 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Brand = styled.a`
  font-size: 24px;
  color: white;
  font-weight: 400;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.53);
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const Navlink = styled.a`
  color: white;
  font-weight: 400;

  &:hover {
    color: rgba(255, 255, 255, 0.58);
    cursor: pointer;
  }
`

const NavButton = styled.a`
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  transition: 250ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #fff;
    text-shadow: 0 0 10px #fff;
  }
`

const Rgb = styled.div`
  width: 100%;
  height: 5px;
  margin: 0;
`

const Navbar = () => {
    return(
        <Nav id="home">
            <Rgb className="rgb"/>
            <NavWrapper>
                <Brand>Hugin</Brand>
                <Navigation>
                    <NavButton href="https://kryptokrona.se">Kryptokrona →</NavButton>
                </Navigation>
            </NavWrapper>
        </Nav>
    )
}



export default Navbar