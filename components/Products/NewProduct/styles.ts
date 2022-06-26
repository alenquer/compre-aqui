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

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Label = styled.span`
  font-size: 1rem;
  margin: 0 0.4rem;
`;
