import { useRef, useState } from 'react';
import { Search } from 'styled-icons/bootstrap';
import useStateManager from '../../hooks/useStateManager';
import { Button, Container, Input, Wrapper } from './styles';

export const SearchBar: React.FC = () => {
  const { productFilter, setProductFilter } = useStateManager();
  const [tempText, setTempText] = useState('');

  function changeValue() {
    setProductFilter({ ...productFilter, search: String(tempText) });
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      changeValue();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Button onClick={changeValue}>
          <Search size={22} />
        </Button>
        <Input
          type="search"
          onKeyPress={handleKeyPress}
          placeholder="Procurar produto pelo código"
          onChange={(e) => setTempText(e.target.value)}
          onBlur={changeValue}
        />
      </Wrapper>
    </Container>
  );
};
