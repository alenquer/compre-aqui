import styled from 'styled-components';

export const Container = styled.li`
  margin: 1rem 0;
`;

export const EditAuthor = styled.span<{ active?: boolean }>`
  color: ${({ active, theme }) => (active ? theme.colors.purple_dark : 'grey')};
  font-size: 0.7rem;
  line-height: 2rem;
`;

export const Wrapper = styled.div`
  height: 16rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  border: 1px;
  border-style: solid;
  border-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.span`
  color: #000;
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Price = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.purple_light};
`;
