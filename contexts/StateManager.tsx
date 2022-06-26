import React, { createContext, useEffect, useState } from 'react';

interface StateContextData {
  user: string;
  cartItems: string[];
  productFilter: IFilterProps;
  setProductFilter: (e: IFilterProps) => void;
  signUp(user: string): void;
  signOut(): void;
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const StateContext = createContext<StateContextData>(
  {} as StateContextData
);

interface IProps {
  children?: React.ReactNode;
}

const initialFilterConfig = {
  id: 'all',
  name: 'Todos os produtos',
  search: '',
};

export const StateProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState('');
  const [productFilter, setProductFilter] =
    useState<IFilterProps>(initialFilterConfig);
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const hasUser = window.localStorage.getItem('@user');
    const hasCartItems = window.localStorage.getItem('@cart');

    if (hasUser) {
      signUp(hasUser);
    }

    if (hasCartItems) {
      setCartItems(JSON.parse(hasCartItems));
    }
  }, []);

  function signUp(userValue: string) {
    try {
      window.localStorage.setItem('@user', userValue);
      setUser(userValue);
    } catch (e) {
      window.alert('Algo deu errado, tente novamente!');
    }
  }

  async function signOut() {
    try {
      window.localStorage.removeItem('@user');
      setUser('');
    } catch (e) {
      window.alert('Algo deu errado, tente novamente!');
    }
  }

  return (
    <StateContext.Provider
      value={{
        user,
        cartItems,
        productFilter,
        setProductFilter,
        setCartItems,
        signUp,
        signOut,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
