import { Outlet } from 'react-router-dom';
import { Navigation, HeaderLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <Navigation>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </Navigation>
      <Outlet />
    </>
  );
};
