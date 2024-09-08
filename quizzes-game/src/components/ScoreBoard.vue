<template>
    <section class="score">
        Player <span>{{ this.winCount }}</span> X <span>{{ this.loseCount }}</span> Computer
    </section>
    <hr>
</template>


<script>
export default {
    name: "ScoreBoard",
    props: ['winCount', 'loseCount'],
};
</script>


<style>
section.score {
    font-size: 24px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 16px;
}

section.score span {
    font-weight: bold;
    padding: 8px;
    border: 1px solid black
}
</style>