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

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  height: 2rem;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
  background-color: ${({ color, theme }) => color ?? theme.colors.purple_light};
`;

export const Title = styled.span`
  font-size: 0.8rem;
  color: #fff;
  margin-left: 0.5rem;
`;

export const Counter = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
`;
