import {
  ChevronLeftSquare,
  ChevronRightSquare,
} from '@styled-icons/boxicons-regular';
import { useState } from 'react';
import { currentPage } from '../../utils';
import { NewProduct } from './NewProduct';
import { ProductItem } from './Item';

import {
  Button,
  Container,
  Content,
  EmptyLabel,
  Header,
  PageControls,
  PageLabel,
  Title,
  Wrapper,
} from './styles';

interface IProps {
  data: IProductItemProps[];
}

export const ProductList: React.FC<IProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const perPage = 25;

  let _currentPage: IProductItemProps[] = currentPage({
    data,
    page,
    perPage,
  });

  const totalPages = Math.ceil((data.length as number) / perPage);
  const firstPage = page <= 1;
  const lastPage = page >= totalPages;

  function onPrevious() {
    if (!firstPage) {
      setPage(page - 1);
    }
  }

  function onNext() {
    if (!lastPage) {
      setPage(page + 1);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Todos os produtos</Title>
          <PageControls>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onPrevious();
              }}
            >
              <ChevronLeftSquare
                size={26}
                color={firstPage ? '#ccc' : '#333'}
              />
            </Button>
            <PageLabel>{page}</PageLabel>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onNext();
              }}
            >
              <ChevronRightSquare
                size={26}
                color={lastPage ? '#ccc' : '#333'}
              />
            </Button>
          </PageControls>
        </Header>
        <NewProduct />
        {!data.length ? (
          <EmptyLabel>Nenhum produto encontrado.</EmptyLabel>
        ) : (
          <Content>
            {_currentPage.map((item) => {
              return <ProductItem key={item.sku} item={item} />;
            })}
          </Content>
        )}
      </Wrapper>
    </Container>
  );
};
