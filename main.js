$(document).ready(function() {
    
    $('#formTarefa').on('submit', function(e) {
    e.preventDefault()

    const addNovaTarefa = $('#tarefa').val()

    const novaTarefa = $('<li></li>').text(addNovaTarefa)

    $('#listaTarefas').append(novaTarefa)
        $('#listaTarefas').click(function() {
            $(this).css("text-decoration", "line-through")
        })
    })
})