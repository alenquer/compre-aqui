import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1024px, 90%);
`;

export const Title = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Shortcuts = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin: 0 10px;
  }
`;

export const Shortcut = styled.li`
  cursor: pointer;
  font-size: 0.9rem;
  color: rgba(51, 51, 51, 0.6);

  :hover {
    opacity: 0.5;
  }
`;
