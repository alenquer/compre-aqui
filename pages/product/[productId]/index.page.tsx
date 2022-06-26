import Image from 'next/image';
import Head from 'next/head';
import useSWR from 'swr';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../../config/api';
import { ProductForm } from '../../../components/ProductForm';
import { Container, ImageContent, Wrapper } from './styles';
import { useRouter } from 'next/router';
import { LoadingScreen } from '../../../components/Loading';

interface IProps {
  item: IProductItemProps;
}

export default function Product(props: IProps) {
  const router = useRouter();

  let pathUrl = '/products/' + router.query.productId;

  const { data, error } = useSWR(pathUrl, async () => {
    const response = await api.get(pathUrl);

    return response.data;
  });

  if (error) {
    router.back();
  }

  if (router.isFallback || error) {
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
          <ProductForm data={data ?? props.item} method="edit" />
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

  let item = await response.data;

  return {
    revalidate: 1,
    props: {
      item,
    },
  };
};
