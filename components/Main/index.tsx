import { Filter } from '../Filter';
import { Header } from '../Header';
import { ProductList } from '../Products';
import { SearchBar } from '../SearchBar';
import { AsideContent, Container, Wrapper } from './styles';

interface IProps {
  items: IProductItemProps[];
}

export const Main: React.FC<IProps> = ({ items }) => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <SearchBar />
        <AsideContent>
          <Filter onChangeValue={console.log} />
          <ProductList data={items} />
        </AsideContent>
      </Wrapper>
    </Container>
  );
};
