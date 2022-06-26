import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const EditAuthor = styled.span<{ active?: boolean }>`
  color: ${({ active, theme }) => (active ? theme.colors.purple_dark : 'grey')};
  font-size: 0.7rem;
  line-height: 2rem;
  margin-top: 0.5rem;
`;

export const Input = styled.input<{ error?: boolean }>`
  outline: none;
  border: 1px solid ${({ error }) => (error ? 'red' : '#eee')};
  background-color: #eee;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.purple_light};
  outline: none;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  color: white;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
