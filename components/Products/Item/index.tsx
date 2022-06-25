import Image from 'next/image';
import { Container, EditAuthor, Price, Title, Wrapper } from './styles';

interface IProps {
  item: IProductItemProps;
}

export const ProductItem: React.FC<IProps> = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image
          src={`/api/imageProxy?url=${encodeURIComponent(item.url)}`}
          width="100%"
          height="100%"
          objectFit="cover"
          quality={80}
          style={{ borderRadius: 999 }}
        />
        <Title>{item.name}</Title>
        <Price>R$ {Number(item.value).toFixed(2)}</Price>
      </Wrapper>
      <EditAuthor>
        Editado por <EditAuthor active>{item.author}</EditAuthor>
      </EditAuthor>
    </Container>
  );
};
