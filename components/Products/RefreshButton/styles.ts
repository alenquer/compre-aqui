import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  color: white;
  align-items: center;
  padding: 0 1rem;
  margin-top: 1rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.purple_light};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
