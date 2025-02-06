class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }

  // 4. shuffleQuestions()
  shuffleQuestions() {
    let currentElement;
    for (let i = this.questions.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      currentElement = this.questions[i];
      this.questions[i] = this.questions[rand];
      this.questions[rand] = currentElement;
    }
    return this.questions;
  }

  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer) {
      this.correctAnswers += 1;
    }
  }

  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    } else if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }
  }
}


