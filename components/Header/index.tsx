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
          <ActionButton>
            <ManageAccounts size={22} />
          </ActionButton>
          <Shortcut>Minha conta</Shortcut>
          <Cart total={0} />
        </Shortcuts>
      </Wrapper>
    </Container>
  );
};
