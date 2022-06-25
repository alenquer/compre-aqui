import { Add } from 'styled-icons/material';
import { Container, Label } from './styles';

export const Bar: React.FC = () => {
  return (
    <Container>
      <Add size={24} />
      <Label>Adicionar produto</Label>
    </Container>
  );
};
