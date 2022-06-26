## **:computer: Tecnologias**

#### **Front-End** ([React](reactjs.org) + [TypeScript](https://www.typescriptlang.org/))

- **[Next.js](https://nextjs.org/)**
- **HTML**
- **Styled-Components**

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Compre Aqui)](https://www.figma.com/file/q2iStTg2seUR5qPWLQOOaa/Compre-Aqui!?node-id=0%3A1)</kbd>**
- Ícones: **[Styled-icons](https://styled-icons.dev/)**

## **:wine_glass: COMO UTILIZAR**

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[nvm](https://github.com/nvm-sh/nvm)</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando neste <kbd>[link](https://yarnpkg.com/)</kbd>.

Após ter o **Node** instalado, instale as dependências do **React** instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **projeto**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ yarn
ou
$ npm install
```

Você precisará criar um arquivo na raíz do projeto chamado .env.local com a chave de requisição do seu Back End.

Dentro do arquivo coloque o URL de seu servidor, em ambiente de desenvolvimento é possível utilizar o Mock API :

```sh
NEXT_PUBLIC_API_URL=https://62b656bc42c6473c4b4230b6.mockapi.io/
```

Após ter instalado todas as dependências, você poderá gerar a build de desenvolvimento do projeto para o seu dispositivo com:

```sh
$ yarn dev
ou
$ npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.
