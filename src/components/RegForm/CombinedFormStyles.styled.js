import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.white} 40%,
    ${props => props.theme.colors.bgDark} 40%
  );

  padding-bottom: 118px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    bottom: 500px;
    right: -50%;
    width: 200%;
    height: 200%;
    background-color: ${props => props.theme.colors.white};
    border-radius: 30%;
  }

  @media ${props => props.theme.device.tablet} {
    &::before {
      border-radius: 40%;
      bottom: 370px;
    }
  }

  @media ${props => props.theme.device.desktop} {
    flex-direction: row;
    height: 100vh;

    &::before {
      border-radius: 40%;
      bottom: 440px;
    }
  }
`;

export const SignUpLogo = styled.img`
  margin-top: 96px;

  z-index: 1;

  @media ${props => props.theme.device.tablet} {
    width: 409px;
    margin-top: 115px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 532px;
    margin-right: 115px;
    margin-top: 0;
  }
`;

export const Form = styled.form`
  background: ${props => props.theme.colors.accentDarkMuted};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  z-index: 1;
  position: relative;

  width: 335px;

  display: flex;
  flex-direction: column;

  @media ${props => props.theme.device.tablet} {
    width: 500px;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormTitle = styled.h1`
  margin-top: 32px;
  margin-bottom: 18px;
  margin-left: 28px;

  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.17;

  color: ${props => props.theme.colors.textWhite};

  @media ${props => props.theme.device.tablet} {
    font-size: 28px;
    line-height: 1.07;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormBtn = styled.button`
  padding: 14px;

  margin-left: 28px;
  margin-right: 28px;
  margin-top: 28px;
  margin-bottom: 40px;

  background: ${props => props.theme.colors.modes.white.accent};

  border-radius: 6px;

  font-size: 16px;
  line-height: 1.12;

  color: ${props => props.theme.colors.whiteMuted};

  &:hover {
    background-color: ${props => props.theme.colors.whiteMuted};
    color: ${props => props.theme.colors.dark};
    transition: all 250ms linear 0s;
  }

  @media ${props => props.theme.device.tablet} {
    margin-top: 50px;
    margin-bottom: 44px;

    height: 59px;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormNavLink = styled(Link)`
  color: ${props => props.theme.colors.textWhite};
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  text-decoration: underline;

  margin-top: 18px;

  &:hover {
    color: ${props => props.theme.colors.whiteMuted};
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
