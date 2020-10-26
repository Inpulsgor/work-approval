import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

import { isEmpty } from "../services/helpers";
import questions from "../services/questions.json";

// audio
import countdown from "../assets/audio/countdown.mp3";
import correctAnswerAudio from "../assets/audio/correctAnswer.mp3";
import wrongAnswerAudio from "../assets/audio/wrongAnswer.mp3";
import timeIsOf from "../assets/audio/timeIsOf.mp3";

import { ReactComponent as Answer } from "../assets/answer.svg";

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
<<<<<<< HEAD
  }
=======
    incorrectAnswers: 0,
    // minutes: 2,
    // seconds: 0,
  };
>>>>>>> 5ebc9dfb716af87e976b61e1045f060171608d93

  componentDidMount() {
    // document.getElementById("start-sound").play();

    const { questions, currentQuestion, nextQuestion } = this.state;
    this.displayQuestions(questions, currentQuestion, nextQuestion);

    // this.myInterval = setInterval(() => {
    //   const { seconds, minutes } = this.state;

    //   if (seconds > 0) {
    //     this.setState(({ seconds }) => ({
    //       seconds: seconds - 1,
    //     }));
    //   }
    //   if (seconds === 0) {
    //     if (minutes === 0) {
    //       document.getElementById("start-sound").pause();
    //       document.getElementById("time-off").play();
    //       this.myInterval2 = setInterval(() => {
    //         this.props.history.push("/end");
    //       }, 4000);
    //       clearInterval(this.myInterval);
    //     } else {
    //       this.setState(({ minutes }) => ({
    //         minutes: minutes - 1,
    //         seconds: 59,
    //       }));
    //     }
    //   }
    // }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval2);
    // clearInterval(this.myInterval);
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
<<<<<<< HEAD
    this.setState(prevState => ({
      score: prevState.score + 1,
      correctAnswers: prevState.correctAnswers + 1, 
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }))
    document.getElementById('correct-sound').play();
  }

  incorrectAnswer = () => {
    document.getElementById('incorrect-sound').play();
    setTimeout(() => {
      this.props.history.push('/end')
    }, 3000);

  }
=======
    this.setState(
      (prevState) => ({
        // score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        score:
          prevState.score === 0
            ? (prevState.score += 500)
            : prevState.score * 2,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.nextQuestion
        );
      }
    );
    // document.getElementById("start-sound").pause();
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
    // document.getElementById("start-sound").pause();
    document.getElementById("incorrect-sound").play();
    this.myInterval2 = setInterval(() => {
      this.props.history.push("/end");
    }, 3000);
    // this.props.history.push("/end");
  };
>>>>>>> 5ebc9dfb716af87e976b61e1045f060171608d93

  handleClick = (e) => {
    if (
      e.target.innerHTML.toLowerCase() === this.state.answer.toLocaleLowerCase()
    ) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
  };

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const { currentQuestion } = this.state;

    return (
      <>
        <audio id="start-sound" src={countdown}></audio>
        <audio id="correct-sound" src={correctAnswerAudio}></audio>
        <audio id="incorrect-sound" src={wrongAnswerAudio}></audio>
        <audio id="time-off" src={timeIsOf}></audio>

        <Menu width={"100%"} noOverlay></Menu>

        <section className="game">
          <div className="container">
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

// <div className="timer">
//   {minutes === 0 && seconds === 0 ? (
//     <h1>Time Remaining {`${minutes}:0${seconds}`}</h1>
//   ) : (
//     <h1>
//       Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//     </h1>
//   )}
// </div>;
