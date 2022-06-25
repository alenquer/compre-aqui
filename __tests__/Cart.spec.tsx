import { render } from '@testing-library/react';
import { Cart } from '../components/Cart';
import { RenderWithProvider } from '../components/RenderWithProvider';

test('Get total cart items', () => {
  const { getByText } = render(
    <RenderWithProvider>
      <Cart total={5} />
    </RenderWithProvider>
  );

  expect(getByText(5)).toBeTruthy();
});
