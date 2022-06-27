import { useRouter } from 'next/router';
import { useState } from 'react';
import moment from 'moment';
import { api } from '../../config/api';
import {
  AlphaNumWithoutSpace,
  AlphaNumWithSpace,
  convertCurrency,
  limitCase,
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
  const [errors, setError] = useState(['']);

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

  async function checkForm() {
    let tempErrors = [];

    try {
      const isValidSku = await checkSku(state.sku);
      const isValidAvatar = validURL(state.avatar);

      if (!isValidAvatar) {
        tempErrors.push('avatar');
      }

      if (!isValidSku) {
        tempErrors.push('sku');
      }

      setError(tempErrors);

      return tempErrors.length === 0;
    } catch (e) {
      return false;
    }
  }

  async function updateData() {
    window.alert('O seu produto está sendo atualizado..');

    const newData = {
      ...state,
      editAuthor: user,
      updatedAt: new Date().toISOString(),
    };

    try {
      await api.put(`/api/products/${data.id}`, newData);
    } catch (e) {
      window.alert('Algo deu errado, tente novamente!');
    } finally {
      setLoading(false);
      setState(newData);
    }
  }

  async function removeData(e: any) {
    e.preventDefault();

    if (loading) {
      return window.alert('Por favor, aguarde um momento..');
    }

    try {
      setLoading(true);

      await api.delete(`/api/products/${data.id}`);

      await router.push('/');
    } catch (e) {
      window.alert('Algo deu errado, tente novamente!');
      setLoading(false);
    }
  }

  async function newData() {
    const newData = {
      ...state,
      author: user,
      editAuthor: user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      setLoading(true);

      const response = await api.post(`/api/products`, newData);

      await router.push(`/product/${response.data.id}`);
    } catch (e) {
      window.alert('Algo deu errado, tente novamente!');
      setLoading(false);
    }
  }

  function hasError(val: string) {
    return errors.includes(val);
  }

  async function handleSubmit(e: any) {
    const { avatar, name, sku } = state;

    e.preventDefault();

    if (loading) {
      return window.alert('Por favor, aguarde um momento..');
    }

    if (!user) {
      window.alert('É necessário estar logado para continuar.');
      return router.push('/login');
    }

    if (!name || !avatar || !sku) {
      window.alert('Por favor, preencha os campos obrigatórios.');
      return false;
    }

    const check = await checkForm();

    if (!check) {
      return window.alert('Algo deu errado, tente novamente!');
    }

    switch (method) {
      case 'edit':
        return await updateData();
      case 'create':
        return await newData();
      default:
        return window.alert('Algo deu errado, tente novamente!');
    }
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
          type="url"
          placeholder="Endereço de imagem"
          onChange={(e) => setState({ ...state, avatar: e.target.value })}
        />
      </Wrapper>
      <Button
        disabled={loading}
        status={loading ? 'loading' : ''}
        onClick={handleSubmit}
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
          {`Criado por `}
          <EditAuthor active>{limitCase(state.author, 15)}</EditAuthor>
        </EditAuthor>
      )}
      {state.editAuthor && (
        <EditAuthor>
          {`Editado por `}
          <EditAuthor active>{limitCase(state.editAuthor, 15)}</EditAuthor>
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
