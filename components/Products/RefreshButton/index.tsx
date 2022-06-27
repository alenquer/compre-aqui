import Link from 'next/link';
import { Refresh } from '@styled-icons/boxicons-regular';
import { Container } from './styles';
import React from 'react';

export const RefreshButton: React.FC<
  React.HTMLAttributes<HTMLButtonElement>
> = ({ ...rest }) => {
  return (
    <Link href="/">
      <Container {...rest}>
        <Refresh size={24} />
      </Container>
    </Link>
  );
};
