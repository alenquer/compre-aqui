import Link from 'next/link';
import { ManageAccounts } from 'styled-icons/material';
import { Cart } from '../Cart';
import {
  ActionButton,
  Container,
  Shortcut,
  Shortcuts,
  Title,
  Wrapper,
} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CompreAqui</Title>
        <Shortcuts>
          <Link href="/login">
            <ActionButton>
              <ManageAccounts size={22} />
            </ActionButton>
          </Link>
          <Link href="/login">
            <Shortcut>Minha conta</Shortcut>
          </Link>
          <Cart total={0} />
        </Shortcuts>
      </Wrapper>
    </Container>
  );
};
