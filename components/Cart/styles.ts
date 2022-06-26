import styled from 'styled-components';

interface IWrapper {
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 999px;
  overflow: hidden;
`;

export const Wrapper = styled.button<IWrapper>`
  display: flex;
  height: 2rem;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
  background-color: ${({ color, theme }) => color ?? theme.colors.purple_light};

  font-size: 0.9rem;

  @media screen and (max-width: 601px) {
    font-size: 0.6rem;
  }

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Title = styled.span`
  color: #fff;
  margin-left: 0.5rem;
`;
