import { Cart4 } from 'styled-icons/bootstrap';
import { Container, Wrapper, Title, Counter } from './styles';

interface ICart {
  total: number;
}

export const Cart: React.FC<ICart> = ({ total }) => {
  return (
    <Container>
      <Wrapper>
        <Cart4 size={22} color="white" />
        <Title>Carrinho</Title>
      </Wrapper>
      <Wrapper color="#3B30B2">
        <Counter>{total}</Counter>
      </Wrapper>
    </Container>
  );
};
