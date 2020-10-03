import React, { Component } from "react";
import { isEmpty } from '../services/helpers';
import questions from '../services/questions.json';

// audio
import correctAnswerAudio from '../assets/audio/correctAnswer.mp3';
import wrongAnswerAudio from '../assets/audio/wrongAnswer.mp3';


console.log(questions);

class GamePage extends Component {
  state = {
    questions,
    currentQuestion: {},
    nextQuestion: {}, 
    previousQuestion: {},
    answer: '',
    questionsNumber: 0,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0
  }

  componentDidMount() {
    const { questions, currentQuestion, nextQuestion } = this.state;
    this.showQuestions(questions, currentQuestion, nextQuestion); 
  }
  
  showQuestions = (questions, currentQuestion) => {
    let { nextQuestion, currentQuestionIndex } = this.state;

    if(!isEmpty(questions)){
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      const answer = currentQuestion.answer;

      this.setState({
        currentQuestion, 
        nextQuestion,
        answer,
      })
    }
  }
  
  correctAnswer = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
      correctAnswer: prevState.correctAnswer + 1, 
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }))
    document.getElementById('correct-sound').play();

  }

  incorrectAnswer = () => {
    document.getElementById('incorrect-sound').play();

  }

  handleClick = (e) => {
    if(e.target.innerHTML.toLowerCase() === this.state.answer.toLocaleLowerCase()){
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
  }

render() {
  const { currentQuestion } = this.state;

  return (
  <>
    <audio id="correct-sound" src={correctAnswerAudio}></audio>
    <audio id="incorrect-sound" src={wrongAnswerAudio}></audio>


    <section className="game container">
        <div className="game__burger"></div>
        <h2 className="game__question-text">{currentQuestion.question}</h2>

        <ul className="game__question-list">
          <li className="game__question-item">
            <button type="button" onClick={this.handleClick}>{currentQuestion.optionA}</button>
          </li>
          <li className="game__question-item">
            <button type="button" onClick={this.handleClick}>{currentQuestion.optionB}</button>
          </li>
          <li className="game__question-item">
            <button type="button" onClick={this.handleClick}>{currentQuestion.optionC}</button>
          </li>
          <li className="game__question-item">
            <button type="button" onClick={this.handleClick}>{currentQuestion.optionD}</button>
          </li>
        </ul>

    </section>
    </>
  );
}
};

export default GamePage;
