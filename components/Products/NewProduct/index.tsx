import Link from 'next/link';
import { Add } from 'styled-icons/material';
import useStateManager from '../../../hooks/useStateManager';
import { Container, Label } from './styles';

export const NewProduct: React.FC = () => {
  const { productFilter } = useStateManager();

  return productFilter.id === 'all' ? (
    <Link href="/create">
      <Container>
        <Add size={24} />
        <Label>Adicionar produto</Label>
      </Container>
    </Link>
  ) : null;
};
