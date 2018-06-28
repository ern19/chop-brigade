import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Logo from '../images/braveslogo.svg'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: darkblue;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (
    isHome ? '60vh' : '20vh'
  )};
  h1 {
    display: flex;
    color: white;
    img {
      height: 40px;
      padding-right: 10px;
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`
const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none; 
        color: #fff;
        &:hover {
          border-bottom: 3px solid rgba(166,73,84,0.6);
        }
      }
    }
  }
`
const StyledLogo = styled(Logo)`
  
`


export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      if(this.props.location.pathname === '/') {
        this.wrapper.animate([{ height: "20vh" },{ height: "60vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      } else {
        this.wrapper.animate([{ height: "60vh" },{ height: "20vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      }
    }
  }

  render() {
    const { data } = this.props
    return (
      <HeaderWrapper 
        isHome={this.props.location.pathname === "/"}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
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
            Charge of the Chop Brigade
          </h1>      
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: '0.8'
          }}
          sizes={data.background.sizes} 
        />
      </HeaderWrapper>
    )
  }
}

