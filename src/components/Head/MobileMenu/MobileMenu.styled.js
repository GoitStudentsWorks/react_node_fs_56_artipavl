import { NavLink } from "react-router-dom"
import styled from 'styled-components';

import BgMobile from '../../../images/bg/menuBG_Mobile.webp'
import BgMobileRetina from '../../../images/bg/menuBG_Mobile@2x.webp'
import BgTablet from '../../../images/bg/menuBG_Tablet.webp'
import BgTabletRetina from '../../../images/bg/menuBG_Tablet@2x.webp'

export const MobileMenuSection = styled.section`
  box-sizing: border-box;
  position: absolute;
  padding: 18px 16px;
  background-color: #EBF3D4;
  background-image: url('${BgMobile}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 100%;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url('${BgMobileRetina}');
    }


  @media ${props => props.theme.device.tablet}{
    padding: 18px 32px;
    width: 768px;
    right: 50%;
    transform: translateX(50%);
    background-image: url('${BgTablet}');
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${BgTabletRetina}');
    }

  }


@media ${props => props.theme.device.desktop}{
    display: none
}
`
export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavStyled = styled.nav`
    margin-top: 124px;
    height: 100%;


`
export const LinkLogo = styled(NavLink)`
`
export const NavLogo = styled.img`
  width: 40px;
  height: 40px;

  @media ${props => props.theme.device.tablet} {
    width: 44px;
    height: 44px;
  }

`
export const CrossImg = styled.img`
  width: 32px;
  height: 32px;
`

export const NavItems = styled.ul`
`

export const NavItem = styled.li`
&.active {
    color: ${props => props.theme.colors.accent};
  }

`
export const Navigator = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  line-height: 1.6;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: color 250ms linear;

    &:hover, &focus {
      color: ${props => props.theme.colors.accent};
    }

    @media ${props => props.theme.device.mobile} {


    @media ${props => props.theme.device.tablet} {
      font-size: 24px;
    }
}

`
export const SearchIcon = styled.img`
  fill: ${props => props.theme.colors.accentDark};
  &:hover, &focus {
  fill: ${props => props.theme.colors.accent};
  }
  @media ${props => props.theme.device.mobile} {
    width: 20px;
    height: 20px;
}
`

export const SearchText = styled.p`
  margin-left: 8px;
`
