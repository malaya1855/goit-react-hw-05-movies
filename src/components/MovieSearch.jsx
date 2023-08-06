import { useState } from 'react';

export const MovieSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeSearch = ev => {
    console.log(ev.target.value);
    setQuery(ev.target.value);
  };
  const onSubmitForm = ev => {
    ev.preventDefault();
    console.log(query);
    onSubmit(query);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" onChange={onChangeSearch} />
      <button type="submit">Search</button>
    </form>
  );
};
