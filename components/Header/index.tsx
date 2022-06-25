import { Cart } from '../Cart';
import { Container, Shortcut, Shortcuts, Title, Wrapper } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CompreAqui</Title>
        <Shortcuts>
          <Shortcut>Minha conta</Shortcut>
          <Cart total={0} />
        </Shortcuts>
      </Wrapper>
    </Container>
  );
};
