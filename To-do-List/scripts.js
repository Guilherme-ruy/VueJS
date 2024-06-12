var tarefas = [];


const todoList = {
    data() {
        return {
            tarefas: window.tarefas,
            novaTarefa: {
                done: false
            },
        }
    },

    methods: {
        addTarefa: function () {
            if (this.novaTarefa.text) {
                if (this.novaTarefa.text)
                    this.tarefas.push(this.novaTarefa);
                this.novaTarefa = {
                    done: false
                };
                localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
            } else {
                alert("Campo em branco!");
            }

        },


        limparTudo: function () {
            this.tarefas = [];
            localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
        }
    },


    created() {
        if (localStorage.getItem('tarefas')) {
            this.tarefas = JSON.parse(localStorage.getItem('tarefas'));
        }
    },
    updated() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    },
};



Vue.createApp(todoList).mount('#app');
