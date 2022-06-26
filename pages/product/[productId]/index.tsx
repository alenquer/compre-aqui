import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../../config/api';
import { ProductForm } from '../../../components/ProductForm';
import { Container, ImageContent, Wrapper } from './styles';
import Head from 'next/head';

interface IProps {
  item: IProductItemProps;
}

export default function Product({ item }: IProps) {
  return (
    <>
      <Head>
        <title>Editar produto</title>
        <meta name="description" content="Os melhores produtos orgânicos" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
          <ProductForm data={item} method="edit" />
        </Wrapper>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/products');

  const data: IProductItemProps[] = await response.data;

  const paths = data.map((props) => ({
    params: {
      productId: props.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { productId } = params;

  const response = await api.get(`/products/${productId}`);

  const item = await response.data;

  return {
    props: {
      item,
    },
    revalidate: 20,
  };
};
