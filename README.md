# API Nuvem de Palavras - Setor de Nucleação

Este é um projeto não oficial desenvolvido por Guilherme Henrique Bialas para uso interno do Setor de Nucleação da Secretaria de Educação da Prefeitura Municipal de Joinville.

## Sobre o Projeto

A API permite criar uma nuvem de palavras dinâmica, onde as palavras mais frequentemente utilizadas ganham maior destaque visual. O projeto foi desenvolvido de forma independente como uma ferramenta de auxílio interno.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Supabase (Banco de dados)
- CORS
- Dotenv

## Funcionalidades

- GET `/api/palavras`: Retorna todas as palavras cadastradas com seus respectivos pesos
- POST `/api/palavras`: Adiciona uma nova palavra ou incrementa o peso de uma palavra existente

## Configuração

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Execute o projeto com `npm start` ou `npm run dev` para desenvolvimento

## Observação

Este é um projeto de uso interno e não representa uma ferramenta oficial da Prefeitura Municipal de Joinville.

## Desenvolvedor

Desenvolvido por Fabiano Raiser - Estágiario de Desenvolvimento de Sistemas - Setor de Nucleação

