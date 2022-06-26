import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ImageContent = styled.div`
  width: 16rem;
  height: 16rem;
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    width: 24rem;
    height: 24rem;
  }
`;
