import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  height: 400px;
  height: 400px;
  width: 16rem;
  background-color: white;
`;

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;

  color: #000;
`;

export const Items = styled.ul`
  margin: 1rem 0;
  list-style: none;
`;

export const Item = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ active, theme }) =>
    active ? theme.colors.purple_light : '#333'};

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const ItemLabel = styled.span`
  font-size: 0.8rem;
  margin: 0 0.5rem;
`;

export const SeparatorItem = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 0.5rem 0;
`;
