# 🗺️ Relatório de Arquitetura e Modelagem — ConectaMente

Este documento apresenta a modelagem da solução **ConectaMente** para a Etapa 2 do Projeto Integrador II[span_0](start_span)[span_0](end_span).

---

## 1. Arquitetura do Sistema

```mermaid
flowchart TB
    subgraph Cliente["🖥️ Camada Cliente"]
        A[📱 App Web / Mobile]
    end

    subgraph Servidor["⚙️ Camada de Aplicação"]
        B[🔌 API Backend]
        C[🔑 Autenticação]
        D[❓ Módulo de Dúvidas]
        E[📅 Agendamentos]
        F[💬 Chat Interno]
        G[🏆 Certificados e Avaliações]
    end

    subgraph Dados["🗄️ Camada de Dados"]
        H[(🛢️ Banco de Dados)]
        I[(📁 Storage de Imagens)]
    end

    A -->|HTTP| B
    B --> C & D & E & F & G
    D & E & F & G --> H
    D --> I



flowchart TD
    Start([🚀 Início]) --> Login[🔐 Login Escolar]
    Login --> Papel{👤 Perfil}

    Papel -->|🎓 Aprendiz| Duvida[❓ Publica Dúvida]
    Duvida --> Espera[⏳ Visível no Painel]
    Espera --> Aceita[✅ Monitor Aceita]
    Aceita --> Agenda[📅 Agenda Encontro]
    Agenda --> Chat[💬 Atendimento no Chat]
    Chat --> Resolve[🎯 Resolve Dúvida]
    Resolve --> Avalia[⭐ Avalia Atendimento]
    Avalia --> Registro[⏱️ Registra Horas]
    Registro --> Painel[📊 Emissão de Certificado]

    Papel -->|👨‍🏫 Monitor| Perfil[📚 Cadastra Matérias]
    Perfil --> Lista[📋 Lista Dúvidas Abertas]
    Lista --> Aceita

    Papel -->|🏫 Coordenação| PainelC[🏢 Painel Adm]
    PainelC --> Metricas[📈 Relatório de Dúvidas]
    PainelC --> Certifica[📜 Valida Horas]
erDiagram
    USUARIO {
        int id PK
        string nome
        string email_escolar
        string papel
    }

    MATERIA {
        int id PK
        string nome
    }

    DUVIDA {
        int id PK
        int aprendiz_id FK
        int materia_id FK
        string descricao
        string status
    }

    ATENDIMENTO {
        int id PK
        int duvida_id FK
        int monitor_id FK
        string local
        datetime horario
    }

    MENSAGEM {
        int id PK
        int atendimento_id FK
        string texto
    }

    AVALIACAO {
        int id PK
        int atendimento_id FK
        int nota
    }

    CERTIFICADO {
        int id PK
        int monitor_id FK
        int horas_totais
    }

    USUARIO ||--o{ DUVIDA : "publica"
    MATERIA ||--o{ DUVIDA : "categoriza"
    DUVIDA ||--o| ATENDIMENTO : "gera"
    USUARIO ||--o{ ATENDIMENTO : "atende"
    ATENDIMENTO ||--o{ MENSAGEM : "possui"
    ATENDIMENTO ||--o| AVALIACAO : "recebe"
    USUARIO ||--o{ CERTIFICADO : "recebe"



