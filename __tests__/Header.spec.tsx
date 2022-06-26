import { render } from '@testing-library/react';
import { Header } from '../components/Header';
import { RenderWithProvider } from '../utils/RenderWithProvider';

test('Get filter items', () => {
  const { getByText } = render(
    <RenderWithProvider>
      <Header />
    </RenderWithProvider>
  );

  //Cart label
  expect(getByText('Carrinho')).toBeTruthy();

  //Total cart items
  expect(getByText('0')).toBeTruthy();
});
