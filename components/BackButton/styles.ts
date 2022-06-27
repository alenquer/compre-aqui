import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;

  @media screen and (max-width: 720px) {
    top: 1rem;
    left: 1rem;
  }

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
