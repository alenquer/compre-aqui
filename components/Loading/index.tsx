import Head from 'next/head';
import Image from 'next/image';
import { Container, ImageContent } from './styles';

export const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Carregando..</title>
        <meta name="description" content="Carregando.." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ImageContent>
        <Image
          src={`/loading.svg`}
          width="100%"
          height="100%"
          layout="responsive"
          quality={80}
          priority
        />
      </ImageContent>
    </Container>
  );
};
