import { Filter } from '../Filter';
import { Header } from '../Header';
import { Container, Wrapper } from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Filter filterBy="all" />
      </Wrapper>
    </Container>
  );
};
