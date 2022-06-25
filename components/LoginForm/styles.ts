import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  outline: none;
  background-color: #eee;
  padding: 1rem;
  border-radius: 5px;
  margin-right: 1rem;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.purple_light};

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.purple_dark};
  }
`;
