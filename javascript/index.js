//VARIAVEIS PARA ACESSAR OS DADOS DA NOSSA DIV
let listElement = document.querySelector('#app ul') //=> ELE VAI ACESSAR A DIV E A UL.
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

//LISTA PARA ARMAZENAR AS TAREFAS
let tarefas = []


function adicionarTarefa(){
    if(inputElement.value === ''){
        alert('Digite alguma tarefa');
        return false;
    }
    else{
        let novaTarefa = inputElement.value; //CRIANDO UMA VARIÁVEL QUE RECEBE O VALOR DO INPUT
        tarefas.push(novaTarefa); //INSERINDO A VARIÁVEL QUE CONTÉEM OS VALORES DIGITADOS NA LISTA DE 
                                  //TAREFAS ATRAVÉS DO PUSH

        inputElement.value = ''; //ZERANDO O INPUT DEPOIS QUE ELE REGISTRAR UMA TAREFA.
        listarTarefas();
        
        console.log(tarefas);
    }

}
function listarTarefas(){
    listElement.innerHTML = '';

    tarefas.map((tarefa)=>{ 
        let liElement = document.createElement('li'); //ELE CRIA UM ELEMENTO li
        let tarefaText = document.createTextNode(tarefa); //ELE CRIA O TEXTO QUE SERÁ A TAREFA QUE FOR INSERIDA.


         //CRIANDO O ELEMENTO DE ANCORA
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        //CRIANDO TEXTO PARA ANCORA
        let = linkText = document.createTextNode('Excluir');
        //ADICIONANDO TEXTO PARA A ANCORA
        linkElement.appendChild(linkText);
        //PEGANDO A POSIÇÃO DO ELEMENTO PARA EXCLUIR
        let posicaoTarefa = tarefas.indexOf(tarefa);
        //ADICIONANDO A FUNCIONALIDADE DE EXCLUIR A ANCORA
        linkElement.setAttribute('onclick', `excluirTarefa(${posicaoTarefa})`);

        
        /*RENDERIZAÇÃO DOS ELEMENTOS E VALORES*/
        //ADICIONANDO OS VALORES DO ARRAY NO li
        liElement.appendChild(tarefaText); //ISERIR UM "filho" NA NOSSA LI (VALORES DO INPUT)
        //ADICIONANDO A ANCORA 'a' NO LI
        liElement.appendChild(linkElement);
        //ADICIONANDO A LI NA ul
        listElement.appendChild(liElement);
    })
}

function excluirTarefa(posicaoTarefa){
   tarefas.splice(posicaoTarefa, 1);
   listarTarefas();
   console.log(tarefas);
}

