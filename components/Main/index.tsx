import { Filter } from '../Filter';
import { Header } from '../Header';
import { ProductList } from '../Products';
import { SearchBar } from '../SearchBar';
import { AsideContent, Container, Wrapper } from './styles';

const data = [
  {
    id: String(Math.random()),
    name: 'Teste',
    value: 55,
    author: 'Lorena Vimercati',
    url: 'https://i.imgur.com/esNeD8r.png',
  },
  {
    id: String(Math.random()),
    name: 'Teste',
    value: 55,
    author: 'Lorena Vimercati',
    url: 'https://i.imgur.com/esNeD8r.png',
  },
  {
    id: String(Math.random()),
    name: 'Teste',
    value: 55,
    author: 'Lorena Vimercati',
    url: 'https://i.imgur.com/esNeD8r.png',
  },
  {
    id: String(Math.random()),
    name: 'Teste',
    value: 55,
    author: 'Lorena Vimercati',
    url: 'https://i.imgur.com/esNeD8r.png',
  },
];

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <SearchBar />
        <AsideContent>
          <Filter onChangeValue={(e) => console.log(e)} />
          <ProductList items={data} />
        </AsideContent>
      </Wrapper>
    </Container>
  );
};
