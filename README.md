
# 🗂️ Gerenciador de Tarefas com Next.js + Firebase

Este é um projeto **didático** criado com **Next.js** (usando JSX), **Firebase (Auth + Firestore)** e estilização com **CSS tradicional**.

Os alunos aprenderão como construir um CRUD de tarefas com autenticação, protegendo rotas, interagindo com banco de dados em tempo real e publicando a aplicação na **Vercel**.

---

## 🚀 Funcionalidades

- ✅ Cadastro e login de usuários (Firebase Authentication)
- ✅ Rota protegida para acesso à área administrativa
- ✅ Cadastro, edição e exclusão de tarefas (Firestore)
- ✅ Armazenamento de sessão no `localStorage`
- ✅ Estilização com CSS puro
- ✅ Pronto para deploy na Vercel

---

## 🧑‍💻 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Firebase (v9 Modular)](https://firebase.google.com/)
- [React](https://reactjs.org/)
- HTML5, JSX e CSS3

---

## 🛠️ Instalação Local

### 1. Clone o projeto

```bash
git clone https://github.com/seuusuario/gerenciador-tarefas-nextjs.git
cd gerenciador-tarefas-nextjs
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Firebase

- Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
- Ative **Authentication → Email/Password**
- Ative **Firestore Database**
- Copie a **configuração do Firebase** para o arquivo:

```js
// lib/firebase.js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  ...
};
```

---

### 4. Inicie o projeto

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deploy na Vercel

### 1. Suba o projeto no GitHub

```bash
git init
git add .
git commit -m "Versão inicial"
git remote add origin https://github.com/seuusuario/nome-do-repo.git
git push -u origin main
```

### 2. Faça login na [Vercel](https://vercel.com)

- Clique em **"Add New Project"**
- Selecione seu repositório
- Aceite as configurações padrões
- Clique em **Deploy**

A Vercel irá gerar uma URL pública para seu projeto 🎉

---

## 📁 Estrutura do Projeto

```
/pages
  ├── index.jsx       # Login
  ├── register.jsx    # Cadastro
  ├── admin.jsx       # Área protegida
  └── _app.jsx        # Layout global

/components
  ├── Header.jsx
  ├── Footer.jsx
  └── AdminContent.jsx

/lib
  └── firebase.js     # Conexão com Firebase

/styles
  └── globals.css     # Estilos globais
```

---

## 👨‍🏫 Autor

Prof. Marcos Roberto de Moraes – [@maromo71](https://github.com/maromo71)

---

## 📚 Licença

Este projeto é didático e livre para uso em sala de aula ou estudos pessoais.
