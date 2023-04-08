import emailIcon from '../../../images/icons/email.svg';
import styled from 'styled-components';

export const FormFooter = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media ${props => props.theme.device.tablet} {
    margin-top: 72px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media ${props => props.theme.device.desktop} {
    display: block;
    margin-top: 28px;
  }
`

export const FormFooterInput = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 0;
  padding-left: 42px;
  width: 204px;
  height: 38px;
  background-color: transparent;
  background-image: url('${emailIcon}');
  background-repeat: no-repeat;
  background-position: 15px 13px;
  background-size: 16px 12px;
  color: inherit;
  font-size: inherit;
  border-radius: 6px;
  border: 1px solid rgba(236, 236, 236, 0.16);

  &::placeholder {
    background-image: url('${emailIcon}') no-repeat;
    font-size: 10px;
    font-weight: 400;
    color: ${props => props.theme.colors.textWhite};
    opacity: 1;

    @media ${props => props.theme.device.tablet} {
      font-size: 14px;
    }

    @media ${props => props.theme.device.desktop} {
      font-size: 18px;
    }
  }

  @media ${props => props.theme.device.tablet} {
    margin: 0;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    background-position: 15px 12px;
    background-size: 20px 16px;
    background-position: 18px 15px;
  }
  @media ${props => props.theme.device.desktop}{
    width: 100%;
  }

`

export const FormFooterBtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 8px;
  padding: 11px 71px;
  font-size: 12px;
  background-color: ${props => props.theme.colors.accent} ;
  border-radius: 6px;
  transition: color 250ms linear;

  &:hover, &:focus {
    color: ${props => props.theme.colors.accentDark}
  }

  @media ${props => props.theme.device.tablet} {
    margin-top: 0;
    margin: 0;
    margin-left: 12px;
    padding: 16px 50px;
    font-size: 16px;
  }

  @media ${props => props.theme.device.desktop} {
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
`