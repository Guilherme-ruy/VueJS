<template>
  <div id="app">
    <div v-if="isLoading" class="loading-screen">
      <p>Carregando...</p>
    </div>



    <div v-else class="margin-limit">
      <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount" />
      <h3>Question</h3>
      <p v-if="question" v-html="question"></p>
      <hr>
      <div v-for="(answer, index) in allAnswers" :key="index">
        <input :disabled="this.answerSubmitted" type="radio" :id="answer" :value="answer" v-model="selectedAnswer">
        <label :for="answer" v-html="answer"></label>
      </div>
      <br>
      <button v-if="!this.answerSubmitted" @click="checkAnswer">Verificar resposta</button>
    </div>

    <section v-if="this.answerSubmitted" id="result">
      <h5 v-if="this.selectedAnswer === this.correctAnswer">Muito bem! Você acertou</h5>

      <h5 v-else v-html="'Não foi desta vez :C A resposta correta era ' +
        correctAnswer
        "> </h5>

      <button @click="loadQuestionWithDelay">Proxima pergunta</button>
    </section>
  </div>
</template>

<script>
import ScoreBoard from './components/ScoreBoard.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    ScoreBoard
  },
  data() {
    return {
      isLoading: true,
      api: 'https://opentdb.com/api.php?amount=1&category=18',
      question: '',
      incorrectAnswers: [],
      correctAnswer: '',
      selectedAnswer: null,
      answerSubmitted: false,
      winCount: 0,
      loseCount: 0,
    };
  },
  mounted() {
    this.loadQuestionWithDelay();
  },
  computed: {
    allAnswers() {
      return [...this.incorrectAnswers, this.correctAnswer].sort(() => Math.random() - 0.5);
    }
  },
  methods: {
    loadQuestionWithDelay() {
      this.isLoading = true; // Ativa a tela de carregamento
      setTimeout(() => {
        this.isLoading = false; // Desativa a tela de carregamento após o delay
        this.getQuestions();
      }, 4600);
    },
    getQuestions() {
      this.answerSubmitted = false;
      this.selectedAnswer = null;
      this.question = undefined;
      axios.get(this.api)
        .then((response) => {
          const result = response.data.results[0];
          this.question = result.question;
          this.incorrectAnswers = result.incorrect_answers;
          this.correctAnswer = result.correct_answer;
          this.selectedAnswer = null; // Limpa a resposta selecionada ao carregar uma nova pergunta
        })
        .catch((error) => {
          console.error('Erro ao buscar as perguntas:', error);
        });
    },
    checkAnswer() {
      if (!this.selectedAnswer) {
        alert('Escolha uma opção')
      } else {
        this.answerSubmitted = true;
        if (this.selectedAnswer == this.correctAnswer) {
          this.winCount++;
          console.log('Resposta correta!');
        } else {
          console.log('Resposta incorreta. Tente novamente.');
          this.loseCount++;
        }
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
  flex-direction: column;
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