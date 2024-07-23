<template>
  <h1>Questions T.I.</h1>
  <h3 v-html="question"></h3>

  <br>
  <button class="btnSend" type="button">Enviar</button>
</template>

<script>
//REQUISIÇÕES (URL API)
export default {
  name: 'App',

  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
    }
  },

  //REQUESTS A CADA 5SECONDS
  async created() {
    const resposta = await this.axios.get('https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean'
    )
    this.question = resposta.data.results[0].question
  }
}

// ((response) => {
//       this.question = response.data.results[0].question
//       this.incorrectAnswers = response.data.results[0].incorrect_answers
//       this.correctAnswer = response.data.results[0].correct_answer
</script>

<style lang="scss">
#app {
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  color: #2c3e50;
  margin: 100px auto;
}

input[type=radio] {
  margin: 10px;
}

.btnSend {
  margin-top: 20px;
  padding: 10px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 160px;
  max-width: 200px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #42b983;
  }
}
</style>
