var caixasSelecao = document.getElementsByClassName('chk-status');
console.log(caixasSelecao);

for (let i = 0; i < caixasSelecao.length; i++) {
    caixasSelecao[i].addEventListener('click', function () {
        if (caixasSelecao[i].checked) {
            id = caixasSelecao[i].id.replace('chk-', 'sp-');
            document.getElementById(id).style.textDecoration = 'line-through';
        } else {
            id = caixasSelecao[i].id.replace('chk-', 'sp-');
            document.getElementById(id).style.textDecoration = 'none';
        }

    });
}