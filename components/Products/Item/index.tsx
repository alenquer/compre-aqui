import { Container, Image, EditAuthor, Price, Title, Wrapper } from './styles';

interface IProps {
  item: IProductItemProps;
}

export const ProductItem: React.FC<IProps> = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={item.avatar} />
        <Title>{item.name}</Title>
        <Price>R$ {Number(item.price).toFixed(2)}</Price>
      </Wrapper>
      <EditAuthor style={{ marginLeft: 5 }}>
        Editado por <EditAuthor active>{item.author}</EditAuthor>
      </EditAuthor>
    </Container>
  );
};
