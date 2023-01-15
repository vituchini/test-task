import { createGlobalStyle } from 'styled-components'
import { device } from '../libs/utils/device'

const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  html{
  font-size: 62.5%;
  box-sizing: border-box; 
  @media ${device.tablet} {
    font-size: 55.5%;
	}
  @media ${device.mobileL} {
    font-size: 52.5%;
	}
  @media ${device.mobileM} {
    font-size: 50%;
	}
  @media ${device.mobileS} {
    font-size: 48.7%;
	}
}
  body {
    margin: 0;
    -webkit-tap-highlight-color:transparent;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.background};
    /// transition: all .3s linear;
    min-height: 100vh; 
    overflow :hidden;
    position: fixed;
    top: 0;
    left: 0;
    p{
      margin: 0;
    }
  }
`

export default GlobalStyle
