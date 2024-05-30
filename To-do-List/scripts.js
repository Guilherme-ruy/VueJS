var tarefas = [
    {
        text: "Tarefa 1",
        done: false

    },

    {
        text: "Tarefa 2",
        done: false
    },

    {
        text: "Tarefa 3",
        done: false
    },
]


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
            } else {
                alert("Campo em branco!");
            }

        }
    }
};



Vue.createApp(todoList).mount('#app');
