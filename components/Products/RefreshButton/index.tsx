import React from 'react';
import { Refresh } from '@styled-icons/boxicons-regular';
import { Container } from './styles';
import { useRouter } from 'next/router';

export const RefreshButton: React.FC = () => {
  const router = useRouter();
  return (
    <Container onClick={router.reload}>
      <Refresh size={24} />
    </Container>
  );
};
