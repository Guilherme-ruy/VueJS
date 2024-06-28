<template>

<hr>

<div>
  <h1>Quantas perguntas terá</h1>
</div>

<input type="radio" name="options" value="True">
<label>True</label>
<br>
<input type="radio" name="options" value="True">
<label>False</label>
<br>
<button class="btnSend" type="button">Enviar</button>

</template>

<script>
//REQUISIÇÕES (URL API)
//https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean
export default {
  name: 'App',
}

created() {
  
}
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
