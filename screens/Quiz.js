import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import Button from '../components/Button';
import TextButton from '../components/TextButton';

import { orange, white, red, green } from '../utils/colors';

class QuizView extends Component {
  static navigationOptions = () => {
    return {
      title: `Quiz`,
    };
  };

  state = {
    deck: {},
    isLoading: true,
    actualCard: 0,
    questionsCounter: 0,
    displayQuestion: true,
    displayScore: false,
    questionsCorrect: 0,
  };

  componentDidMount() {
    const { deckId } = this.props.navigation.state.params;
    const { decks } = this.props;

    this.setState(state => {
      return {
        ...state,
        deck: decks[deckId],
        questionsCounter: decks[deckId].questions.length,
        isLoading: false,
      };
    });
  }

  toggleQuestion = () => {
    let { displayQuestion } = this.state;

    this.setState(state => {
      return {
        ...state,
        displayQuestion: !displayQuestion,
      };
    });
  };

  submitAnswer = type => {
    let { actualCard, displayQuestion, questionsCounter, questionsCorrect } = this.state;

    let sumCorrect = questionsCorrect;

    if (type === 'Correct') {
      sumCorrect += 1;
    }

    this.setState(state => {
      return actualCard + 1 === questionsCounter
        ? {
            ...state,
            displayScore: true,
            questionsCorrect: sumCorrect,
          }
        : {
            ...state,
            actualCard: actualCard + 1,
            displayQuestion: true,
            questionsCorrect: sumCorrect,
          };
    });
  };

  resetQuiz = () => {
    this.setState(state => {
      return {
        ...state,
        actualCard: 0,
        questionsCorrect: 0,
        displayQuestion: true,
        displayScore: false,
      };
    });
  };

  getScore() {
    let { questionsCorrect, questionsCounter } = this.state;

    let percentage = questionsCorrect / questionsCounter * 100;
    percentage = percentage.toString();
    if (percentage.length > 3) percentage = percentage.substring(0, 4);

    return (
      <View style={styles.questionAnswerContainer}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Sua pontuação:</Text>
        <Text style={{ fontSize: 45, fontWeight: 'bold', textAlign: 'center' }}>{percentage}%</Text>
      </View>
    );
  }

  render() {
    const { decks, navigation } = this.props;
    const {
      deck,
      isLoading,
      actualCard,
      displayQuestion,
      displayScore,
      questionsCounter,
    } = this.state;

    if (isLoading === true) {
      return <AppLoading />;
    }

    return displayScore ? (
      <View style={styles.container}>
        {this.getScore()}

        <View style={styles.answerButtonsContainer}>
          <Button buttonAlternative={true} onPress={this.resetQuiz}>
            Tentar novamente
          </Button>
          <Button onPress={() => this.props.navigation.goBack()}>Fechar</Button>
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {actualCard + 1}/{deck.questions.length}
          </Text>
        </View>

        <View style={styles.questionAnswerContainer}>
          <Text style={styles.questionAnswerText}>
            {displayQuestion
              ? deck.questions[actualCard].question
              : deck.questions[actualCard].answer}
          </Text>
          <TextButton onPress={this.toggleQuestion}>
            {displayQuestion ? 'Resposta' : 'Pergunta'}
          </TextButton>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonCorrect}
            onPress={() => this.submitAnswer('Correct')}>
            <Text style={styles.buttonText}>Correto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrong} onPress={() => this.submitAnswer('Wrong')}>
            <Text style={styles.buttonText}>Errado</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 20,
  },
  questionAnswerContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  questionAnswerText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonWrong: {
    backgroundColor: red,
    padding: 20,
    marginBottom: 10,
  },
  buttonCorrect: {
    backgroundColor: green,
    padding: 20,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: white,
    fontSize: 20,
  },
});

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(QuizView);
