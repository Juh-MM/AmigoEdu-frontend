# Amigo Edu - Frontend 🎓


Este repositório contém o código do **Frontend** do sistema **Amigo Edu**, desenvolvido para a empresa **ProlEduca**. O objetivo principal é fornecer uma experiência de usuário fluida que promova o acesso à educação e a geração de renda extra através de um sistema de indicações gamificado.

![Captura de tela.](src/assets/Captura%20de%20Tela%20(10).png)
> Link do projeto: 
---

## 📋 Índice

- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias e Ferramentas](#-tecnologias-e-ferramentas)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Integração com o Backend](#-integração-com-o-backend)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
- [Status do Projeto](#-status-do-projeto)
- [Equipe](#-equipe)

---

## 📌 Principais Funcionalidades 

O Frontend é responsável por toda a experiência visual e interativa, traduzindo a lógica robusta do Backend em um fluxo simples para o usuário.

### Usuários e Autenticação
- **Fluxo de Autenticação:** Interface para Login e Cadastro de novos usuários.
- **Painel de Usuário:** Visão personalizada de perfil, progresso de metas e saldo de recompensas.

###  Gamificação e Engajamento
- **Visualização de Progresso:** Exibição clara do nível atual, pontos e próximos desafios a serem atingidos.
- **Ranking:** Interface para visualização de classificações (Global, Mensal, Semanal) com componentes dinâmicos.

###  Indicações e Impacto Social
- **Geração de Link:** Criação e compartilhamento facilitado de links exclusivos de indicação.
- **Acompanhamento de Indicações:** Dashboard para monitorar o status (pendente, validado, concluído) das indicações em tempo real.
- **Mensuração de Impacto:** Exibição visual e imediata da renda extra gerada e do número de bolsas de estudo concedidas.

---

## 🛠️ Tecnologias e Ferramentas

O projeto foi construído com uma stack moderna e de alto desempenho, focada em desenvolvimento rápido e escalável.

| Categoria | Tecnologia | Uso |
| :--- | :--- | :--- |
| **Framework** | **React** | Biblioteca principal para construção da interface de usuário. |
| **Build Tool** | **Vite** | Empacotador e servidor de desenvolvimento para *hot module replacement* e *build* otimizado. |
| **Estilização** | **Tailwind CSS** | Framework *utility-first* para estilização rápida e responsiva. |
| **Rotas** | **React Router Dom** | Gerenciamento declarativo das rotas e navegação da aplicação. |
| **Comunicação** | **Axios** | Cliente HTTP robusto para requisições assíncronas à API. |
---

## 🏗️ Arquitetura do Projeto

O código segue um padrão **modular** e a separação de responsabilidades (SoC), utilizando a arquitetura de **Componentes/Contêineres** (implícita) e **Contexts** para gerenciamento de estado global.

```tree
/src
|-- /assets          # Arquivos estáticos (imagens, fontes, ícones).
|-- /components      # Componentes React reutilizáveis (*Atoms*, *Molecules*).
|-- /hooks           # Lógica customizada e reutilizável.
|-- /pages           # Componentes que representam as *Views* principais (roteadas).
|-- /services        # Camada para comunicação com a API Backend (funções de requisição).
|-- App.css          # Arquivo CSS essencial para importar os estilos do Tailwind.
|-- App.jsx          # Componente principal (aplicação dos *Providers* e Rotas).
`-- main.jsx         # Ponto de entrada (renderização do App).
````
---
## 🔗 Integração com o Backend
Este Frontend é o cliente da API RESTful desenvolvida em Node.js. Para rodar o sistema completo, é necessário ter o Backend em execução.

👉 [AmigoEdu-backend](https://github.com/limaamorim/Proleduca_Backend)

---
## 🛠️ Como Rodar o Projeto
Siga os passos abaixo para clonar o repositório e iniciar o projeto em modo de desenvolvimento:

```bash
# 1. Clone este repositório
git clone [https://github.com/Juh-MM/AmigoEdu-frontend](https://github.com/Juh-MM/AmigoEdu-frontend)

# 2. Acesse a pasta do projeto
cd AmigoEdu-frontend

# 3. Instale as dependências
npm install

# 4. Execute em ambiente de desenvolvimento
npm run dev

```
Crie seu usuário ou entre com:
```bash
email: 
senha:
``` 
---

## 📅 Status do Projeto
- [X] Em planejamento  
- [X] Em desenvolvimento  
- [ ] Em testes  
- [ ] Em produção  

---

## 👨‍💻 Equipe
- Frontend: Cauã Souza, Glewbber Júnior, Júlia Martins e Thymos Victor  
- Backend: Felipe Ricardo, Fernando e João Italo  
- UI/UX: Cauã Souza, Júlia Martins e Thymos Victor  
- Stakeholders: [ProlEduca](https://www.proleduca.com.br/)




