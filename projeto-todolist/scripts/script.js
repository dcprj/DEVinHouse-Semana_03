var caixasSelecao = document.getElementsByClassName('chk-status');

// Ouvindo as caixas de seleção para marcar ou desmarcar as tarefas.
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