import { render } from '@testing-library/react';
import { ProductList } from '../components/Products';
import { RenderWithProvider } from '../components/RenderWithProvider';

const items = [
  {
    id: String(Math.random()),
    name: 'Maça',
    price: 55,
    sku: String(Math.random()),
    editAuthor: 'Marcia cristina',
    author: 'Lorena Vimercati',
    avatar: 'https://i.imgur.com/esNeD8r.png',
  },
  {
    id: String(Math.random()),
    name: 'Banana',
    price: 55,
    sku: String(Math.random()),
    editAuthor: 'Marcia cristina',
    author: 'Lorena Vimercati',
    avatar: 'https://i.imgur.com/esNeD8r.png',
  },
  {
    id: String(Math.random()),
    name: 'Uva',
    sku: String(Math.random()),
    price: 55,
    editAuthor: 'Marcia cristina',
    author: 'Lorena Vimercati',
    avatar: 'https://i.imgur.com/esNeD8r.png',
  },
  {
    id: String(Math.random()),
    name: 'Melancia',
    price: 55,
    sku: String(Math.random()),
    author: 'Lorena Vimercati',
    editAuthor: 'Marcia cristina',
    avatar: 'https://i.imgur.com/esNeD8r.png',
  },
];

test('Get a list of products', () => {
  const { getByText } = render(
    <RenderWithProvider>
      <ProductList data={items} />
    </RenderWithProvider>
  );

  expect(getByText('Uva')).toBeTruthy();
  expect(getByText('Banana')).toBeTruthy();
  expect(getByText('Maça')).toBeTruthy();
  expect(getByText('Melancia')).toBeTruthy();
});
