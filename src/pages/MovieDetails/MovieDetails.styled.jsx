import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieInfo = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const MovieImg = styled.img`
  width: 15%;
  margin-right: 20px;
`;

export const LinkGoBack = styled(Link)`
  display: block;
  margin: 20px;
  color: #000;
  :link,
  :visited {
    color: #000;
  }

  :hover,
  :focus {
    color: #be3455;
  }
`;

export const MovieAddInfo = styled.div`
  margin-left: 20px;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
`;

export const MovieAddInfoLink = styled(Link)`
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
