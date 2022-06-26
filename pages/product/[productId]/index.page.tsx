import Image from 'next/image';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../../config/api';
import { ProductForm } from '../../../components/ProductForm';
import { Container, ImageContent, Wrapper } from './styles';
import { useRouter } from 'next/router';
import { LoadingScreen } from '../../../components/Loading';

interface IProps {
  items: IProductItemProps;
}

export default function Product({ items }: IProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

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
          <ProductForm data={items} method="edit" />
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { productId } = params;

  const response = await api.get(`/products/${productId}`);

  let items = await response.data;

  return {
    props: {
      items,
    },
  };
};
