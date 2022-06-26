import { useRouter } from 'next/router';
import { useState } from 'react';
import moment from 'moment';
import { api } from '../../config/api';
import {
  AlphaNumWithoutSpace,
  AlphaNumWithSpace,
  convertCurrency,
  limitCase,
  sleep,
  validURL,
} from '../../utils';
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
    window.alert('O seu produto está sendo atualizado..');

    const request = await api.put(`/api/products/${data.id}`, {
      ...state,
      author: user,
      updatedAt: new Date().toISOString(),
    });

    if (request.status !== 200) {
      window.alert('Algo deu errado, tente novamente!');
      return router.reload();
    }

    setTimeout(router.reload, 5000);
  }

  async function removeData(e: any) {
    e.preventDefault();

    setLoading(true);

    const request = await api.delete(`/api/products/${data.id}`);

    if (request.status !== 200) {
      window.alert('Algo deu errado, tente novamente!');
      return router.reload();
    }

    setTimeout(async () => {
      await router.push('/');
    }, 5000);
  }

  async function newData() {
    window.alert('O seu produto está sendo cadastrado..');

    const request = await api.post(`/api/products`, {
      ...state,
      author: user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    if (request.status !== 201) {
      window.alert('Algo deu errado, tente novamente!');
      return router.reload();
    }

    setTimeout(async () => {
      await router.push('/');
    }, 5000);
  }

  async function handleForm(e: any) {
    e.preventDefault();

    setLoading(true);

    const { avatar, name, sku } = state;

    let tempErrors = [];

    if (!user) {
      return window.alert('É necessário estar logado para continuar.');
    }

    if (!name || !avatar || !sku) {
      return window.alert('Por favor, preencha os campos obrigatórios.');
    }

    try {
      const isValidAvatar = validURL(avatar);
      const isValidSku = await checkSku(state.sku);

      if (!isValidAvatar) {
        tempErrors.push('avatar');
      }

      if (!isValidSku) {
        tempErrors.push('sku');
      }

      setError(tempErrors);

      if (!tempErrors.length) {
        if (method === 'edit') {
          await updateData();
        }

        if (method === 'create') {
          await newData();
        }
      }
    } catch (e) {
      setLoading(false);
      window.alert('Algo deu errado, tente novamente!');
    }
  }

  function hasError(val: string) {
    return error.includes(val);
  }

  function handleName() {
    switch (method) {
      case 'edit':
        return { title: 'Editar produto', button: 'Atualizar' };
      case 'create':
        return { title: 'Criar produto', button: 'Cadastrar' };
      default:
        return { title: 'Produto', button: 'Concluir' };
    }
  }

  function convertPriceValue() {
    return convertCurrency('period', state.price ?? 0, 'R$');
  }

  return (
    <Container>
      <Title>{handleName().title}</Title>
      <Wrapper>
        <Input
          error={hasError('name')}
          value={state.name}
          placeholder="Nome do produto"
          onChange={(e) =>
            setState({ ...state, name: AlphaNumWithSpace(e.target.value) })
          }
        />
        <Input
          error={hasError('sku')}
          value={state.sku}
          placeholder="Código do produto"
          onChange={(e) =>
            setState({ ...state, sku: AlphaNumWithoutSpace(e.target.value) })
          }
        />
        <Input
          error={hasError('price')}
          value={convertPriceValue()}
          placeholder="Valor do produto"
          onChange={(e) =>
            setState({
              ...state,
              price: Number(e.target.value.replace(/\D/g, '')),
            })
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
        status={loading ? 'loading' : ''}
        onClick={handleForm}
      >
        {handleName().button}
      </Button>
      {method === 'edit' && (
        <Button
          disabled={loading}
          status={loading ? 'loading' : ''}
          onClick={removeData}
          style={{ background: 'red' }}
        >
          Apagar
        </Button>
      )}
      {state.author && (
        <EditAuthor>
          {`Editado por `}
          <EditAuthor active>{limitCase(data.author, 15)}</EditAuthor>
        </EditAuthor>
      )}
      {state.createdAt && (
        <EditAuthor>
          {`Criado em `}
          <EditAuthor active>
            {moment(state.createdAt).local(true).format('LLL')}
          </EditAuthor>
        </EditAuthor>
      )}
      {state.updatedAt && (
        <EditAuthor>
          {`Atualizado em `}
          <EditAuthor active>
            {moment(state.updatedAt).local(true).format('LLL')}
          </EditAuthor>
        </EditAuthor>
      )}
    </Container>
  );
};
