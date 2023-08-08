import {
  Search,
  SearchBtn,
  SearchInput,
} from 'components/MovieSearch/MovieSearch.styled';
import { useState } from 'react';

export const MovieSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeSearch = ev => {
    setQuery(ev.target.value);
  };
  const onSubmitForm = ev => {
    console.log(query);
    ev.preventDefault();
    onSubmit(query);
  };
  return (
    <Search onSubmit={onSubmitForm}>
      <SearchInput type="text" onChange={onChangeSearch} />
      <SearchBtn type="submit">Search</SearchBtn>
    </Search>
  );
};
