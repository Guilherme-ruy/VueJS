<template>
  <div class="margin-limit">
    <h1>Quiz Game</h1>


    <h3>Question text</h3>
    <hr>

    <input type="radio" name="options" value="True" id="True">
    <label for="True">Verdadeiro</label>

    <input type="radio" name="options" value="False" id="False">
    <label for="True">Falso</label>
    <br>
    <button>Verificar resposta</button>
  </div>
</template>

<script>
import axios from 'axios';
//API OPEN TRIVIA = https://opentdb.com/api.php?amount=1&category=18

export default {
  name: 'App',
  data() {
    return {
      api: 'https://opentdb.com/api.php?amount=1&category=18',
      triviaData: null,
    };
  },
  mounted() {
    this.getQuestions();
  },
  methods: {
    getQuestions() {
      axios.get(this.api)
        .then((response) => {
          this.triviaData = response.data;
          console.log(this.triviaData);
        })
        .catch((error) => {
          console.error('Erro ao buscar as perguntas:', error);
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  hr {
    width: 70%;
    opacity: 0.7;
  }

  .margin-limit {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  input[type=radio] {
    margin: 10px 6px;
  }
}
</style>
