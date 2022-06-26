import { useState } from 'react';
import { Search } from 'styled-icons/bootstrap';
import useStateManager from '../../hooks/useStateManager';
import { Container, Input, Wrapper } from './styles';

export const SearchBar: React.FC = () => {
  const { productFilter, setProductFilter } = useStateManager();
  const [tempText, setTempText] = useState('');

  function changeValue() {
    setProductFilter({ ...productFilter, search: String(tempText) });
  }

  return (
    <Container>
      <Wrapper>
        <Search size={22} />
        <Input
          placeholder="Procurar produto por SKU"
          onChange={(e) => setTempText(e.target.value)}
          onBlur={changeValue}
        />
      </Wrapper>
    </Container>
  );
};
