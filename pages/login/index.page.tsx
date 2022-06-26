import Head from 'next/head';
import Image from 'next/image';
import { LoginForm } from '../../components/LoginForm';
import { Container, ImageContent, Wrapper } from './styles';

export default function Login() {
  return (
    <>
      <Head>
        <title>Autenticação</title>
        <meta name="description" content="Os melhores produtos orgânicos" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <Wrapper color="#3B30B2">
          <ImageContent>
            <Image
              src={`/welcome.svg`}
              width="100%"
              height="100%"
              layout="responsive"
              quality={80}
              priority
            />
          </ImageContent>
        </Wrapper>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </Container>
    </>
  );
}
