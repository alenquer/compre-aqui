import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../config/api';

interface IProps {
  item: IProductItemProps;
}

export default function Product({ item }: IProps) {
  return <h1>{item.name}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get(process.env.API_URL + '/products');

  const data: IProductItemProps[] = await response.data;

  const paths = data.map((props) => ({
    params: {
      productId: props.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { productId } = params;
  const response = await api.get(
    process.env.API_URL + `/products/${productId}`
  );

  const item: IProductItemProps = await response.data;

  return {
    props: {
      item,
    },
  };
};
