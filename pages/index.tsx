import Head from 'next/head';
import { Main } from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Compre Aqui - O seu catálogo de produtos orgânicos</title>
        <meta name="description" content="Os melhores planos de telefonia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
