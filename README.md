# 📱 ToDo Mobile App - React Native + Expo

Este é um aplicativo mobile criado com **React Native** (utilizando Expo) que consome uma API RESTful feita com Node.js e Express. O app permite gerenciar tarefas (ToDo list) de forma simples e intuitiva.

---

## 🎯 Funcionalidades

- ✅ Listar tarefas
- ➕ Criar nova tarefa
- ❌ Deletar tarefa
- 🔄 Atualização automática após cada operação

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/)
- Backend: [API Node.js + Express](https://github.com/seu-usuario/api-todo)

---

## 📦 Instalação e Execução

### 1. Pré-requisitos

- Node.js instalado
- Expo CLI instalada (`npm install -g expo-cli`)
- App **Expo Go** no celular (Android/iOS)

### 2. Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-mobile.git
cd todo-mobile
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Edite a URL da API

No arquivo `App.js`, altere a constante `API_URL` para o IP da sua máquina com a API:

```js
const API_URL = 'http://192.168.0.X:3000/tarefas';
```

> ⚠️ `localhost` não funciona em dispositivos móveis

### 5. Inicie o app

```bash
expo start
```

Abra o app **Expo Go** no celular e escaneie o QR code.

---

## 🧪 Testando

- Crie uma tarefa com o botão “Adicionar”
- A tarefa será listada automaticamente
- Exclua com o botão “Excluir”

---

## 💡 Sugestões de Aprimoramento

- [ ] Adicionar campo de conclusão (checkbox)
- [ ] Editar tarefas
- [ ] Adicionar autenticação
- [ ] Persistir dados com SQLite ou Firebase

---

## 👨‍🏫 Projeto Educacional

Este projeto foi desenvolvido com fins didáticos no curso **Técnico em Desenvolvimento de Sistemas**, na disciplina **Elaborar Projetos de Sistemas**, com uso de **metodologias ativas**.

---

## 📄 Licença

MIT License
