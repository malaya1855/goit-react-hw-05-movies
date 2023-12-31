import styled from '@emotion/styled';

export const Search = styled.form`
  margin-left: 20px;
  margin-top: 20px;
  width: 500px;
  height: 30px;
  display: flex;
`;

export const SearchInput = styled.input`
  background: #fff;
  width: 80%;
  color: #777675;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
`;

export const SearchBtn = styled.button`
  width: 20%;
  color: #fff;
  background: #be3455;
  border: none;
  right: 0;
  border-radius: 5px;
  :hover,
  :focus {
    font-weight: bold;
  }
`;
