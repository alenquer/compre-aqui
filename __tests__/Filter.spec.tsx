import { render } from '@testing-library/react';
import { Filter } from '../components/Filter';
import { RenderWithProvider } from '../components/RenderWithProvider';

test('Get filter items', () => {
  const { getByText } = render(
    <RenderWithProvider>
      <Filter />
    </RenderWithProvider>
  );

  expect(getByText('Carrinho')).toBeTruthy();
});
