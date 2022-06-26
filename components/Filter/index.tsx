import { Fragment, useState } from 'react';
import { AllInbox } from 'styled-icons/material';
import { Cart4 } from 'styled-icons/bootstrap';
import {
  Container,
  Item,
  ItemLabel,
  Items,
  SeparatorItem,
  Title,
  Wrapper,
} from './styles';
import useStateManager from '../../hooks/useStateManager';

const Filters = [
  {
    id: 'all',
    name: 'Todos os produtos',
    icon: <AllInbox size={22} />,
  },
  {
    id: 'cart',
    name: 'Carrinho',
    icon: <Cart4 size={22} />,
  },
];

export const Filter: React.FC = () => {
  const { productFilter, setProductFilter } = useStateManager();

  return (
    <Container>
      <Wrapper>
        <Title>Filtros</Title>
        <Items>
          {Filters.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <Item
                  active={productFilter.id === item.id}
                  onClick={(e) => {
                    e.preventDefault();

                    setProductFilter({
                      ...productFilter,
                      id: item.id,
                      name: item.name,
                    });
                  }}
                >
                  {item.icon}
                  <ItemLabel>{item.name}</ItemLabel>
                </Item>
                {index !== Filters.length - 1 && <SeparatorItem />}
              </Fragment>
            );
          })}
        </Items>
      </Wrapper>
    </Container>
  );
};
