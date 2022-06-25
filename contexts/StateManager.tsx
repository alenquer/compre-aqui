import React, { createContext, useEffect, useState } from 'react';

interface StateContextData {
  user: string;
  signUp(user: string): void;
  signOut(): void;
}

export const StateContext = createContext<StateContextData>(
  {} as StateContextData
);

interface IProps {
  children?: React.ReactNode;
}

export const StateProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const hasUser = window.localStorage.getItem('@user');

    if (hasUser) {
      signUp(hasUser);
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
        signUp,
        signOut,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
