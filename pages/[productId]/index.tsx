import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../config/api';
import { ProductForm } from '../../components/ProductForm';
import { Container, ImageContent, Wrapper } from './styles';
import { useRouter } from 'next/router';
import { LoadingScreen } from '../../components/Loading';

interface IProps {
  item: IProductItemProps;
}

export default function Product({ item }: IProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <LoadingScreen />;
  }

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
        <ProductForm data={item} />
      </Wrapper>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/products');

  const data: IProductItemProps[] = await response.data;

  const paths = data.map((props) => ({
    params: {
      productId: props.sku,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { productId } = params;

  const response = await api.get(`/products/${productId}`);

  const item: IProductItemProps = await response.data;

  return {
    props: {
      item,
    },
  };
};
