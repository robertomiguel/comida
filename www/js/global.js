$(document).ready(function() {
	
	  $('#ventana' ).dialog({
      position: { my: 'center', at: 'center', of: window },
      resizable: false,
	  modal: true,
      height: 655,
      width: 800,
      autoOpen: false,
      show: {
        effect: 'clip',
        duration: 500
      },
      hide: {
        effect: 'clip',
        duration: 500
      },
	  buttons: {
        Cerrar: function() {
          $( this ).dialog( "close" );
      	}
	  }
    });

});

function laura() {
	$( ".ui-dialog-title" ).html('Acerca de Laura');
	$( "#ventana" ).dialog( "open" );
	$.post("/contenido/laura.php",{},
		function(data){
			$('#contenido').html(data);
	});
}
function clientes() {
	$( ".ui-dialog-title" ).html('Clientes');
	$( "#ventana" ).dialog( "open" );
	$.post("/contenido/clientes.php",{},
		function(data){
			$('#contenido').html(data);
	});
}
function peluqueria() {
	$( ".ui-dialog-title" ).html('Peluquería');
	$( "#ventana" ).dialog( "open" );
	$.post("/contenido/peluqueria.php",{},
		function(data){
			$('#contenido').html(data);
	});
}
function banios() {
	$( ".ui-dialog-title" ).html('Baños');
	$( "#ventana" ).dialog( "open" );
	$.post("/contenido/banios.php",{},
		function(data){
			$('#contenido').html(data);
	});
}
function unias() {
	$( ".ui-dialog-title" ).html('Corte de Uñas');
	$( "#ventana" ).dialog( "open" );
	$.post("/contenido/unias.php",{},
		function(data){
			$('#contenido').html(data);
	});
}
function accesorios() {
	$( ".ui-dialog-title" ).html('Accesorios');
	$( "#ventana" ).dialog( "open" );
	$.post("/contenido/accesorios.php",{},
		function(data){
			$('#contenido').html(data);
	});
}