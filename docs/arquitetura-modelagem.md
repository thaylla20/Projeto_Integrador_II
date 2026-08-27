#  Relatório de Arquitetura e Modelagem — ConectaMente

Este documento apresenta a modelagem inicial da solução **ConectaMente**, contemplando o fluxo de uso, a arquitetura geral do sistema e o modelo de dados. Faz parte da Etapa 2 do Projeto Integrador II.

---

## 1. Visão Geral da Arquitetura

O ConectaMente segue uma arquitetura simples em camadas (cliente-servidor), adequada ao escopo de um projeto escolar, mas seguindo boas práticas do mercado.

​```mermaid
flowchart TB
    subgraph Cliente["Camada Cliente"]
        A[Navegador Web / App Responsivo]
    end

    subgraph Servidor["Camada de Aplicação"]
        B[API / Backend]
        C[Autenticação e Papéis: Aprendiz / Monitor / Coordenação]
        D[Módulo de Dúvidas]
        E[Módulo de Agendamento]
        F[Módulo de Chat]
        G[Módulo de Avaliação e Certificados]
    end

    subgraph Dados["Camada de Dados"]
        H[(Banco de Dados)]
        I[(Armazenamento de Arquivos - fotos de exercícios)]
    end

    A -->|Requisições HTTP| B
    B --> C
    B --> D
    B --> E
    B --> F
    B --> G
    D --> H
    E --> H
    F --> H
    G --> H
    D --> I
​```

---

## 2. Fluxo de Uso (Fluxograma)

Representa o caminho principal do sistema, do pedido de ajuda até a avaliação final.

​```mermaid
flowchart TD
    Start([Aluno acessa o ConectaMente]) --> Login[Login com e-mail escolar]
    Login --> Papel{Papel do usuário}

    Papel -->|Aprendiz| Duvida[Publica dúvida: matéria, descrição, foto do exercício]
    Duvida --> Espera[Dúvida fica visível para monitores da matéria]
    Espera --> Aceita[Monitor aceita o atendimento]
    Aceita --> Agenda[Agendam encontro: intervalo, biblioteca ou online]
    Agenda --> Chat[Conversa pelo chat interno]
    Chat --> Resolve[Dúvida é resolvida]
    Resolve --> Avalia[Aprendiz avalia o atendimento]
    Avalia --> Registro[Sistema registra ponto do monitor]
    Registro --> Painel[Coordenação acompanha e emite certificado]

    Papel -->|Monitor| Perfil[Define matérias que domina]
    Perfil --> Lista[Visualiza dúvidas abertas da sua matéria]
    Lista --> Aceita

    Papel -->|Coordenação| PainelC[Acessa painel administrativo]
    PainelC --> Metricas[Visualiza matérias com mais dúvidas]
    PainelC --> Certifica[Valida horas e emite certificados]
​```

---

## 3. Modelo de Dados (Diagrama Entidade-Relacionamento)

​```mermaid
erDiagram
    USUARIO {
        int id
        string nome
        string email_escolar
        string papel "Aprendiz, Monitor ou Ambos"
        string senha_hash
    }

    MATERIA {
        int id
        string nome
    }

    MONITOR_MATERIA {
        int id
        int usuario_id
        int materia_id
    }

    DUVIDA {
        int id
        int aprendiz_id
        int materia_id
        string descricao
        string foto_url
        string status "Aberta, Em atendimento, Concluída"
        datetime criada_em
    }

    ATENDIMENTO {
        int id
        int duvida_id
        int monitor_id
        string local "Intervalo, Biblioteca, Online"
        datetime horario_agendado
        string status
    }

    MENSAGEM {
        int id
        int atendimento_id
        int usuario_id
        string texto
        datetime enviada_em
    }

    AVALIACAO {
        int id
        int atendimento_id
        int nota
        string comentario
    }

    CERTIFICADO {
        int id
        int monitor_id
        int horas_totais
        datetime emitido_em
    }

    USUARIO ||--o{ DUVIDA : "publica"
    USUARIO ||--o{ MONITOR_MATERIA : "domina"
    MATERIA ||--o{ MONITOR_MATERIA : "referente a"
    MATERIA ||--o{ DUVIDA : "categoriza"
    DUVIDA ||--o| ATENDIMENTO : "gera"
    USUARIO ||--o{ ATENDIMENTO : "atende como monitor"
    ATENDIMENTO ||--o{ MENSAGEM : "contém"
    ATENDIMENTO ||--o| AVALIACAO : "recebe"
    USUARIO ||--o{ CERTIFICADO : "recebe"
​```

---

## 4. Protótipo de Telas (Wireframe Textual)

| Tela | Elementos principais |
|---|---|
| **Login/Cadastro** | E-mail escolar, senha, seleção de papel (Aprendiz/Monitor/Ambos) |
| **Painel do Aprendiz** | Botão "Nova Dúvida", lista de dúvidas em andamento |
| **Publicar Dúvida** | Seleção de matéria, campo de texto, upload de foto |
| **Painel do Monitor** | Lista de dúvidas abertas por matéria, botão "Aceitar" |
| **Agendamento** | Seleção de local (intervalo/biblioteca/online) e horário |
| **Chat** | Histórico de mensagens, campo de envio |
| **Avaliação** | Estrelas/nota + comentário |
| **Painel da Coordenação** | Gráfico de matérias com mais dúvidas, lista de monitores e horas, emissão de certificado |

---

## 5. Stack Tecnológica Sugerida

- **Frontend:** HTML, CSS, JavaScript (ou React, se a equipe já tiver familiaridade)
- **Backend:** Node.js (Express) ou PHP
- **Banco de Dados:** MySQL ou PostgreSQL
- **Armazenamento de imagens:** pasta local `/uploads` ou serviço gratuito (ex: Cloudinary)
- **Hospedagem/testes:** Vercel, Render ou GitHub Pages (para frontend estático)

---

## 6. Rastreabilidade (Trello ↔ GitHub)

Cada cartão do Trello referente a um módulo (ex: "Implementar cadastro de usuário") deve citar o número da *issue* correspondente no GitHub, e os commits devem referenciar essa issue (ex: `git commit -m "feat: cadastro de usuário #4"`).
