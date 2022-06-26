import Link from 'next/link';
import useStateManager from '../../../hooks/useStateManager';
import { limitCase } from '../../../utils';
import {
  Container,
  Image,
  EditAuthor,
  Price,
  Title,
  Wrapper,
  Button,
} from './styles';

interface IProps {
  item: IProductItemProps;
}

export const ProductItem: React.FC<IProps> = ({ item }) => {
  const { cartItems, setCartItems } = useStateManager();

  function handleCartItem(e: any) {
    e.preventDefault();

    let items = [...cartItems];

    const hasItem = cartItems.includes(item.sku);

    if (!hasItem) {
      items.push(item.sku);
    } else {
      items = items.filter((id) => id !== item.sku);
    }

    setCartItems(items);
    window.localStorage.setItem('@cart', JSON.stringify(items));
  }

  return (
    <Container>
      <Button onClick={handleCartItem} active={cartItems.includes(item.sku)}>
        Carrinho
      </Button>
      <Link href={`/product/${item.id}`}>
        <Wrapper>
          <Image src={item.avatar} />
          <Title>{limitCase(item.name, 15)}</Title>
          <Price>R$ {limitCase(Number(item.price).toFixed(2), 10)}</Price>
        </Wrapper>
      </Link>
      <EditAuthor style={{ marginLeft: 5 }}>
        Editado por <EditAuthor active>{item.author}</EditAuthor>
      </EditAuthor>
    </Container>
  );
};
