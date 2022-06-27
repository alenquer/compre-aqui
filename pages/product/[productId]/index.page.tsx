import Image from 'next/image';
import Head from 'next/head';
import useSWR from 'swr';
import { ProductForm } from '../../../components/ProductForm';
import { Container, ImageContent, Wrapper } from './styles';
import { useRouter } from 'next/router';
import { LoadingScreen } from '../../../components/Loading';

export default function Product() {
  const router = useRouter();

  let pathUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/${router.query.productId}`;

  const { data, error } = useSWR(pathUrl, async () => {
    const response = await fetch(pathUrl);

    return await response.json();
  });

  if (error) {
    router.back();
  }

  if (!data || error) {
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
          <ProductForm data={data} method="edit" />
        </Wrapper>
      </Container>
    </>
  );
}
