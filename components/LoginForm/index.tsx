import { ChevronRightSquare } from '@styled-icons/boxicons-regular';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useStateManager from '../../hooks/useStateManager';
import { validAlphaNum } from '../../utils';
import { Button, Container, Input, Title, Wrapper } from './styles';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { signUp } = useStateManager();
  const [userValue, setUserValue] = useState('');

  function handleLogin() {
    if (!userValue) {
      return window.alert('Por favor, preencha todos os campos.');
    }

    signUp(userValue);
    router.push('/');
  }

  return (
    <Container>
      <Title>Deseja continuar?</Title>
      <Wrapper>
        <Input
          type="text"
          placeholder="Informe o seu nome"
          value={userValue}
          onChange={(e) => setUserValue(validAlphaNum(e.target.value))}
        />
        <Button onClick={handleLogin}>
          <ChevronRightSquare size={36} />
        </Button>
      </Wrapper>
    </Container>
  );
};
