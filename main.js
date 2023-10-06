$(document).ready(function () {
    $('form').on('submit', function(e){
        e.preventDefault();
        var novaTarefa = $("#lista-de-tarefas");
        var novaTarefaLi = $("<li>");
        var novaTarefaSpan = $("<span>").text(novaTarefa.val());

        novaTarefaLi.append(novaTarefaSpan);
        $("#lista").append(novaTarefaLi);
        $("#lista-de-tarefas").val("");

        novaTarefaSpan.click(function () {
            $(this).toggleClass("feito");
        });
    });
});