import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Main } from '../components/Main';

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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`
  );

  const items = await response.json();

  return {
    props: { items },
    revalidate: 1,
  };
};
