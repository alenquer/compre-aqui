import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Main } from '../components/Main';
import { LoadingScreen } from '../components/Loading';

export default function Home() {
  const router = useRouter();

  let pathUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;

  const { data, error } = useSWR(pathUrl, async () => {
    const response = await fetch(pathUrl);

    return await response.json();
  });

  if (error) {
    router.back();
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Compre Aqui - O seu catálogo de produtos orgânicos</title>
        <meta name="description" content="Os melhores produtos orgânicos" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main items={data ?? []} />
    </>
  );
}
