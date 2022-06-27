import { useRouter } from 'next/router';
import { ChevronLeftSquare } from 'styled-icons/boxicons-regular';
import { Container } from './styles';

export const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <Container onClick={router.back}>
      <ChevronLeftSquare size={42} color="white" />
    </Container>
  );
};
