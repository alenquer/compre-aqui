import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    margin-left: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom-width: 1px;
  border-color: #eee;
  border-style: solid;
`;

export const PageControls = styled.div`
  display: flex;
  align-items: center;
`;

export const PageLabel = styled.span`
  color: #333;
  margin: 0 0.7rem;
`;

export const Title = styled.span`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

export const Content = styled.ul`
  display: grid;
  margin: 1rem 0;
  list-style: none;
  grid-template-columns: 1fr;
  column-gap: 25px;

  @media screen and (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ButtonBar = styled.div`
  display: flex;
  align-items: center;

  button:not(:last-child) {
    margin-right: 15px;
  }
`;
