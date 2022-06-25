import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: min(1024px, 95%);
  margin: auto;
`;

export const AsideContent = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
