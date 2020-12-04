var sectionListaTarefas = document.getElementById('listaTarefas');

// Ouvindo o botão apagar para deletar as tarefas.
ouveBtnApagar();

// Ouvindo as caixas de seleção para marcar ou desmarcar as tarefas.
ouveCaixasSelecao();

// Ouvindo o botão submit para adicionar tarefas
var btnClicado = document.getElementById('form-entradaTarefas');


btnClicado.addEventListener('submit', function (e) {
    e.preventDefault();
    var tarefa = document.getElementById('inp-Tarefa');
    addTarefa(tarefa.value);
    tarefa.value = "";
});

function addTarefa(txtTarefa) {
    let todasTarefas = document.querySelectorAll("div.div-tarefa");

    let maior = 0;

    if (todasTarefas.length != 0) {

        // Cria um array com os ids das tarefas
        let idsTarefas = [];
        for (i = 0; i < todasTarefas.length; i++) {
            idTarefa = todasTarefas[i].id.split('_');
            idsTarefas[i] = parseInt(idTarefa[1]);            
        }
        // Pega o maior valor do array
        maior = idsTarefas.reduce((a, b) => Math.max(a, b));        
    }

    // Cria um id com um valor maior que o maior valor anterior
    idTarefa = maior + 1;
    

    var divItem = document.createElement('div');
    divItem.id = 'div-tarefa_' + idTarefa;
    divItem.className = 'div-tarefa';

    var chkBoxItem = document.createElement('input');
    chkBoxItem.type = 'checkbox';
    chkBoxItem.className = 'chk-status';
    chkBoxItem.id = 'chk-tarefa_' + idTarefa;

    var spanItem = document.createElement('span');
    spanItem.className = 'tarefa';
    spanItem.id = 'sp-tarefa_' + idTarefa;
    spanItem.textContent = txtTarefa;

    var btnItem = document.createElement('button');
    btnItem.className = 'btn-apagar';
    btnItem.id = 'btn-apagar-tarefa_' + idTarefa;

    var imgItem = document.createElement('img');
    imgItem.className = "img-btn-apagar";
    imgItem.src = 'imagens/trash.svg';
    imgItem.alt = 'botão apagar';

    divItem.appendChild(chkBoxItem);
    divItem.appendChild(spanItem);
    btnItem.appendChild(imgItem);
    divItem.appendChild(btnItem);
    sectionListaTarefas.appendChild(divItem);

    caixasSelecao = document.getElementsByClassName('chk-status');
    ouveCaixasSelecao();
    ouveBtnApagar();
}

function ouveCaixasSelecao() {

    let caixasSelecao = document.getElementsByClassName('chk-status');

    for (let i = 0; i < caixasSelecao.length; i++) {
        

        let id_elemento = null;
        id_elemento = caixasSelecao[i].id.replace('chk-', 'sp-');
        caixasSelecao[i].addEventListener('click', function () {
            if (caixasSelecao[i].checked) {
                document.getElementById(id_elemento).style.textDecoration = 'line-through';
            } else {
                document.getElementById(id_elemento).style.textDecoration = 'none';
            }
        });
    }
}


function ouveBtnApagar() {

    let btnApagar = document.getElementsByClassName('btn-apagar');

    

    for (i = 0; i < btnApagar.length; i++) {
        

        let id_elemento = null;
        id_elemento = btnApagar[i].id.replace('btn-apagar-', 'div-');
        btnApagar[i].addEventListener('click', function () {

            

            let itemLista = document.getElementById(id_elemento);

            

            if (itemLista != null) {

                sectionListaTarefas.removeChild(itemLista);

            }

        });
    }
}