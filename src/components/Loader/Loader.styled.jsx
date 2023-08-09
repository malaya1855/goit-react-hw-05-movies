import styled from '@emotion/styled';

export const LoaderSpin = styled.span`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  color: #be3455;
  animation: fill 1s ease-in infinite alternate;
  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    left: 48px;
    top: 0;
    animation: fill 0.9s ease-in infinite alternate;
  }

  ::after {
    left: auto;
    right: 48px;
    animation-duration: 1.1s;
  }
`;
