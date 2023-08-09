import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const SearchListItem = styled(Link)`
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
