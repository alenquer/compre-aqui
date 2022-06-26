import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Main } from '../components/Main';
import { api } from '../config/api';

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>Compre Aqui - O seu catálogo de produtos orgânicos</title>
        <meta name="description" content="Os melhores produtos orgânicos" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main items={items} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/api/products');

  const items = await response.data;

  return {
    props: { items },
  };
};
