import { render } from '@testing-library/react';
import { Header } from '../components/Header';
import { RenderWithProvider } from '../components/RenderWithProvider';

test('Get filter items', () => {
  const { getByText } = render(
    <RenderWithProvider>
      <Header />
    </RenderWithProvider>
  );

  //Cart label
  expect(getByText('Carrinho')).toBeTruthy();
});
