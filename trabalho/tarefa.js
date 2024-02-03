let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR OS CAMPINHOS
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}

input.addEventListener("keyup", function (event) {
  //SE TECLOU ENTER (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
var toastCounter = 1;

$('button').on('click', function() {
	var msg = $(this).attr('msg');
	var icon = $(this).attr('icon');
	var icon_color = $(this).attr('icon-color');
	var animation = $(this).attr('animation');

	displayToastNotification(msg, icon, icon_color, animation);
});

function displayToastNotification( msg, icon, icon_color, animation ) {
	var class_name = 'toast-'+toastCounter;
	var new_node;

	new_node = $('.master-toast-notification').clone().appendTo('.toasts').addClass(class_name + ' toast-notification').removeClass('master-toast-notification');
	new_node.find('.toast-msg').text(msg);
	new_node.find('.toast-icon i').addClass(icon);
	new_node.find('.toast-icon').addClass('wiggle-me').css('background-color', icon_color);
	new_node.removeClass('hide-toast').addClass(animation);
	setTimeout(function() {
		new_node.remove();
	}, 3800);
	toastCounter++;
}
