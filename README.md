# 🛒 RL Store - Interface de E-commerce

Este é um projeto frontend desenvolvido para simular a interface de um sistema de compras online. Ele permite visualizar produtos, buscar itens, adicioná-los a um carrinho virtual, gerenciar o carrinho e simular uma finalização de compra.

O projeto foi desenvolvido como uma atividade prática para criar uma experiência de usuário interativa e responsiva.

## ✨ Funcionalidades Implementadas

* [x] **Visualização de Produtos:** Exibição dos produtos em formato de grid na página inicial.
* [x] **Busca de Produtos:** Barra de pesquisa no cabeçalho que filtra os produtos na home em tempo real.
* [x] **Detalhes do Produto:** Página dedicada para mostrar informações detalhadas, imagem ampliada e produtos recomendados.
* [x] **Carrinho de Compras:**
    * Adição de produtos ao carrinho a partir da Home ou da página de Detalhes.
    * Visualização dos itens no carrinho.
    * Atualização de quantidade.
    * Remoção de itens.
    * Limpeza do carrinho.
    * Exibição do total.
* [x] **Simulação de Checkout:** Um fluxo simples que limpa o carrinho e exibe uma página de confirmação.
* [x] **Notificações:** Uso de "toasts" para feedback ao adicionar itens ao carrinho e finalizar a compra.
* [x] **Roteamento:** Navegação entre as páginas Home, Detalhes, Carrinho e Confirmação.
* [x] **Design Responsivo (Básico):** Adaptação do layout para diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca principal para construção da interface.
* **TypeScript:** Superset do JavaScript para tipagem estática.
* **Vite:** Ferramenta de build e servidor de desenvolvimento rápido.
* **TailwindCSS:** Framework CSS utility-first para estilização.
* **React Router DOM:** Para gerenciamento de rotas.
* **Context API:** Para gerenciamento de estado global (Carrinho e Busca).
* **Heroicons:** Para ícones SVG.
* **React Hot Toast:** Para notificações "toast".
* **pnpm:** Gerenciador de pacotes rápido e eficiente.

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão 18 ou superior é recomendada).
* [pnpm](https://pnpm.io/installation) (Você pode instalar globalmente com `npm install -g pnpm`).

## 🚀 Como Rodar a Aplicação

Siga os passos abaixo para configurar e rodar o projeto localmente:

1.  **Clone o Repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_AQUI>
    ```
    *(Substitua `<URL_DO_SEU_REPOSITORIO_AQUI>` pela URL real do seu projeto no GitHub)*

2.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```
    *(Substitua `nome-da-pasta-do-projeto` pelo nome da pasta criada pelo git clone)*

3.  **Instale as Dependências:**
    ```bash
    pnpm install
    ```

4.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    pnpm run dev
    ```

5.  **Acesse no Navegador:**
    Abra seu navegador e acesse `http://localhost:5173` (ou a porta que o Vite indicar no seu terminal).

## 📜 Scripts Disponíveis

* `pnpm run dev`: Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR).
* `pnpm run build`: Compila a aplicação para produção na pasta `dist`.
* `pnpm run preview`: Inicia um servidor local para visualizar a build de produção.
* `pnpm run lint`: Executa o ESLint para verificar a qualidade do código.

---