import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
    height: 40%;
    width: 250px;
    display: flex;
    text-decoration: none;

    @media (max-width: 1020px) {
      & {
        width: 20%;
      }
    }
  
    img {
        margin-left: 15%;
      }

      @media (max-width: 450px) {
        & {
          width: 20%;
        }
      }
`;

export const Title = styled.div`
  font-size: 17px;
  color: #030303;
  margin-left: 5%;
  font-weight: bold;
  display: flex;
  align-items: center;
  
`

export const Hour = styled.div`
  font-size: 12px;
  margin-bottom: 15%;
  margin-left: 10%;
  color: #606060;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3%;

  img {
    border-radius: 50%;
    width: 35px;
    margin-left: 2%;

    @media (max-width: 450px) {
      & {
        width: 20px;
      }
    }
  }

  @media (max-width: 450px) {
    & {
      width: 80%;
    }
  }

  @media (max-width: 1020px) {
    & {
      width: 70%;
      padding-right: 5%;
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 17px;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: #606060;

  @media (max-width: 450px) {
    & {
      font-size: 12px;
    }
  }
`;
