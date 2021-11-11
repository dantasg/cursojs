function listaDeTarefas () {

    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefa = document.querySelector('.tarefas');

    inputTarefa.addEventListener('keypress', function(event){
        if (event.keyCode === 13){
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });

    btnTarefa.addEventListener('click',function(event){
        if (!inputTarefa.value) return;

        criaTarefa(inputTarefa.value);
    });

    function limpaInput(){
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerText = textoInput;
        tarefa.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

    function criaBotaoApagar(li) {
        li.innerHTML += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerHTML = 'Apagar';
        // botaoApagar.classList.add('apagar');
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'Apagar esta tarefa');
        li.appendChild(botaoApagar);
        
    }

    document.addEventListener('click', function (event) {
        const el  = event.target;
        if (el.classList.contains('apagar')){
            el.parentElement.remove();
            salvarTarefas();
        }
    });

    function salvarTarefas() {
        const liTarefas = tarefa.querySelectorAll('li');
        const listaDeTarefas = [];
        for (let taref of liTarefas) {
            let tarefTexto = taref.innerText;
            tarefTexto = tarefTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefTexto);
        }
        
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            criaTarefa();
        }

    }

    adicionaTarefasSalvas();
}

listaDeTarefas();
