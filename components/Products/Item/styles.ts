import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
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
  border-radius: 11px;

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

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 999px;
`;

export const Button = styled.button<{ active?: boolean }>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.purple_light : '#eee'};
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 11px;
  margin-bottom: 15px;
  color: ${({ active }) => (active ? 'white' : 'grey')};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
