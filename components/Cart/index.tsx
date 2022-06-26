import { Cart4 } from 'styled-icons/bootstrap';
import useStateManager from '../../hooks/useStateManager';
import { Container, Wrapper, Title } from './styles';

export const Cart: React.FC = () => {
  const { productFilter, setProductFilter } = useStateManager();

  function changeFilter() {
    setProductFilter({ ...productFilter, id: 'cart' });
  }

  return (
    <Container>
      <Wrapper onClick={changeFilter}>
        <Cart4 size={22} color="white" />
        <Title>Carrinho</Title>
      </Wrapper>
    </Container>
  );
};
