import { Filter } from '../Filter';
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { Container, Wrapper } from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <Wrapper>
        <Filter onChangeValue={(e) => console.log(e)} />
      </Wrapper>
    </Container>
  );
};
