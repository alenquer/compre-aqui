import {
  ChevronLeftSquare,
  ChevronRightSquare,
} from '@styled-icons/boxicons-regular';
import { Bar } from './Bar';
import { ProductItem } from './Item';

import {
  Button,
  Container,
  Content,
  Header,
  PageControls,
  PageLabel,
  Title,
  Wrapper,
} from './styles';

interface IProps {
  items: IProductItemProps[];
}

export const ProductList: React.FC<IProps> = ({ items }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Todos os produtos</Title>
          <PageControls>
            <Button>
              <ChevronLeftSquare size={26} color={'#ccc'} />
            </Button>
            <PageLabel>5</PageLabel>
            <Button>
              <ChevronRightSquare size={26} />
            </Button>
          </PageControls>
        </Header>
        <Bar />
        <Content>
          {items.map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
        </Content>
      </Wrapper>
    </Container>
  );
};
