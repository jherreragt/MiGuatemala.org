// areas
function dibujarT(i) {
  for (i = 0; i < presupuesto.length; i++) {
    $('#barra' + i).animate({
      width: (presupuesto[i].valor / calcularT()) * 500
    }, 400);
  }
}

function calcularT() {
  calculo = 0;
  for (i = 0; i < presupuesto.length; i++) {
    calculo = calculo + presupuesto[i].valor

  }
  return calculo;
};

// variables
var presupuesto = [{
  'nombre': 'Educacion',
  'valor': 4.5
}, {
  'nombre': 'Salud',
  'valor': 2.9
}, {
  'nombre': 'Defensa',
  'valor': 0.6
}, {
  'nombre': 'Seguridad Pública',
  'valor': 1.4
}, {
  'nombre': 'Infraestructura',
  'valor': 0.7
}, {
  'nombre': 'Seguridad social',
  'valor': 6.2
}, ];


$(document).ready(function() {
  $("#contenedorMayor").empty();
  for (i = 0; i < presupuesto.length; i++) {
    var creador = "<div class='contenedor'><label for='educacion' id='label" + i + "'></label><button id='sum' onclick = 'sumar(" + i + ")'>+</button><button id='min' class='btns' onclick = 'restar(" + i + ")'>-</button><input type='text 'id='categoria" + i + "' value='' onkeydown='valor(" + i + ")'><div class='barr' id='barra" + i + "'></div></div></br>";
    $("#contenedorMayor").append(creador);

  }
  calculo = 0;
  for (i = 0; i < presupuesto.length; i++) {
    calculo = calculo + presupuesto[i].valor

  }
  for (i = 0; i < presupuesto.length; i++) {
    $('#barra' + i).animate({
      width: (presupuesto[i].valor / calculo) * 500
    }, 400);

    $('#categoria' + i).val(presupuesto[i].valor);
    $('#label' + i).text(presupuesto[i].nombre);
  }

});

// clicks y clicks

function sumar(index) {
  presupuesto[index].valor = presupuesto[index].valor + 1;
  $('#categoria' + index).val(presupuesto[index].valor);
  dibujarT(index);
};

function restar(index) {
  presupuesto[index].valor = presupuesto[index].valor - 1;
  $('#categoria' + index).val(presupuesto[index].valor);
  dibujarT(index);

};

function valor(index) {
  if (event.keyCode == 13) {
    var nueva = $("#categoria" + index).val()
    presupuesto[index].valor = parseFloat(nueva);
    dibujarT(index)
  }
};
