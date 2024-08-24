<template>
  <div id="app">
    <div v-if="isLoading" class="loading-screen">
      <p>Carregando...</p>
    </div>

    <div v-else class="margin-limit">
      <h1>Quiz Game</h1>
      <h3>Question</h3>
      <p v-if="question">{{ question }}</p>
      <hr>
      <div v-for="(answer, index) in allAnswers" :key="index">
        <input type="radio" :id="answer" :value="answer" v-model="selectedAnswer">
        <label :for="answer">{{ answer }}</label>
      </div>
      <br>
      <button @click="checkAnswer">Verificar resposta</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      isLoading: true,
      api: 'https://opentdb.com/api.php?amount=1&category=18',
      triviaData: null,
      question: '',
      incorrectAnswers: [],
      correctAnswer: '',
      selectedAnswer: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.getQuestions();
    }, 4600);
  },
  computed: {
    allAnswers() {
      return [...this.incorrectAnswers, this.correctAnswer].sort(() => Math.random() - 0.5);
    }
  },
  methods: {
    getQuestions() {
      axios.get(this.api)
        .then((response) => {
          const result = response.data.results[0];
          this.question = result.question;
          this.incorrectAnswers = result.incorrect_answers;
          this.correctAnswer = result.correct_answer;
        })
        .catch((error) => {
          console.error('Erro ao buscar as perguntas:', error);
        });
    },
    checkAnswer() {
      if (this.selectedAnswer === this.correctAnswer) {
        alert('Resposta correta!');
      } else {
        alert('Resposta incorreta. Tente novamente.');
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: sans-serif, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-screen {
    font-size: 24px;
  }

  .margin-limit {
    max-width: 600px;
    margin: 0 auto;
  }

  input[type=radio] {
    margin: 10px 5px;
  }
}
</style>