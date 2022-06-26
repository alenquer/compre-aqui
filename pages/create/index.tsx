import Image from 'next/image';
import { ProductForm } from '../../components/ProductForm';
import useStateManager from '../../hooks/useStateManager';
import { Container, ImageContent, Wrapper } from './styles';

export default function Create() {
  const { user } = useStateManager();

  const initialData = {
    name: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: user,
    avatar: '',
    sku: '',
    price: 0,
  };

  return (
    <Container>
      <Wrapper color="#3B30B2">
        <ImageContent>
          <Image
            src={`/food.svg`}
            width="100%"
            height="100%"
            layout="responsive"
            quality={80}
            priority
          />
        </ImageContent>
      </Wrapper>
      <Wrapper>
        <ProductForm data={initialData} />
      </Wrapper>
    </Container>
  );
}
