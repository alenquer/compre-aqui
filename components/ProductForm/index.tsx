import { useRouter } from 'next/router';
import { useState } from 'react';
import { api } from '../../config/api';
import { isImage } from '../../utils';
import useStateManager from '../../hooks/useStateManager';
import { Button, Container, EditAuthor, Input, Title, Wrapper } from './styles';

interface IProps {
  data: IProductItemProps;
}

export const ProductForm: React.FC<IProps> = ({ data }) => {
  const router = useRouter();
  const { signUp, user } = useStateManager();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(['']);

  const [state, setState] = useState(data);

  async function checkSku(id: any) {
    try {
      const response = await api.get('/api/products/' + id);
      return response.status === 500;
    } catch (e) {
      return true;
    }
  }

  async function newData() {
    const request = await api.post('/api/products/', state);

    if (request.status === 201) {
      window.alert('Os dados foram gerados com sucesso!');
      router.back();
    } else {
      window.alert('Algo deu erro, verifique os dados.');
    }
  }

  async function handleForm() {
    const { avatar, name, sku } = state;

    let tempErrors = [];

    if (!name || !avatar || !sku || sku === 'create') {
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
      setLoading(false);

      if (!tempErrors.length) {
        await newData();
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <Title>Produto</Title>
      <Wrapper>
        <Input
          value={state.name}
          placeholder="Nome do produto"
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <Input
          error={error.includes('sku')}
          value={state.sku}
          placeholder="Código do produto"
          onChange={(e) => setState({ ...state, sku: e.target.value })}
        />
        <Input
          error={error.includes('Preço')}
          value={state.price > 0 ? state.price : ''}
          placeholder="Valor do produto"
          onChange={(e) =>
            setState({ ...state, price: Number(e.target.value) })
          }
        />
        <Input
          error={error.includes('avatar')}
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
        Atualizar
      </Button>
      {state.author && (
        <EditAuthor>
          Editado por <EditAuthor active>{data.author}</EditAuthor>
        </EditAuthor>
      )}
    </Container>
  );
};
