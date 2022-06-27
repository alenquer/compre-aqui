import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1000px, 95%);
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple_dark};

  @media screen and (min-width: 600px) {
    font-size: 1.3rem;
  }

  :hover {
    cursor: pointer;
  }
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
  display: none;
  font-size: 0.9rem;
  color: rgba(51, 51, 51, 0.6);

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media screen and (min-width: 600px) {
    display: flex;
  }
`;

export const ActionButton = styled.div`
  margin: 0 10px;
  color: rgba(51, 51, 51, 0.6);

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
