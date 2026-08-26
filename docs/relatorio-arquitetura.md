# Relatório de Arquitetura e Modelagem — ConectaMente

## 1. Introdução

Este documento apresenta a modelagem inicial da solução **ConectaMente**, incluindo o fluxo de
funcionamento do sistema e o modelo de dados que sustenta as principais funcionalidades.

## 2. Fluxo do Processo

O diagrama abaixo descreve o caminho do usuário desde o acesso ao sistema até o registro final
do atendimento pela coordenação.

​```mermaid
flowchart TD
    A([Início]) --> B[Login ou cadastro]
    B --> C{Possui conta?}
    C -- Não --> D[Criar cadastro]
    D --> E[Escolher a matéria]
    C -- Sim --> E
    E --> F[Publicar dúvida]
    F --> G[Monitor aceita o pedido]
    G --> H[Agendar ou fazer online]
    H --> I[Realizar atendimento]
    I --> J[Confirmar e avaliar]
    J --> K[Coordenação registra atendimento]
    K --> L([Fim])
​```

**Resumo das etapas:**

1. O usuário acessa o sistema e faz login ou cria um cadastro.
2. Escolhe a matéria relacionada à sua dúvida.
3. Publica a dúvida no sistema.
4. Um monitor visualiza e aceita o pedido.
5. É definido um atendimento presencial (agendado) ou online.
6. O atendimento é realizado.
7. O usuário confirma e avalia o atendimento recebido.
8. A coordenação registra o atendimento concluído.

## 3. Modelo de Dados

O modelo abaixo representa as principais entidades do sistema e como elas se relacionam.

​```mermaid
erDiagram
    USUARIO ||--o{ DUVIDA : publica
    MATERIA ||--o{ DUVIDA : classifica
    DUVIDA ||--o| ATENDIMENTO : gera
    ATENDIMENTO ||--o| AVALIACAO : recebe
    USUARIO ||--o{ ATENDIMENTO : realiza

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
        int materia_id FK
        string status
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
    MATERIA {
        int id PK
        string nome
    }
​```

### Descrição das entidades

| Entidade | Descrição |
|---|---|
| **Usuário** | Pessoa cadastrada no sistema, podendo ser estudante ou monitor (`tipo_usuario`). |
| **Dúvida** | Pergunta publicada por um usuário, associada a uma matéria. |
| **Matéria** | Categoria/disciplina à qual uma dúvida pertence. |
| **Atendimento** | Encontro (presencial ou online) criado a partir de uma dúvida aceita por um monitor. |
| **Avaliação** | Nota e comentário dados pelo usuário após o atendimento. |

### Relacionamentos

- Um **usuário** publica várias **dúvidas**.
- Cada **dúvida** pertence a uma **matéria**.
- Cada **dúvida** gera um **atendimento**.
- Um **usuário** (monitor) realiza o **atendimento**.
- Cada **atendimento** recebe uma **avaliação**.
