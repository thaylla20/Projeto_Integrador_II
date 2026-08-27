# Arquitetura da Solução — ConectaMente

## 1. Fluxo do sistema

```mermaid
flowchart TD
    A([Início]) --> B[Login ou Cadastro]
    B --> C[Escolher tipo de usuário]
    C --> D{Precisa de ajuda?}

    D -->|SIM| E[Selecionar matéria]
    E --> F[Publicar dúvida]
    F --> G[Monitor visualiza dúvida]
    G --> H{Monitor aceita atendimento?}

    H -->|NÃO| I[Voltar para dúvidas abertas]
    I --> G

    H -->|SIM| J[Agendar atendimento]
    J --> K[Aluno e monitor realizam atendimento]
    K --> L[Aluno confirma atendimento]
    L --> M[Aluno avalia atendimento]
    M --> N[Coordenação registra atendimento]
    N --> O([Fim])

    D -->|NÃO| P[Voltar para tela inicial / menu principal]
    P --> O
```

## 2. Arquitetura da solução

A solução do ConectaMente é organizada para permitir que alunos encontrem ajuda em matérias nas quais possuem dúvidas, conectando-os com monitores disponíveis.

O sistema possui as seguintes partes principais:

- **Autenticação e cadastro:** permite que o usuário faça login ou crie uma conta no sistema.
- **Gerenciamento de usuários:** identifica o tipo de usuário, como aluno, monitor ou coordenação.
- **Gerenciamento de matérias:** mantém as matérias disponíveis para que o aluno escolha aquela relacionada à sua dúvida.
- **Gerenciamento de dúvidas:** permite que o aluno publique uma dúvida e acompanhe seu atendimento.
- **Gerenciamento de atendimentos:** permite que um monitor aceite uma dúvida e seja realizado o agendamento do atendimento.
- **Avaliação:** permite que o aluno avalie o atendimento realizado.
- **Coordenação:** registra e acompanha os atendimentos realizados e as atividades dos monitores.
- **Banco de dados:** armazena usuários, dúvidas, matérias, atendimentos e avaliações.

## 3. Modelo de dados

```mermaid
erDiagram
    USUARIO ||--o{ DUVIDA : publica
    MATERIA ||--o{ DUVIDA : classifica
    DUVIDA ||--o{ ATENDIMENTO : gera
    USUARIO ||--o{ ATENDIMENTO : participa
    ATENDIMENTO ||--o{ AVALIACAO : recebe
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
```

## 4. Justificativa das escolhas

- **Usuário:** pessoa cadastrada no sistema, podendo ser estudante ou monitor.
- **Dúvida:** pergunta publicada por um usuário e relacionada a uma matéria.
- **Matéria:** categoria ou disciplina à qual uma dúvida pertence.
- **Atendimento:** encontro presencial ou online criado a partir de uma dúvida aceita por um monitor.
- **Avaliação:** nota e comentário dados pelo usuário após o atendimento.
- **Certificado:** registra a participação e as horas de voluntariado do usuário.
- **Banco de dados:** armazena e organiza as informações necessárias para o funcionamento do sistema.

## 5. Funcionamento geral

O funcionamento do ConectaMente começa com o usuário realizando o login ou cadastro. Depois, ele escolhe seu tipo de usuário.

Quando um aluno precisa de ajuda, seleciona a matéria relacionada à dúvida e publica sua pergunta. Um monitor pode visualizar as dúvidas abertas e aceitar um atendimento.

Após a aceitação, o atendimento é agendado e realizado entre o aluno e o monitor. Ao final, o aluno confirma e avalia o atendimento. A coordenação registra o atendimento concluído.

O objetivo do ConectaMente é facilitar a comunicação entre alunos e monitores, criando um espaço organizado para tirar dúvidas e incentivar o aprendizado entre os estudantes.
