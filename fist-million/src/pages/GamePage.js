import React, { Component } from "react";
import { isEmpty } from "../services/helpers";
import questions from "../services/questions.json";

// audio
import correctAnswerAudio from "../assets/audio/correctAnswer.mp3";
import wrongAnswerAudio from "../assets/audio/wrongAnswer.mp3";

console.log(questions);

class GamePage extends Component {
  state = {
    questions,
    currentQuestion: {},
    nextQuestion: {},
    previousQuestion: {},
    answer: "",
    questionsNumber: 0,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
  };

  componentDidMount() {
    const { questions, currentQuestion, nextQuestion } = this.state;
    this.displayQuestions(questions, currentQuestion, nextQuestion);
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion
  ) => {
    let { currentQuestionIndex } = this.state;

    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      const answer = currentQuestion.answer;

      this.setState({
        currentQuestion,
        nextQuestion,
        answer,
      });
    }
  };

  correctAnswer = () => {
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.nextQuestion
        );
      }
    );
    document.getElementById("correct-sound").play();
  };

  incorrectAnswer = () => {
    this.setState(
      (prevState) => ({
        incorrectAnswers: prevState.incorrectAnswers + 1,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.nextQuestion
        );
      }
    );
    document.getElementById("incorrect-sound").play();
  };

  handleClick = (e) => {
    if (
      e.target.innerHTML.toLowerCase() === this.state.answer.toLocaleLowerCase()
    ) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
  };

  render() {
    const { currentQuestion } = this.state;

    return (
      <>
        <audio id="correct-sound" src={correctAnswerAudio}></audio>
        <audio id="incorrect-sound" src={wrongAnswerAudio}></audio>

        <section className="game">
          <div className="container">
            <div className="game__burger"></div>
            <h2 className="game__question-text">{currentQuestion.question}</h2>

            <ul className="game__question-list">
              <li className="game__question-item">
                <button
                  className="game__button"
                  type="button"
                  onClick={this.handleClick}
                >
                  {currentQuestion.optionA}
                </button>
              </li>

              <li className="game__question-item">
                <button
                  className="game__button"
                  type="button"
                  onClick={this.handleClick}
                >
                  {currentQuestion.optionB}
                </button>
              </li>

              <li className="game__question-item">
                <button
                  className="game__button"
                  type="button"
                  onClick={this.handleClick}
                >
                  {currentQuestion.optionC}
                </button>
              </li>

              <li className="game__question-item">
                <button
                  className="game__button"
                  type="button"
                  onClick={this.handleClick}
                >
                  {currentQuestion.optionD}
                </button>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default GamePage;
