var caixasSelecao = document.getElementsByClassName('chk-status');
ouveCaixasSelecao();

// Ouvindo as caixas de seleção para marcar ou desmarcar as tarefas.


// Ouvindo o botão submit para adicionar tarefas
var btnClicado = document.getElementById('form-entradaTarefas');


btnClicado.addEventListener('submit', function (e) {    
    e.preventDefault();
    var tarefa = document.getElementById('inp-Tarefa');
    addTarefa(tarefa.value);
    tarefa.value="";
});

function addTarefa(txtTarefa) {
    var sectionListaTarefas = document.getElementById('listaTarefas');

    numTarefas = document.getElementsByClassName('tarefa').length;

    idTarefa = numTarefas + 1;

    var divItem = document.createElement('div');
    divItem.id = 'tarefa_' + idTarefa;

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
    btnItem.id = 'btn-apagar_tarefa_' + idTarefa;

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
}

function ouveCaixasSelecao() {

    for (let i = 0; i < caixasSelecao.length; i++) {
        console.log(i);

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
