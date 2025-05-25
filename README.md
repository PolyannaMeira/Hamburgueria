# 🍔  Aplicativo de Hamburgueria

Este é um projeto Full Stack desenvolvido como parte do aprendizado no curso **DevClub**, com o objetivo de construir uma aplicação completa para gerenciar pedidos de uma hamburgueria.

---

## 🚀 Sobre o Projeto

O **DevBurguer** é uma aplicação web que permite:
Cliente:
- Visualizar um cardápio de hambúrgueres e acompanhamentos
- Realizar pedidos online
Administrador:
- Gerenciar pedidos pelo painel do administrador

O foco está em aplicar boas práticas de desenvolvimento, integração com backend, consumo de APIs e organização de componentes em um ambiente real.

---

![Image](https://github.com/user-attachments/assets/59ca2e23-6a68-4443-8b15-f53773550152)

## 🛠️ Tecnologias Utilizadas

### Frontend:
- **React** (com React Hooks)
- **Axios** (para chamadas HTTP)
- **React Router DOM** (para rotas)
- **Styled-Components** ou **CSS Modules** (para estilização)
- **Context API** (para gerenciar o estado global)

### Backend:
- **Node.js** com **Express**
- **MongoDB** com **Mongoose**
- **Dotenv** (variáveis de ambiente)
- **Cors** (para permitir requisições)
- **Nodemon** (para desenvolvimento)

### Outros:
- **Git & GitHub** (versionamento)
- **Postman** (para testar a API)
- **Docker**

---

## 📚 Aprendizados

Durante o desenvolvimento do DevBurguer, foram aplicados e aprendidos os seguintes conceitos:

- Estruturação de um projeto Full Stack do zero
- Conexão entre frontend e backend usando APIs RESTful
- Criação de rotas privadas para administradores
- Uso de MongoDB com Mongoose para persistência de dados
- Organização de código e componentização no React
- Gerenciamento de estados globais com Context API
- Tratamento de erros no frontend e backend
- Segurança de informações sensíveis com arquivos `.env`

---


## 🖥️ Como rodar o projeto na sua máquina

### ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- Um gerenciador de pacotes (npm ou yarn)

### 🔧 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/PolyannaMeira/Hamburgueria.git
cd Hamburgueria

### 2. Instale as dependências do backend:

```bash
cd Devburger_API
npm install
```

### 3. Configure o arquivo `.env`:

Crie um arquivo `.env` dentro da pasta `Devburger_API` com as seguintes variáveis (exemplo):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/devburguer
JWT_SECRET=sua_chave_secreta
```

### 4. Inicie o backend:

```bash
npm run dev
```

### 5. Instale as dependências do frontend (se houver pasta separada):

```bash
cd ../[pasta-do-frontend]
npm install
```

### 6. Inicie o frontend:

```bash
npm start
```

---

## 📂 Estrutura do Projeto (resumida)

```
Hamburgueria/
│
├── Devburger_API/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env (adicionado ao .gitignore)
│   ├── server.js
│   └── ...
│
├── [pasta-do-frontend]/
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md
```

---

## 👩‍💻 Desenvolvido por

**Polyanna Meira**  
🔗 [GitHub](https://github.com/PolyannaMeira)
🔗 [Linkedin](https://www.linkedin.com/in/polyanna-meira/)


---

## ⚠️ Aviso

Este projeto é voltado para fins de estudo. Informações sensíveis (como chaves de API ou banco de dados) não devem ser versionadas — use arquivos `.env` com o `.gitignore` corretamente configurado.
