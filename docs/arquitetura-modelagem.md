flowchart TD
    %% Nós de Início e Autenticação
    Inicio([🚀 Início: Acesso ao ConectaMente]) --> Login[🔐 Login com E-mail Escolar]
    Login --> Papel{👤 Identificação do Papel}

    %% Fluxo do Aprendiz
    Papel -->|🎓 Aprendiz| PubDuvida[❓ Publicar Dúvida e Anexar Foto]
    PubDuvida --> Aguarda[⏳ Dúvida Fica Aberta no Painel]
    Aguarda --> NotifMonitor[🔔 Monitor Visualiza e Aceita Chamado]
    NotifMonitor --> Agenda[📅 Agendar Encontro: Intervalo, Biblioteca ou Online]
    Agenda --> Chat[💬 Atendimento via Chat Interno]
    Chat --> Confirma[🎯 Aluno Confirma Resolução da Dúvida]
    Confirma --> Avalia[⭐ Avaliação do Atendimento com Nota]

    %% Fluxo do Monitor
    Papel -->|👨‍🏫 Monitor| CadMateria[📚 Cadastrar Matérias de Domínio]
    CadMateria --> VerDuvidas[📋 Listar Dúvidas da Sua Área]
    VerDuvidas --> NotifMonitor

    %% Fluxo de Contabilização e Coordenação
    Avalia --> RegHoras[⏱️ Sistema Contabiliza Horas de Voluntariado]
    
    Papel -->|🏫 Coordenação| PainelAdm[🏢 Acessar Painel Administrativo]
    PainelAdm --> VerMetricas[📊 Mapear Disciplinas com Maior Índice de Dúvidas]
    PainelAdm --> ValidHoras[📜 Validar Atendimentos]
    RegHoras --> ValidHoras
    ValidHoras --> EmiteCert[🏆 Emissão de Certificado do Monitor]
    
    EmiteCert --> Fim([🏁 Fim])
