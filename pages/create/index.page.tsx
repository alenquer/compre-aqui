import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BackButton } from '../../components/BackButton';
import { ProductForm } from '../../components/ProductForm';
import { theme } from '../../config/theme';
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
        <Wrapper color={theme.colors.purple_dark}>
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
        <BackButton />
      </Container>
    </>
  );
}
