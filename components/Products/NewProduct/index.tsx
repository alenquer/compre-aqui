import Link from 'next/link';
import { Add } from 'styled-icons/material';
import { Container, Label } from './styles';

export const NewProduct: React.FC = () => {
  return (
    <Link href="/create">
      <Container>
        <Add size={24} />
        <Label>Adicionar produto</Label>
      </Container>
    </Link>
  );
};
