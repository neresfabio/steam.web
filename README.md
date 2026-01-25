# 🌊 steam.web

> Aqui as coisas fluem!

Um espaço dedicado à construção de experiências web modernas utilizando **JavaScript** e **CSS**. Este projeto documenta a jornada de aprendizagem em desenvolvimento, com foco em boas práticas, arquitetura limpa e colaboração eficiente.

---

## 📚 Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura](#-arquitetura)
- [Quick Start](#-quick-start)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Comandos Úteis](#-comandos-úteis)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Tecnologias](#-tecnologias)
- [Testes](#-testes)
- [Git Workflow](#-git-workflow)
- [Conceitos Técnicos](#-conceitos-técnicos)
- [Contribuindo](#-contribuindo)

---

## 🎯 Visão Geral

**steam.web** é um projeto que serve como base para aprendizagem e consolidação de conhecimentos em desenvolvimento web. Aqui você encontrará:

- ✅ Exemplos práticos de arquitetura MVC
- ✅ Padrões de organização de código
- ✅ Documentação clara para técnicos e não-técnicos
- ✅ Testes automatizados
- ✅ Fluxo Git profissional

**Resumo técnico:**
- **Linguagem**: JavaScript (63,9%) e CSS (36,1%)
- **Padrão**: MVC (Model-View-Controller)
- **Banco de Dados**: PostgreSQL
- **Runtime**: Node.js (versão em .nvmrc)

---

## 🏗️ Arquitetura

O projeto segue o padrão **MVC** para máxima clareza e escalabilidade:

```
┌─────────────┐
│   MODEL     │  Dados e regras de negócio
└──────┬──────┘
       │
┌──────▼──────┐
│ CONTROLLER  │  Lógica que conecta Model ↔ View
└──────┬──────┘
       │
┌──────▼──────┐
│    VIEW     │  Interface e apresentação (pages/)
└─────────────┘
```

### Camadas do Projeto

| Camada | Responsabilidade | Localização |
|--------|------------------|-------------|
| **Model** | Estrutura de dados, validações, regras de negócio | `src/models/` |
| **View** | Componentes, páginas, interface visual | `pages/` |
| **Controller** | Lógica de negócio, orquestração | `src/controllers/` |
| **Infra** | Banco de dados, migrations, provisionamento | `infra/` |
| **Assets** | CSS, imagens, fonts estáticas | `pages/assets/` |

---

## 🚀 Quick Start

Comece em 3 passos:

```bash
# 1. Configure a versão correta do Node
nvm use

# 2. Instale as dependências
npm install

# 3. Rode a aplicação
npm run start
```

Sua aplicação estará acessível em `http://localhost:3000`.

---

## 📦 Instalação e Configuração

### Pré-requisitos

- **Node.js**: versão especificada em `.nvmrc` (use [nvm](https://github.com/nvm-sh/nvm))
- **PostgreSQL**: versão 16+ (se usar banco de dados)
- **npm**: gerenciador de pacotes (vem com Node)

### Instalação Completa

```bash
# Clone o repositório
git clone https://github.com/neresfabio/steam.web.git
cd steam.web

# Configure o Node com NVM
nvm install  # Instala a versão do .nvmrc
nvm use      # Ativa a versão

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.development
# Edite .env.development com suas credenciais
```

### Variáveis de Ambiente

Crie um arquivo `.env.development` com:

```env
NODE_ENV=development
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=steam_db
```

---

## 🔨 Comandos Úteis

### Desenvolvimento

| Comando | Descrição |
|---------|-----------|
| `npm run start` | Inicia a aplicação em modo desenvolvimento |
| `npm run dev` | Alias para `start` (se configurado) |
| `npm test` | Executa todos os testes |
| `npm test -- --watch` | Roda testes em modo observação |
| `npm run build` | Compila/constrói para produção |

### Git - Sincronização

| Comando | Descrição |
|---------|-----------|
| `git clone <repo>` | Clona o repositório remoto |
| `git fetch` | Busca atualizações sem alterar código local |
| `git pull` | Busca e integra atualizações remotas |
| `git status` | Mostra status das mudanças |
| `git add .` | Prepara arquivos para commit |
| `git commit -m "mensagem"` | Cria um commit com histórico |
| `git push` | Envia commits para o repositório remoto |

### Git - Branches e Merges

| Comando | Descrição |
|---------|-----------|
| `git branch` | Lista todas as branches |
| `git branch <nome>` | Cria uma nova branch |
| `git checkout <branch>` | Muda para outra branch |
| `git checkout -b <branch>` | Cria e muda para uma nova branch |
| `git merge <branch>` | Integra outra branch na atual |
| `git rebase <branch>` | Reaplica commits (reescreve histórico) |

### NPM - Dependências

| Comando | Descrição |
|---------|-----------|
| `npm install` | Instala todas as dependências |
| `npm install <pkg>` | Instala e adiciona uma dependência |
| `npm install <pkg> --save-dev` | Instala como devDependency (desenvolvimento) |
| `npm update` | Atualiza todas as dependências |
| `npm list` | Lista dependências instaladas |

---

## 📁 Estrutura de Pastas

```
📦 steam.web/
 ├── 📂 src/                    # Código-fonte principal
 │   ├── 📂 models/             # Modelos de dados e lógica
 │   │   ├── users.js
 │   │   ├── content.js
 │   │   └── password.js
 │   ├── 📂 controllers/        # Lógica de negócio
 │   │   └── statusController.js
 │   └── 📂 assets/             # Recursos estáticos
 │       └── styles.css
 ├── 📂 pages/                  # Páginas e rotas (Next.js style)
 │   ├── 📂 api/                # Endpoints da API
 │   │   └── 📂 v1/
 │   │       └── 📂 status/
 │   │           └── index.js
 │   ├── index.js               # Página inicial
 │   └── index.module.css       # Estilos da home
 ├── 📂 infra/                  # Infraestrutura
 │   ├── 📂 migrations/         # Migrações do banco
 │   ├── 📂 provisioning/       # Scripts de setup
 │   │   ├── 📂 staging/
 │   │   └── 📂 production/
 │   └── database.js            # Conexão PostgreSQL
 ├── 📂 tests/                  # Testes automatizados
 │   ├── 📂 integration/        # Testes de integração
 │   │   └── api/
 │   │       └── v1/
 │   │           └── status/
 │   │               └── get.test.js
 │   └── 📂 unit/               # Testes unitários
 ├── 📄 .editorconfig           # Padronização do editor
 ├── 📄 .env.development        # Variáveis (desenvolvimento)
 ├── 📄 .gitignore              # Arquivos ignorados pelo Git
 ├── 📄 .nvmrc                  # Versão do Node.js
 ├── 📄 .prettierignore         # Arquivos ignorados por formatação
 ├── 📄 package.json            # Dependências e scripts
 ├── 📄 package-lock.json       # Lock das versões
 ├── 📄 jsconfig.json           # Configuração do JavaScript
 └── 📄 README.md               # Esta documentação
```

### Explicação dos Arquivos-Chave

#### `.nvmrc`
Especifica a versão do Node.js para o projeto.

```bash
# Usar com nvm:
nvm install  # Instala a versão do arquivo
nvm use      # Ativa a versão
```

#### `package.json`
Manifesto do projeto. Define dependências, scripts e metadados.

```json
{
  "name": "steam.web",
  "version": "1.0.0",
  "scripts": {
    "start": "next dev",
    "test": "jest"
  },
  "dependencies": {...},
  "devDependencies": {...}
}
```

**Scripts comuns:**
- `npm run start` — Inicia aplicação
- `npm run test` — Executa testes
- `npm run build` — Compila para produção

#### `.editorconfig`
Garante consistência de indentação e formatação entre diferentes editores.

#### `jsconfig.json`
Configurações do JavaScript (paths, alias, etc.)

#### `infra/database.js`
Módulo de conexão com PostgreSQL. Exemplo:

```javascript
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } finally {
    await client.end();
  }
}

export default { query };
```

---

## 💻 Tecnologias

| Tecnologia | Uso | Documentação |
|-----------|-----|--------------|
| **JavaScript** | Linguagem principal (63,9%) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **CSS** | Estilização (36,1%) | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| **Next.js** | Framework web (provável) | [Next.js Docs](https://nextjs.org) |
| **PostgreSQL** | Banco de dados relacional | [PostgreSQL](https://www.postgresql.org) |
| **Jest** | Framework de testes | [Jest](https://jestjs.io) |
| **Node.js** | Runtime JavaScript | [Node.js](https://nodejs.org) |

---

## 🧪 Testes

### Configuração

```bash
npm install --save-dev jest@29.6.2
```

### Executar Testes

```bash
# Rodar todos os testes
npm run test

# Modo watch (reexecuta ao salvar)
npm run test -- --watch

# Coverage (cobertura de código)
npm run test -- --coverage
```

### Exemplo de Teste

```javascript
// tests/integration/api/v1/status/get.test.js
test("GET /api/v1/status retorna 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  
  expect(response.status).toBe(200);
  
  const body = await response.json();
  expect(body.dependencies.database.version).toBe("16.0");
});
```

---

## 🌿 Git Workflow

### Fluxo Padrão

1. **Criar branch para feature:**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

2. **Fazer mudanças e testar:**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   ```

3. **Enviar para remoto:**
   ```bash
   git push origin feature/nova-funcionalidade
   ```

4. **Criar Pull Request no GitHub**

5. **Merge na main**

### Corrigir Commits

Se fez commit errado **e apenas você usa a branch**:

```bash
# Corrigir a mensagem
git commit --amend -m "mensagem correta"

# Reenviar (com força, pois reescreve histórico)
git push --force
```

⚠️ **Cuidado**: Nunca faça `git push --force` em branches compartilhadas!

---

## 📡 Conceitos Técnicos

### Protocolos Web

| Protocolo | Função | Uso |
|-----------|--------|-----|
| **HTTP** | Requisição/resposta entre cliente-servidor | APIs, páginas web |
| **HTTPS** | HTTP com criptografia TLS/SSL | Comunicação segura |
| **FTP** | Transferência de arquivos | Deploy, backups (obsoleto) |
| **SMTP** | Envio de e-mails | Notificações |
| **TCP** | Entrega confiável de dados | Internet, streaming |
| **UDP** | Entrega rápida (sem garantia) | Games, VoIP, streaming |
| **IP** | Endereçamento de rede | Roteamento de pacotes |

### File-Based Routing

Padrão onde a **estrutura de pastas** define as rotas automaticamente.

**Vantagens:**
- Menos configuração
- Rotas intuitivas
- Fácil manutenção

**Como funciona:**
```
pages/
 ├── index.js           → /
 ├── about.js           → /about
 └── api/
     └── v1/
         └── status.js  → /api/v1/status
```

### Princípio do Menor Privilégio (PoLP)

Conceda a usuários e serviços **apenas** as permissões necessárias.

**Benefícios:**
- Reduz superfície de ataque
- Limita danos de credenciais comprometidas
- Facilita auditoria

**Como aplicar:**
- Use roles e políticas granulares (RBAC)
- Implemente credenciais efêmeras
- Revise permissões regularmente
- Segregue ambientes (dev, staging, prod)

### EditorConfig

Padroniza configurações de editor entre times.

Exemplo `.editorconfig`:
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.{js,jsx,ts,tsx}]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/sua-feature`)
3. **Commit** suas mudanças com mensagens claras (`git commit -m "feat: descrição"`)
4. **Push** para seu fork (`git push origin feature/sua-feature`)
5. **Abra um Pull Request**

### Padrão de Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige bug em X
docs: atualiza documentação
test: adiciona testes para X
refactor: reorganiza código em X
```

### Checklist antes de Enviar

- ✅ Código testado
- ✅ Testes passando (`npm test`)
- ✅ Sem console.log deixado
- ✅ README atualizado (se necessário)
- ✅ Commit com mensagem clara

---

## 📚 Curiosidades & Dicas

💡 **"One man's trash is another man's treasure."**  
*"O lixo de uns é o tesouro de outros."*

- Use `.gitignore` para não versionar arquivos sensíveis (`.env`, `node_modules/`)
- Mantenha `package-lock.json` atualizado para reprodutibilidade
- Combine `.nvmrc` com `package.json` (engines) para máxima compatibilidade
- EditorConfig + Prettier + ESLint = equipe sincronizada 🎯

---

## 📞 Suporte e Contato

- 📧 **Issues**: Use GitHub Issues para bugs ou sugestões
- 💬 **Discussões**: Abra discussões para perguntas
- 🔗 **Social**: 
  - [Instagram](https://www.instagram.com/oneres_stm)
  - [LinkedIn](https://www.linkedin.com/in/fabioneresdejesus)
  - [YouTube](https://www.youtube.com/@mocorongotech)

---

## 📄 Licença

Este projeto é fornecido como é, para fins educacionais.  
Especifique uma licença oficial se desejar publicar (MIT, Apache 2.0, etc.).

---

**Desenvolvido com ❤️ por Fábio Neres**  
Santarém - PA | EngVerse
