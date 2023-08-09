import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    text-shadow: 0px 3px 5px #aaaaaa;
    color: #be3455;
  }

  :hover,
  :focus {
    color: #be3455;
  }
`;
