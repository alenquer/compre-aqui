import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.aside<{ color?: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => color ?? theme.colors.bg};
  height: 100vh;
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
