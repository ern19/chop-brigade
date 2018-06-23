import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/braveslogo.svg'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: darkblue;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 40vh;
  h1 {
    img {
      height: 80px;
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>    
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={Logo} alt="Braves logo"/>
        </Link>
      </h1>      
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
      sizes={data.background.sizes} 
    />
  </HeaderWrapper>
)

export default Header
