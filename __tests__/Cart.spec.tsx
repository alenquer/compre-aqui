import { render } from '@testing-library/react';
import { Cart } from '../components/Cart';
import { RenderWithProvider } from '../utils/RenderWithProvider';

test('Get total cart items', () => {
  const { getByText } = render(
    <RenderWithProvider>
      <Cart />
    </RenderWithProvider>
  );

  expect(getByText('Carrinho')).toBeTruthy();
});
