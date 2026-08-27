
# Arquitetura da Solução — ConectaMente

## 1. Fluxo do sistema

```mermaid
flowchart TD
    A[Início] --> B[Login ou Cadastro]
    B --> C[Escolher tipo de usuário]
    C --> D{Precisa de ajuda?}

    D -->|Sim| E[Selecionar matéria]
    E --> F[Publicar dúvida]
    F --> G[Monitor visualiza dúvida]
    G --> H{Monitor aceita atendimento?}

    H -->|Não| I[Voltar para dúvidas abertas]
    I --> G

    H -->|Sim| J[Agendar atendimento]
    J --> K[Aluno e monitor realizam atendimento]
    K --> L[Aluno confirma atendimento]
    L --> M[Aluno avalia atendimento]
    M --> N[Coordenação registra atendimento]
    N --> O[Fim]

    D -->|Não| P[Voltar para tela inicial]
    P --> O

2. Arquitetura da solução

A solução do ConectaMente é organizada para permitir que alunos encontrem ajuda em matérias nas quais possuem dúvidas, conectando-os com monitores disponíveis.

O sistema possui as seguintes partes principais:

Autenticação e cadastro: permite que o usuário faça login ou crie uma conta no sistema.

Gerenciamento de usuários: identifica o tipo de usuário, como aluno, monitor ou coordenação.

Gerenciamento de matérias: mantém as matérias disponíveis para que o aluno escolha aquela relacionada à sua dúvida.

Gerenciamento de dúvidas: permite que o aluno publique uma dúvida e acompanhe seu atendimento.

Gerenciamento de atendimentos: permite que um monitor aceite uma dúvida e seja realizado o agendamento do atendimento.

Avaliação: permite que o aluno avalie o atendimento realizado.

Coordenação: registra e acompanha os atendimentos realizados e as atividades dos monitores.

Banco de dados: armazena usuários, dúvidas, matérias, atendimentos e avaliações.


3. Modelo de dados

erDiagram
    USUARIO ||--o{ DUVIDA : publica
    MATERIA ||--o{ DUVIDA : classifica
    DUVIDA ||--o{ ATENDIMENTO : gera
    ATENDIMENTO ||--o{ AVALIACAO : recebe
    USUARIO ||--o{ ATENDIMENTO : participa
    USUARIO ||--o{ CERTIFICADO : possui

    USUARIO {
        int id PK
        string nome
        string email
        string senha
        string tipo_usuario
    }

    DUVIDA {
        int id PK
        string descricao
        string foto
        string status
    }

    MATERIA {
        int id PK
        string nome
    }

    ATENDIMENTO {
        int id PK
        date data
        string horario
        string local
        string status
    }

    AVALIACAO {
        int id PK
        int nota
        string comentario
    }

    CERTIFICADO {
        int id PK
        date data_emissao
        int horas_voluntariado
    }

4. Justificativa das escolhas

Usuário: responsável pelo acesso ao sistema e pelo papel desempenhado na plataforma.

Dúvida: representa a pergunta ou dificuldade publicada pelo aluno, podendo conter descrição, foto e status.

Matéria: organiza as dúvidas de acordo com a disciplina relacionada.

Atendimento: representa a ajuda oferecida pelo monitor ao aluno, podendo possuir data, horário, local e status.

Avaliação: permite que o aluno registre uma nota e um comentário sobre o atendimento.

Certificado: registra a participação do monitor e suas horas de voluntariado.

Banco de dados: permite armazenar e organizar as informações necessárias para o funcionamento do sistema.


5. Protótipos de interface

As telas desenvolvidas representam a proposta inicial da interface do ConectaMente, buscando uma navegação simples e intuitiva para alunos, monitores e coordenação.

As imagens dos protótipos estão armazenadas no repositório do projeto.

Tela 1 — Login

Tela 2 — Cadastro

Tela 3 — Página inicial

Tela 4 — Publicação de dúvida

Tela 5 — Área do monitor

Tela 6 — Agendamento e chat

Tela 7 — Avaliação do atendimento

Tela 8 — Painel da coordenação

6. Considerações finais

A arquitetura e a modelagem apresentadas representam a estrutura inicial do ConectaMente. A proposta organiza as principais funcionalidades do sistema e serve como base para a etapa de desenvolvimento e implementação do projeto.

