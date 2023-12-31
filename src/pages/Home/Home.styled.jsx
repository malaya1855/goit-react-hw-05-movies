import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeadTitle = styled.h1`
  padding-left: 20px;
`;

export const MoviesLink = styled(Link)`
  text-decoration: none;
  :link,
  :visited {
    color: #000;
  }

  :hover,
  :focus {
    color: #be3455;
  }
`;
