# Arquitetura da Solução — ConectaMente

## 1. Fluxo do sistema

Início  
↓  
Login ou Cadastro  
↓  
Escolher tipo de usuário  
↓  
Precisa de ajuda?

**SIM** → Selecionar matéria  
↓  
Publicar dúvida  
↓  
Monitor visualiza dúvida  
↓  
Monitor aceita atendimento?

**NÃO** → Voltar para dúvidas abertas → Monitor visualiza dúvida

**SIM** → Agendar atendimento  
↓  
Aluno e monitor realizam atendimento  
↓  
Aluno confirma atendimento  
↓  
Aluno avalia atendimento  
↓  
Coordenação registra atendimento  
↓  
Fim

**NÃO precisa de ajuda** → Voltar para tela inicial / menu principal → Fim


## 2. Arquitetura da solução

A solução do ConectaMente é organizada para permitir que alunos encontrem ajuda em matérias nas quais possuem dúvidas, conectando-os com monitores disponíveis.

O sistema possui as seguintes partes principais:

- Autenticação e cadastro
- Gerenciamento de usuários
- Gerenciamento de matérias
- Gerenciamento de dúvidas
- Gerenciamento de atendimentos
- Avaliação dos atendimentos
- Coordenação
- Banco de dados


## 3. Modelo de dados

### Usuário
- ID
- Nome
- E-mail
- Senha
- Tipo de usuário

### Dúvida
- ID
- Descrição
- Foto
- Status

### Matéria
- ID
- Nome da matéria

### Atendimento
- ID
- Data
- Horário
- Local
- Status

### Avaliação
- ID
- Nota
- Comentário

### Certificado
- ID
- Data de emissão
- Horas de voluntariado


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
