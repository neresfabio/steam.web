# Curso Dev

## Visão
Registro pessoal da rotina de aprendizagem em desenvolvimento. Use este documento para planejar, executar e revisar suas atividades diárias e semanais.

## Objetivos
- Curto prazo:
  - Criar um repositório no GitHub com README. ✅
  - Clonar o repositório remoto localmente. ✅
  - Fazer a primeira alteração no README e subir para o remoto. ✅
- Médio/Longo prazo:
  - Aprender os comandos Git essenciais.
  - Praticar fluxo de branches, merge e rebase.
  - Construir pequenos projetos para consolidar conceitos.

## Comandos Git

Tabela com comandos úteis, dividida em sincronização remota e operações locais.

| Sincronização remota | Local |
|---                   |---    |
| `git clone <repo>` — clonar repositório remoto<br>`git remote add origin <url>` — adicionar remoto<br>`git fetch` — buscar atualizações (não altera o working tree)<br>`git pull` — buscar e mesclar do remoto (`fetch` + `merge` ou `rebase` dependendo da configuração)<br>`git push` — enviar commits ao remoto<br>`git push -u origin <branch>` — configurar upstream | `git status` — mostrar estado do repositório<br>`git add <file>` — preparar alterações para commit<br>`git commit -m "msg"` — criar commit<br>`git branch` — listar/gerir branches<br>`git checkout <branch>` / `git switch <branch>` — mudar de branch<br>`git merge <branch>` — mesclar branch no atual<br>`git rebase <branch>` — reaplicar commits sobre outro branch<br>`git reset --soft --hard` — redefinir HEAD (cuidado)<br>`git stash` — guardar alterações temporariamente<br>`git log` — visualizar histórico de commits<br>`git diff` — ver diferenças entre estados|

## Arvore de arquivos

### /.nvmrc

**Explicação curta**:

- **Função**: .nvmrc contém a versão do Node a ser usada pelo projeto. Ferramentas como nvm (Node Version Manager) leem esse arquivo para trocar automaticamente a versão do Node.
- **Como usar**:
  - `nvm install` instala a versão indicada (se não existir)
  - `nvm use` ativa a versão indicada por .nvmrc
  - `nvm exec npm run start` executa com a versão do .nvmrc

### /package.json

**Para que serve o package.json**

- Função geral: é o manifesto do projeto Node.js / JavaScript. Contém metadados e configurações que descrevem o projeto e permitem gerenciar dependências, scripts e comportamentos da aplicação.
- Campos comuns:
  - name, version, description — informações básicas do projeto.
  - main — arquivo de entrada (ex.: "index.js").
  - scripts — comandos customizados que podem ser executados com `npm run <nome>` (ex.: "start", "test", "build").
  - dependencies — dependências necessárias em runtime.
  - devDependencies — dependências usadas apenas em desenvolvimento (tests, bundlers).
  - engines — versão(s) do Node compatíveis.
  - repository, license, author, keywords — metadados para publicação/identificação.
- Uso rápido:
  - `npm init` — cria um package.json interativo.
  - `npm install` — instala dependências listadas.
  - `npm install <pkg>` — adiciona uma dependência e atualiza package.json.
  - `npm install <pkg> --save-dev` — adiciona a devDependency.
  - `npm run <script>` — executa scripts definidos.
- Observações:
  - Mantenha scripts claros e atômicos (start, test, build).
  - O arquivo package-lock.json (ou yarn.lock) trava versões instaladas para reprodutibilidade.
  - Para projetos que usam nvm, combine package.json (engines) com .nvmrc para consistência de ambiente.

## Protocolos web

- **HTTP — Hypertext Transfer Protocol**: protocolo usado para troca de informação entre clientes (ex.: navegadores) e servidores web. É usado para requisitar e servir páginas, recursos e APIs (REST/GraphQL), operando sobre TCP/TLS e utilizando métodos como GET, POST, PUT e DELETE. Aplique HTTP sempre que precisar construir ou consumir serviços web, interfaces web ou APIs públicas/privadas.

- **FTP — File Transfer Protocol**: protocolo para transferência de arquivos entre cliente e servidor, com comandos para navegar, enviar e baixar arquivos. É útil para manutenção de servidores, deploys simples ou transferência direta de arquivos grandes, mas hoje em dia costuma ser substituído por SFTP/FTPS (segurança) ou por ferramentas de deploy/backup mais modernas. Use FTP apenas quando compatibilidade legada ou um servidor FTP for requerido.

- **SMTP — Simple Mail Transfer Protocol**: protocolo padrão para envio e roteamento de e‑mails entre servidores. Aplicações e servidores usam SMTP para enviar mensagens; a recepção e sincronização nos clientes normalmente usam IMAP/POP3. Use SMTP sempre que sua aplicação precisar enviar notificações por e‑mail, confirmações ou relatórios; combine com serviços de entrega (SES, SendGrid, etc.) para confiabilidade e escala.

- **TCP — Transmission Control Protocol**: protocolo de transporte orientado à conexão que garante entrega confiável, ordenada e sem duplicação de pacotes entre duas pontas (hosts). Opera abaixo de protocolos de aplicação (HTTP, SMTP etc.) e fornece controle de fluxo e retransmissão em caso de perda. Use TCP quando a aplicação precisar de comunicação confiável e sequencial (web, transferência de arquivos confiável, APIs via HTTP); para casos que exigem baixa latência e aceitam perda de pacotes, considere UDP.

- **IP — Internet Protocol**: protocolo de camada de rede responsável por endereçamento e roteamento de pacotes entre dispositivos na rede. IP define formatos de endereço (IPv4/IPv6) e fragmentação de pacotes, mas não garante entrega — isso é responsabilidade de protocolos de camada superior como TCP. Aplique IP sempre que dispositivos precisarem comunicar-se através de redes distintas; combine com protocolos de transporte (TCP/UDP) conforme requisitos de confiabilidade e latência.

- **UDP — User Datagram Protocol**: protocolo de transporte sem conexão que envia datagramas sem garantia de entrega, ordenação ou prevenção de duplicatas. É leve e de baixa latência, adequado para streaming de áudio/vídeo, jogos em tempo real e DNS, onde perda ocasional é aceitável. Use UDP quando precisar de desempenho e tolerância a perda; use mecanismos adicionais de aplicação se precisar de confiabilidade.

## File-Based Routing

**File-Based Routing** é um padrão onde a estrutura de arquivos do projeto define automaticamente as rotas da aplicação: cada arquivo ou diretório dentro de uma pasta de rotas (ex.: pages/, src/routes/) mapeia para uma URL. Frameworks como Next.js, Nuxt e SvelteKit adotam esse modelo, oferecendo rotas dinâmicas (ex.: [id].js) e aninhadas por convenção. 
- **Vantagens**: menos configuração, criação rápida de rotas, melhor previsibilidade e manutenção;
- **Desvantagem**: pode ser limitante quando é necessária lógica complexa de roteamento dinâmica. Use File-Based Routing quando quiser produtividade e convenções claras, opte por roteamento programático se precisar gerar rotas dinamicamente em tempo de execução.

## Curiosidades

