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
import { Fragment, useState } from 'react';

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

interface IFilter {
  onChangeValue?: (e: string) => void;
}

export const Filter: React.FC<IFilter> = ({ onChangeValue }) => {
  const [value, setValue] = useState(Filters[0].id);

  function changeValue(id: string) {
    setValue(id);
    onChangeValue(id);
  }

  return (
    <Container>
      <Wrapper>
        <Title>Filtros</Title>
        <Items>
          {Filters.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <Item
                  active={value === item.id}
                  onClick={() => changeValue(item.id)}
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
