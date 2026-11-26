# StackUp — do primeiro código ao deploy

Landing page responsiva para apresentar a StackUp, uma formação full-stack. A
interface reúne a apresentação do curso, a trilha de aprendizagem, um projeto
final demonstrativo, perguntas frequentes e chamadas para inscrição.

## Conteúdo e funcionalidades

- Página de apresentação com navegação por seções, benefícios e chamadas para ação.
- Trilha com seis módulos, agrupados entre Fundamentos e nível Avançado.
- Abas para alternar o nível, seleção de módulo e controles para navegar entre módulos.
- Painel que mostra a descrição e as tecnologias do módulo selecionado.
- Seção ilustrativa do projeto final e painel de atividades do Flowboard.
- FAQ interativo, com respostas expansíveis.
- Layout responsivo, estilos próprios, animações e suporte a preferência por movimento reduzido.
- Metadados em português e marcação semântica com controles acessíveis por teclado.

O projeto é uma experiência de frontend demonstrativa: não possui backend,
autenticação, processamento de pagamentos nem persistência de dados. Os links
de inscrição direcionam para um endereço de e-mail.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4 e CSS
- oxfmt para formatação

## Requisitos

- Node.js compatível com Vite 8 (20.19+ ou 22.12+)
- npm

## Executar localmente

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local do servidor de desenvolvimento.

## Comandos disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera a versão de produção em dist/
npm run preview  # Pré-visualiza a versão de produção
npm run format   # Formata os arquivos com oxfmt
```

## Estrutura do projeto

```text
.
├── index.html       # Documento HTML e metadados
├── src/
│   ├── App.tsx      # Página, conteúdo e interações
│   ├── index.css    # Estilos, layout e responsividade
│   └── main.tsx     # Ponto de entrada React
├── arquitetura.txt  # Descrição da arquitetura
├── package.json     # Dependências e comandos npm
└── vite.config.ts   # Configuração do Vite e plugins
```

Mais detalhes sobre os componentes e o fluxo de execução estão em
[`arquitetura.txt`](./arquitetura.txt).
