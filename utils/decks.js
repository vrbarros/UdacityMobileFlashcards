const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'React Native é realmente nativo',
        answer:
          'Sim! React Native é nativo mesmo. Funciona assim: dentro do seu dispositivo existem dois núcleos: um núcleo nativo (Java para Android e Objective-C para iOS) e um núcleo de Javascript, chamado JavaScriptCore — ou JSC, para os íntimos.',
      },
      {
        question: 'O React Native compila seu código para Android e iOS',
        answer:
          'Falso. O RN não compila seu código. O que acontece é que ele pega seu JavaScript original, transpila, minifica e otimiza (esses dois últimos passos, normalmente, apenas na versão release do app), justamente como acontece na web com o Webpack, porém, o React Native usa um bundler próprio chamado Metro.',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'O que são os encerramentos (closures) em Javascript?',
        answer:
          'Um fechamento é um tipo especial de objeto que combina duas coisas: uma função e quaisquer variáveis locais que estavam no escopo no momento em que a closure foi criada.',
      },
    ],
  },
};

export default function getDecks() {
  return decks;
}
