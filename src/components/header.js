import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/braveslogo.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: darkblue;
  margin-bottom: 1.45rem;
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
          <h3>{data.site.siteMetadata.title}</h3>
          <h3>{data.site.siteMetadata.desc}</h3>
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
  </HeaderWrapper>
)

export default Header
