import { Search } from 'styled-icons/bootstrap';
import { Container, Input, Wrapper } from './styles';

export const SearchBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Search size={22} />
        <Input placeholder="Procurar produto por SKU" />
      </Wrapper>
    </Container>
  );
};
