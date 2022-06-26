import Head from 'next/head';
import Image from 'next/image';
import { ProductForm } from '../../components/ProductForm';
import { Container, ImageContent, Wrapper } from './styles';

export default function Create() {
  const initialData = {
    name: '',
    author: '',
    avatar: '',
    sku: '',
    price: 0,
  };

  return (
    <>
      <Head>
        <title>Cadastrar produto</title>
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
          <ProductForm data={initialData} method="create" />
        </Wrapper>
      </Container>
    </>
  );
}
