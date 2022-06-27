import {
  ChevronLeftSquare,
  ChevronRightSquare,
} from '@styled-icons/boxicons-regular';
import { useEffect, useState } from 'react';
import { currentPage } from '../../utils';
import { NewProduct } from './NewProduct';
import { ProductItem } from './Item';

import {
  Button,
  ButtonBar,
  Container,
  Content,
  EmptyLabel,
  Header,
  PageControls,
  PageLabel,
  Title,
  Wrapper,
} from './styles';
import useStateManager from '../../hooks/useStateManager';
import { RefreshButton } from './RefreshButton';

interface IProps {
  data: IProductItemProps[];
}

export const ProductList: React.FC<IProps> = ({ data }) => {
  const { cartItems, productFilter } = useStateManager();
  const [page, setPage] = useState(1);
  const perPage = 25;

  function searchProducts() {
    let isCartFilter = productFilter.id === 'cart';
    let list = [];

    for (let item of data) {
      const checkCartItem = () => {
        if (cartItems.includes(item.sku)) {
          list.push(item);
        }
      };

      if (item.sku.includes(productFilter.search)) {
        if (isCartFilter) {
          checkCartItem();
        } else {
          list.push(item);
        }
      }
    }

    return list;
  }

  let _currentPage: IProductItemProps[] = currentPage({
    data: searchProducts(),
    page,
    perPage,
  });

  const totalPages = Math.ceil((searchProducts().length as number) / perPage);
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

  function pageControl() {
    if (page > totalPages) {
      setPage(1);
    }
  }

  useEffect(() => {
    pageControl();
  }, [productFilter]);

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>{productFilter.name}</Title>
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
        <ButtonBar>
          <NewProduct />
          <RefreshButton style={{ marginLeft: 15 }} />
        </ButtonBar>
        {!searchProducts().length ? (
          <EmptyLabel>Nenhum produto encontrado.</EmptyLabel>
        ) : (
          <Content>
            {_currentPage.map((item) => {
              return <ProductItem key={item.id} item={item} />;
            })}
          </Content>
        )}
      </Wrapper>
    </Container>
  );
};
