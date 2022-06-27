import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { LoginForm } from '../../components/LoginForm';
import { Container, ImageContent, Wrapper } from './styles';
import { LoadingScreen } from '../../components/Loading';
import { theme } from '../../config/theme';
import { ChevronLeftSquare } from '@styled-icons/boxicons-solid';
import Link from 'next/link';
import { BackButton } from '../../components/BackButton';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasUser = window.localStorage.getItem('@user');

    if (!hasUser) {
      setLoading(false);
    } else {
      router.back();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Autenticação</title>
        <meta name="description" content="Os melhores produtos orgânicos" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Container>
          <Wrapper color={theme.colors.purple_dark}>
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
          <BackButton />
        </Container>
      )}
    </>
  );
}
