# Udacity Mobile Flashcards

Para o projeto Flashcards Móveis, foi construído um aplicativo para dispositivos móveis (Android ou iOS - ou ambos) que permite que usuários estudem uma coleção de flashcards. Com o app, os usuários podem criar diferentes categorias de flashcards chamadas de "baralhos", adicionar flashcards a esses baralhos, e fazer os quizes nestes baralhos.


### Instalação

* Por favor, instale o `expo` no computador e no dispositivo
* `npm install` ou `yarn install`
* `npm start` ou `yarn start`

Siga as instruções para poder visualizar e utilizar o aplicativo.


### Testes

Este aplicativo foi testado em desenvolvimento em um ambiente Windows, utilizando o iOS 11.2 instalado em um iPhone 6S com o Expo.


### Especificações

#### Configurações da aplicação
1) [ - ] A aplicação requer apenas yarn install e yarn start para instalar e ser inicializada. npm pode ser usado no lugar do yarn.
2) [ - ] Um README está incluído no projeto. O README inclui instruções claras para instalar e executar o projeto.

#### Funcionalidades

1) [ - ] A view primária, vista logo quando o app é carregado, é
uma lista dos baralhos criados que incluem um nome de
cada baralho e o número de cartas.
2) [ - ] Ao clicar em um baralho da lista, uma animação deve ser
gerada e o app deve levar para uma view de um baralho
individual.
3) [ - ] A view de um baralho individual incluem (pelo menos):
Um título do baralho
Número de cartas no baralho
Opção de começar um quiz naquele baralho
Opção de adicionar uma nova pergunta ao baralho
4) [ - ] Ao clicar em 'Start a Quiz' (ou 'Começar um quiz') ou
'Create New Question' (ou 'Criar nova pergunta'), o app
deve levar para as corretas views dessas atividades.
5) [ - ] A view de nova pergunta inclui um formulário com os
campos para uma pergunta, uma resposta, e um botão
de envio.
6) [ - ] Ao enviar o formulário, o app adiciona corretamente a
pergunta/resposta ao baralho.
7) [ - ] A view do quiz começa com uma pergunta do baralho
selecionado.
8) [ - ] A pergunta é exibida, junto com um botão para a
resposta.
9) [ - ] Clicar em 'Show Answer' (ou 'Mostrar resposta') exibe
a resposta.
10) [ - ] Botões são incluídos para permitir que o estudante
marque suas respostas pensada como 'Correct' (ou
''Correta') e 'Incorrect' (ou 'Incorreta')
11) [ - ] A view exibe o número de questões restantes.
12) [ - ] Quando a última questão é respondida, uma
pontuação é exibida. Ela pode ser exibida como uma
porcentagem de respostas corretas ou apenas o
número de questões respondidas corretamente.
13) [ - ] Quando a pontuação é exibida, botões são mostrados
para ou começar um quiz ou voltar à view de baralho
individual.
14) [ - ] Ambos os botões 'Restart Quiz' ('Recomeçar quiz') e
'Back to Deck' ('Voltar ao baralho') levam
corretamente para suas respectivas views.
15) [ - ] A view inclui um formulário para criar um novo baralho -
que pode ter apenas um input para o título e um botão
'Create Deck' ('Criar baralho').
16) [ - ] Clicar no botão cria corretamente um baralho e leva o
usuário à 'view de baralho individual' do novo baralho.
17) [ - ] A lógica para notificação push (local) foi implementada.
Notificação push são geradas em um tempo específico
(você que definene este tempo) se o usuário não
completou pelo menos um quiz naquele dia.
18) [ - ] O app funciona corretamente em pelo menos um dos
dois dispositivos Android e iOS (ou em um emulador).
19) [ X ] O README do projeto identifica qual (ou quais)
plataforma(s) foi (ou foram) testado (ou testadas).

#### Qualidade do código
1) [ - ] O projeto utiliza pelo menos uma razoável convenção de
nomes. Os componentes são escritos pensando no
reuso e utiliza uma estrutura modular.
2) [ - ] Não há erros de compilação quando o app é inicializado.
Não há erros durante o uso do app.