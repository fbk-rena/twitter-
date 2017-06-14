var contador = 0;

function cargarPagina() {
    $('#textarea1').characterCounter();
    //ajusta el tamano de la letra
    $('#textarea1').trigger('autoresize');

    //reinicia el textarea
    $('#textarea1').val('');
    $("#enviar").click(printTweet);
};

var printTweet = function (e) {
     e.preventDefault();
        //Conetnido del tweet
        var $mensaje = $('#textarea1').val();

        //Crear elementos
        var $tarjeta = $("<div />", {
            'class': 'row'
        });
        var $contenedorCol = $("<div/>", {
            'class': 'col s 12 m6'
        });
        var $contenedor = $("<div/>", {
            'class': 'card pink accent-2'
        });
        var $contenedorText = $("<div/>", {
            'class': 'card-content white-text'
        });
        var $btnBorrar = $("<a/>", {
            'class': 'btn-floating pink right'
        });
        var $icon = $("<i/>", {
            'class': 'material-icons'
        });
        var $nuevoTweet = $("<p />").text($mensaje);

        var $iconBorrar = $icon.text("delete");

        //armar tarjeta
        $btnBorrar.append($iconBorrar);
        $contenedorText.append($nuevoTweet, $btnBorrar);
        $contenedor.append($contenedorText);
        $contenedorCol.append($contenedor);
        $tarjeta.append($contenedorCol);

        $("#tweets").prepend($tarjeta);

        //funcionalidad borrar al boton
        $btnBorrar.click(function () {
                    $(this).parent().remove();
        });
};
    
$(document).ready(cargarPagina);

