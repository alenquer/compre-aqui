import { ChevronRightSquare } from '@styled-icons/boxicons-regular';
import { Button, Container, Input, Title, Wrapper } from './styles';

export const LoginForm: React.FC = () => {
  return (
    <Container>
      <Title>Deseja continuar?</Title>
      <Wrapper>
        <Input placeholder="Informe o seu nome" />
        <Button>
          <ChevronRightSquare size={36} />
        </Button>
      </Wrapper>
    </Container>
  );
};
