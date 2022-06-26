import { useRouter } from 'next/router';
import { ManageAccounts, Logout } from 'styled-icons/material';
import { Cart } from '../Cart';
import useStateManager from '../../hooks/useStateManager';

import {
  ActionButton,
  Container,
  Shortcut,
  Shortcuts,
  Title,
  Wrapper,
} from './styles';

export const Header: React.FC = () => {
  const router = useRouter();
  const { user, signOut, cartItems } = useStateManager();

  const handleUser = () => {
    if (user) {
      signOut();
    }

    router.push('/login');
  };

  return (
    <Container>
      <Wrapper>
        <Title>CompreAqui</Title>
        <Shortcuts>
          <ActionButton onClick={handleUser}>
            {user ? <Logout size={22} /> : <ManageAccounts size={22} />}
          </ActionButton>
          <Shortcut onClick={handleUser}>{user ? 'Sair' : 'Entrar'}</Shortcut>
          <Cart total={cartItems.length} />
        </Shortcuts>
      </Wrapper>
    </Container>
  );
};
