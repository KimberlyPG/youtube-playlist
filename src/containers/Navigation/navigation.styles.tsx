import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // margin-bottom: 20px;
  // background: #717171;
`;

export const LogoContainer = styled(Link)`
  height: 40%;
  width: 25px;
  padding: 25px;
  display: flex;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3%;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  `;
