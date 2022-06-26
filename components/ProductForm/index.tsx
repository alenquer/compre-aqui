import { useRouter } from 'next/router';
import { useState } from 'react';
import { api } from '../../config/api';
import { isImage } from '../../utils';
import useStateManager from '../../hooks/useStateManager';
import { Button, Container, EditAuthor, Input, Title, Wrapper } from './styles';

interface IProps {
  data: IProductItemProps;
  method: 'edit' | 'create';
}

export const ProductForm: React.FC<IProps> = ({ data, method }) => {
  const router = useRouter();
  const { user } = useStateManager();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(['']);

  const [state, setState] = useState(data);

  async function checkSku(val: string) {
    if (method === 'edit') {
      return true;
    }

    try {
      let skus = [];

      const response = await api.get('/api/products/');

      const data = response.data;

      for (let item of data) {
        if (item.sku === val) {
          skus.push(item.sku);
        }
      }

      return skus.length === 0;
    } catch (e) {
      console.log(e);
    }
  }

  async function updateData() {
    const request = await api.put(`/api/products/${data.id}`, {
      ...state,
      author: user,
      updatedAt: new Date().toISOString(),
    });

    if (request.status === 200) {
      router.reload();
    } else {
      window.alert('Algo deu errado, tente novamente!');
    }
  }

  async function removeData(e: any) {
    e.preventDefault();

    const request = await api.delete(`/api/products/${data.id}`);

    if (request.status === 200) {
      router.push('/');
    } else {
      window.alert('Algo deu errado, tente novamente!');
    }
  }

  async function newData() {
    const request = await api.post(`/api/products`, {
      ...state,
      author: user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    if (request.status === 201) {
      router.push(`/product/${request.data.id}`);
    } else {
      window.alert('Algo deu errado, tente novamente!');
    }
  }

  async function handleForm(e: any) {
    e.preventDefault();

    const { avatar, name, sku } = state;

    let tempErrors = [];

    if (!user) {
      return window.alert('É necessário estar logado para continuar.');
    }

    if (!name || !avatar || !sku) {
      return window.alert('Por favor, preencha os campos obrigatórios.');
    }

    try {
      setLoading(true);

      const isValidAvatar = isImage(avatar);
      const isValidSku = await checkSku(state.sku);

      if (!isValidAvatar) {
        tempErrors.push('avatar');
      }

      if (!isValidSku) {
        tempErrors.push('sku');
      }

      setError(tempErrors);

      if (!tempErrors.length) {
        switch (method) {
          case 'edit':
            return await updateData();
          case 'create':
            return await newData();
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function hasError(val: string) {
    return error.includes(val);
  }

  function handleName() {
    switch (method) {
      case 'edit':
        return 'Editar produto';
      case 'create':
        return 'Criar produto';
      default:
        return 'Produto';
    }
  }

  return (
    <Container>
      <Title>{handleName()}</Title>
      <Wrapper>
        <Input
          error={hasError('name')}
          value={state.name}
          placeholder="Nome do produto"
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <Input
          error={hasError('sku')}
          value={state.sku}
          placeholder="Código do produto"
          onChange={(e) => setState({ ...state, sku: e.target.value })}
        />
        <Input
          error={hasError('price')}
          value={state.price > 0 ? state.price : ''}
          placeholder="Valor do produto"
          type="number"
          onChange={(e) =>
            setState({ ...state, price: Number(e.target.value) })
          }
        />
        <Input
          error={hasError('avatar')}
          value={state.avatar}
          placeholder="Endereço de imagem"
          onChange={(e) => setState({ ...state, avatar: e.target.value })}
        />
      </Wrapper>
      <Button
        disabled={loading}
        onClick={handleForm}
        style={{ opacity: loading ? 0.5 : 1 }}
      >
        {method === 'edit' ? 'Atualizar' : 'Cadastrar'}
      </Button>
      {method === 'edit' && (
        <Button
          disabled={loading}
          onClick={removeData}
          style={{ opacity: loading ? 0.5 : 1, background: 'red' }}
        >
          Apagar
        </Button>
      )}
      {state.author && (
        <EditAuthor>
          Editado por <EditAuthor active>{data.author}</EditAuthor>
        </EditAuthor>
      )}
    </Container>
  );
};
