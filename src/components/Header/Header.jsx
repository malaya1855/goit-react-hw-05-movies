import { Outlet } from 'react-router-dom';
import { Navigation, HeaderLink } from './Header.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Header = () => {
  return (
    <>
      <Navigation>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </Navigation>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
