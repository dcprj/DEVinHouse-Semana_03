var tarefasObj = [];
var sectionListaTarefas = document.getElementById('listaTarefas');
var caixasSelecao = document.getElementsByClassName('chk-status');
var btnApagar = document.getElementsByClassName('btn-apagar');
var idTarefa = 0;

// Carrega items do localStorage
carregaLocalStorage()

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

    idTarefa += 1;

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

    tarefasObj.push({
        "id": idTarefa,
        "tarefa": txtTarefa,
        "status": false
    });

    tarefasStr = JSON.stringify(tarefasObj);

    localStorage.setItem('tarefas', tarefasStr);


    caixasSelecao = document.getElementsByClassName('chk-status');
    ouveCaixasSelecao();
    btnApagar = document.getElementsByClassName('btn-apagar');
    ouveBtnApagar();
}

function ouveCaixasSelecao() {
    caixasSelecao = document.getElementsByClassName('chk-status');
    let id_elemento = null;
    for (const caixaSelecao of caixasSelecao) {
        caixaSelecao.addEventListener('click', function () {
            id_elemento = caixaSelecao.id.replace('chk-', 'sp-');
            if (caixaSelecao.checked) {
                document.getElementById(id_elemento).style.textDecoration = 'line-through';
            } else {
                document.getElementById(id_elemento).style.textDecoration = 'none';
            }
        });
    }
}


function ouveBtnApagar() {
    btnApagar = document.getElementsByClassName('btn-apagar');
    let id_elemento = null;
    for (const btn of btnApagar) {
        btn.addEventListener('click', function () {
            id_elemento = btn.id.replace('btn-apagar-', 'div-');
            console.log(id_elemento);
            let itemLista = document.getElementById(id_elemento);
            if (itemLista != null) {
                sectionListaTarefas.removeChild(itemLista);

                // cria um novo array com os ids
                let listaDeIds = tarefasObj.map((e) => e.id);
                console.log(listaDeIds);

                // busca o indice do array pelo id

                console.log('id_elemento = ' + id_elemento);
                let auxiliar = id_elemento.split('_');
                let indiceDeletar = parseInt(auxiliar[1]);
                console.log('indiceDeletar = ' + indiceDeletar);
                let indice = listaDeIds.indexOf(indiceDeletar);
                console.log(indice);
                tarefasObj.splice(indice, 1);
                console.log(tarefasObj);

                tarefasStr = JSON.stringify(tarefasObj);

                localStorage.setItem('tarefas', tarefasStr);



            }
        });
    }
}

function carregaLocalStorage() {
    let tarefasStr = localStorage.getItem('tarefas');

    if (tarefasStr != null) {

        tarefasObj = JSON.parse(tarefasStr);

        let tarefa = null;

        for (i = 0; i < tarefasObj.length; i++) {

            tarefa = tarefasObj[i];
            idTarefa = tarefasObj[i].id;

            var divItem = document.createElement('div');
            divItem.id = 'div-tarefa_' + idTarefa;
            divItem.className = 'div-tarefa';

            var chkBoxItem = document.createElement('input');
            chkBoxItem.type = 'checkbox';
            chkBoxItem.className = 'chk-status';
            chkBoxItem.checked = tarefa.status;
            chkBoxItem.id = 'chk-tarefa_' + idTarefa;

            var spanItem = document.createElement('span');
            spanItem.className = 'tarefa';
            spanItem.id = 'sp-tarefa_' + idTarefa;

            if (tarefa.status) {
                spanItem.textContent = tarefa.tarefa;
                spanItem.style.textDecoration = 'line-through'
            } else {
                spanItem.textContent = tarefa.tarefa;
            }

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
        }
    }
    
}