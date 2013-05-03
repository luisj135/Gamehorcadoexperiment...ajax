jQuery(document).ready(function($) {
	var control_veces = 0;
	var activacion_grafico = 0;
	var control_activacion = 0;
	var controlp = 0;
	var valor;
	var contador_rest = 1;
	var control_acti = 0;
	var contador_restp = 1;
	var control_actip = 0;
	var nombre;

	/*botones iniciales interaccion*/
	$("#botton_solo").click(function() {
		var apellido = aleatorio_name();
		var nombrecom = "guest_"+apellido;
		$(".inicio_selec").css("display","none");
		$("#contente .filas").css("display","none");
		$("#contente #titulo").css("display","none");
		$("#contente").append('<div id="volver_atras_ini"><h2>Usa el modo multijugador para ver estadisticas de otros usuarios</h2></br><button class="btn btn-primary boton_iniciop">Conectarse a Multijugador</button></div>');
		timmers();
		prosesos(nombrecom);
		return false;
	});
	$("#contente").click(function() {
		$("#volver_atras_ini").css("display","none");
		$("#contente .filas").css("display","block");
		$("#contente #titulo").css("display","block");
		return false;
	});

	$(".boton_inicio").click(function() {
		window.location.reload();
		return false;
	});

	$(".boton_palabra").click(function() {
		localStorage.clear();
		localStorage.setItem('controlrep_', 0);	
		 $(".letras_palabra").empty();
		 $("#letrasusadas").empty();
		 $("#parte_cuerda").css("display","none");
			$("#parte_cabeza").css("display","none");
			$("#parte_cara").css("display","none");
			$("#parte_brazo_izq").css("display","none");
			$("#parte_brazo_derecho").css("display","none");
			$("#parte_torzo").css("display","none");
			$("#parte_pierna_izq").css("display","none");
			$("#parte_pierna_dere").css("display","none");
			$("#parte_inicial").css("display","none");
			$("#parte_final").css("display","none");
			control_veces = 0;
			activacion_grafico = 0;
			control_activacion = 0;
			controlp = 0;
			valor;
			contador_rest = 1;
			control_acti = 0;
			contador_restp = 1;
			control_actip = 0;
		 $(".close").click();
		 control_veces = 0;
		inicial();
		return false;
	});

	$(".boton_inicio_fin").click(function() {
		window.location.reload();
		return false;
	});

	$(".boton_palabra_fin").click(function() {
		localStorage.clear();
		localStorage.setItem('controlrep_', 0);	
		 $(".letras_palabra").empty();
		 $("#letrasusadas").empty();
		 $("#parte_cuerda").css("display","none");
			$("#parte_cabeza").css("display","none");
			$("#parte_cara").css("display","none");
			$("#parte_brazo_izq").css("display","none");
			$("#parte_brazo_derecho").css("display","none");
			$("#parte_torzo").css("display","none");
			$("#parte_pierna_izq").css("display","none");
			$("#parte_pierna_dere").css("display","none");
			$("#parte_inicial").css("display","none");
			$("#parte_final").css("display","none");
			control_veces = 0;
			activacion_grafico = 0;
			control_activacion = 0;
			controlp = 0;
			valor;
			contador_rest = 1;
			control_acti = 0;
			contador_restp = 1;
			control_actip = 0;
		 $(".close").click();
		 control_veces = 0;
		inicial();
		return false;
	});
	

	$(".boton_inicio_time").click(function() {
		window.location.reload();
		return false;
	});

	$("#boton_multi").click(function() {
		$(".inicio_selec").css("display","none");
		$(".inicio").css("display","block");
		$(".btn-large").click(function(e) {
			e.preventDefault();
			nombre = $('.input-block-level').val();
			prosesos(nombre);
			timmers();
			return false;
		});
		return false;
	});
	function timmers(){
		$('#time').chrony({
		  minute: 15,
		  finish: function() {
		    $('#myModal_time').modal('show');
		  }
		});
	}
	
	function inicial(){
		$.ajax({
				url: "consultasajax.php?tipo=palabra_up",
				cache: false
				}).done(function(html) {
				var lagpala = html.length;
				var i;
				var retornoletrashtml = "";
				localStorage.clear();
				localStorage.setItem('controlrep_', 0);	
				for(i=0 ; i<lagpala ; i++){
						//var "letra"+[i] = html[i];
						if('localStorage' in window && window['localStorage'] !== null) {
								
							    localStorage.setItem('palabra_cant', lagpala);
								localStorage.setItem('letra_'+i+'', html[i]);
						} else { 
								alert('Como seguimos utilizando un navegador viejo, Santa Claus no nos traerá nada esta Navidad'); 
						}
						
						retornoletrashtml = retornoletrashtml + "<div id='"+i+"' class='letrasapp'></div>"
					}
				$(".letras_palabra").append(retornoletrashtml);					
				});
	}
	function prosesos(nombre_ini){
			nombre = nombre_ini;
			if (nombre !=''){
				console.log(nombre);
				
				function user_id(nombre_usuario){
				     var name = nombre_usuario;

					if (window.XMLHttpRequest)
					  {// code for IE7+, Firefox, Chrome, Opera, Safari
					  xmlhttp=new XMLHttpRequest();
					  }
					else
					  {// code for IE6, IE5
					  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
					  }
				          //alert (id);
				    xmlhttp.onreadystatechange=function()
					  {
					  if (xmlhttp.readyState==4 && xmlhttp.status==200)
					    {
					     if(xmlhttp.responseText != ''){
					     	var id = xmlhttp.responseText;
					     	$(".inicio").css("display","none");
					     	$(".game").css("display","block");

					     	$(document).keypress(function(event) {
					     		control_veces = parseInt(control_veces) + parseInt(1);
					     		localStorage.setItem('controlrep_', ret_letra);
					     		var ret_letra = listadeteclas(event.which);
					     		var retorno_letras = "";
					     		valor = localStorage.getItem('palabra_cant');
					     		if(valor != control_veces){
					     			if(localStorage.getItem('letrasusadas_'+ret_letra+'')== ret_letra){

						     		}else{
							     		retorno_letras = retorno_letras + "<section class='span1'><p>"+ret_letra+"</p></section>";
							     		$("#letrasusadas").append(retorno_letras);
							     		localStorage.setItem('letrasusadas_'+ret_letra+'', ret_letra);

							     		var i;
							     		var control;
							     		var existen_control;
							     		var control_grafico = 0;
							     		for(i = 0; i<valor ; i++){
							     			control = localStorage.getItem('letra_'+i+'');

							     			if(control == ret_letra){
							     				$("#"+i+"").append(ret_letra);
							     				$.getJSON("consultasajax.php?tipo=points_up&p1="+id+"&p2="+10+"",function(datapoints){
							     					//alert(datapoints);
							     					$("#cambio_pp").empty();
							     					if(datapoints == 1){
							     						$.getJSON("consultasajax.php?tipo=consulta&p1="+id,function(data){
												     		nombreini = data.usuario_id[0].usuario;
												     		puntajeini = data.usuario_id[0].points;
												     		if (puntajeini == ''){
												     			puntajeini = 0;
												     		}
												     		var user_reto = puntajeini;
															$("#cambio_pp").append(user_reto);
												     	});
												     	$.getJSON("consultasajax.php?tipo=consultausers",function(datap){
												     		$(".filas").empty();
												     		var totalusers = datap.usuario_id.length;
												     		var i;
												     		for(i = 0; i<5; i++){
												     			nombreinip = datap.usuario_id[i].usuario;
													     		puntajeinip = datap.usuario_id[i].points;
													     		if (puntajeini == ''){
													     			puntajeini = 0;
													     		}
													     		var user_list = '<div class="nombre_label span8"><p>Nombre:</p><h4>'+nombreinip+'</h4></div><div class="puntosusuaariop span3"><p>Puntaje</p><p>'+puntajeinip+'</p></div>';
																$(".filas").append(user_list);
												     		}
												     	});
							     					}else{
							     						$(".boton_palabra").click();
							     					}
										     		//var totalusers = datap.usuario_id.length;
										     		//var i;
											     		//var user_list = '<div class="nombre_label"><p>Nombre:</p><h2>"'+nombreinip+'"</h2></div><div class="puntosusuaario"><p>Puntaje</p><p>'+puntajeinip+'</p></div>';
														//$(".filas").append(user_list);
										     	});
							     				contador_actip = valor - contador_restp;
												if (valor != contador_restp){
													contador_restp++;
												}
												if(contador_actip == 0){
													$('#myModal_fin').modal('show');
												}
							     			}else{
							     				control_grafico++;
							     				controlp = valor - control_grafico;
							     			}
							     		}
						     		}
						     		graficos(controlp);
					     		}else{
					     			
					     		}
					     		
					     	});

					     	$.getJSON("consultasajax.php?tipo=consulta&p1="+id,function(data){
					     		
					     		nombreini = data.usuario_id[0].usuario;
					     		puntajeini = data.usuario_id[0].points;
					     		if (puntajeini == ''){
					     			puntajeini = 0;
					     		}
					     		var user_reto = '<div class="nombre_label"><p>Nombre:</p><h2>"'+nombreini+'"</h2></div><div class="puntosusuaario"><p>Puntaje</p><div id="cambio_pp"><p>'+puntajeini+'</p></div></div>';
								$(".enlace_ret").append(user_reto);
					     	});
					     	$.getJSON("consultasajax.php?tipo=consultausers",function(datap){
					     		var totalusers = datap.usuario_id.length;
					     		var i;
					     		for(i = 0; i<5; i++){
					     			nombreinip = datap.usuario_id[i].usuario;
						     		puntajeinip = datap.usuario_id[i].points;
						     		if (puntajeini == ''){
						     			puntajeini = 0;
						     		}
						     		var user_list = '<div class="nombre_label span8"><p>Nombre:</p><h4>'+nombreinip+'</h4></div><div class="puntosusuaariop span3"><p>Puntaje</p><p>'+puntajeinip+'</p></div>';
									$(".filas").append(user_list);
					     		}
					     	});
					     	inicial();
					     }
					    }
					  }
				    xmlhttp.open("GET","consultasajax.php?tipo=save&p1="+name,true);
				    xmlhttp.send();
				}
				user_id(nombre);
			}
			else{
				$(".input-block-level").css("border","4px solid red");
				$(".input-block-level").css("color","red");
			}
			return false;
	}

	function listadeteclas(tecla){
		var charCode = tecla;
		var textBox = " ";
		if (charCode == 65) textBox = "A"; // A
		if (charCode == 66) textBox = "B"; // W
		if (charCode == 67) textBox = "C"; // C
		if (charCode == 68) textBox = "D"; // D
		if (charCode == 69) textBox = "E"; // E
		if (charCode == 70) textBox = "F"; // F
		if (charCode == 71) textBox = "G"; // G
		if (charCode == 72) textBox = "H"; // H
		if (charCode == 73) textBox = "I"; // I
		if (charCode == 74) textBox = "J"; // J
		if (charCode == 75) textBox = "K"; // K
		if (charCode == 76) textBox = "L"; // L
		if (charCode == 77) textBox = "M"; // M
		if (charCode == 78) textBox = "N"; // N
		if (charCode == 79) textBox = "O"; // O
		if (charCode == 80) textBox = "P"; // P
		if (charCode == 81) textBox = "Q"; // Q
		if (charCode == 82) textBox = "R"; // R
		if (charCode == 83) textBox = "S"; // S
		if (charCode == 84) textBox = "T"; // T
		if (charCode == 85) textBox = "U"; // U
		if (charCode == 86) textBox = "V"; // V
		if (charCode == 87) textBox = "W"; // W
		if (charCode == 88) textBox = "X"; // X
		if (charCode == 89) textBox = "Y"; // Y
		if (charCode == 90) textBox = "Z"; // Z
		if (charCode == 97) textBox = "a"; 
		if (charCode == 98) textBox = "b"; 
		if (charCode == 99) textBox = "c"; 
		if (charCode == 100) textBox = "d"; 
		if (charCode == 101) textBox = "e"; 
		if (charCode == 102) textBox = "f"; 
		if (charCode == 103) textBox = "g"; 
		if (charCode == 104) textBox = "h"; 
		if (charCode == 105) textBox = "i"; 
		if (charCode == 106) textBox = "j"; 
		if (charCode == 107) textBox = "k";
		if (charCode == 108) textBox = "l"; 
		if (charCode == 109) textBox = "m"; 
		if (charCode == 110) textBox = "n"; 
		if (charCode == 111) textBox = "o"; 
		if (charCode == 112) textBox = "p"; 
		if (charCode == 113) textBox = "q"; 
		if (charCode == 114) textBox = "r"; 
		if (charCode == 115) textBox = "s"; 
		if (charCode == 116) textBox = "t"; 
		if (charCode == 117) textBox = "u"; 
		if (charCode == 118) textBox = "v"; 
		if (charCode == 119) textBox = "w"; 
		if (charCode == 120) textBox = "x"; 
		if (charCode == 121) textBox = "y"; 
		if (charCode == 122) textBox = "z"; 

		return textBox;
	}

	function dibujos_activos(numero_stado){
		if(numero_stado == 10){
			$("#parte_final").css("margin-top","300px");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 20){
			$("#parte_final").css("margin-top","-2px");
			$("#parte_inicial").css("margin-top","4px");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 30){
			$("#parte_cabeza").css("margin-top","30px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_inicial").css("margin-top","-106px");
			$("#parte_cabeza").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 40){
			$("#parte_cabeza").css("margin-top","30px");
			$("#parte_inicial").css("margin-top","-106px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_cabeza").css("display","block");
			$("#parte_cara").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 50){
			$("#parte_cabeza").css("margin-top","30px");
			$("#parte_torzo").css("margin-top","-2px");
			$("#parte_torzo").css("margin-left","176px");
			$("#parte_inicial").css("margin-top","-228px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_cabeza").css("display","block");
			$("#parte_cara").css("display","block");
			$("#parte_torzo").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 60){
			$("#parte_cabeza").css("margin-top","30px");
			$("#parte_torzo").css("margin-top","-2px");
			$("#parte_torzo").css("margin-left","20px");
			$("#parte_inicial").css("margin-top","-228px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_cabeza").css("display","block");
			$("#parte_cara").css("display","block");
			$("#parte_brazo_izq").css("display","block");
			$("#parte_torzo").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 70){
			$("#parte_cabeza").css("margin-top","30px");
			$("#parte_torzo").css("margin-top","-2px");
			$("#parte_torzo").css("margin-left","-38px");
			$("#parte_inicial").css("margin-top","-182px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_cabeza").css("display","block");
			$("#parte_cara").css("display","block");
			$("#parte_brazo_izq").css("display","block");
			$("#parte_brazo_derecho").css("display","block");
			$("#parte_torzo").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 80){
			$("#parte_cabeza").css("margin-top","30px");
			$("#parte_torzo").css("margin-top","-2px");
			$("#parte_torzo").css("margin-left","-38px");
			$("#parte_inicial").css("margin-top","-182px");
			$("#parte_pierna_izq").css("margin-top","100px");
			$("#parte_pierna_izq").css("margin-left","-65px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_cabeza").css("display","block");
			$("#parte_cara").css("display","block");
			$("#parte_brazo_izq").css("display","block");
			$("#parte_brazo_derecho").css("display","block");
			$("#parte_torzo").css("display","block");
			$("#parte_pierna_izq").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 90){
			$("#parte_cabeza").css("margin-top","30px");
			$("#parte_torzo").css("margin-top","-2px");
			$("#parte_torzo").css("margin-left","-38px");
			$("#parte_inicial").css("margin-top","-285px");
			$("#parte_pierna_izq").css("margin-top","100px");
			$("#parte_pierna_izq").css("margin-left","-65px");
			$("#parte_pierna_dere").css("margin-top","101px");
			$("#parte_pierna_dere").css("margin-left","-9px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_cabeza").css("display","block");
			$("#parte_cara").css("display","block");
			$("#parte_brazo_izq").css("display","block");
			$("#parte_brazo_derecho").css("display","block");
			$("#parte_torzo").css("display","block");
			$("#parte_pierna_izq").css("display","block");
			$("#parte_pierna_dere").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
		else if(numero_stado == 100){
			$("#parte_cabeza").css("margin-top","-2px");
			$("#parte_torzo").css("margin-top","-2px");
			$("#parte_torzo").css("margin-left","-38px");
			$("#parte_inicial").css("margin-top","-285px");
			$("#parte_pierna_izq").css("margin-top","100px");
			$("#parte_pierna_izq").css("margin-left","-65px");
			$("#parte_pierna_dere").css("margin-top","101px");
			$("#parte_pierna_dere").css("margin-left","-9px");
			$("#parte_final").css("margin-top","-2px");
			$("#parte_cuerda").css("display","block");
			$("#parte_cabeza").css("display","block");
			$("#parte_cara").css("display","block");
			$("#parte_brazo_izq").css("display","block");
			$("#parte_brazo_derecho").css("display","block");
			$("#parte_torzo").css("display","block");
			$("#parte_pierna_izq").css("display","block");
			$("#parte_pierna_dere").css("display","block");
			$("#parte_inicial").css("display","block");
			$("#parte_final").css("display","block");
		}
	}

	function graficos(control){
		if (control == 0){
					contador_acti = valor - contador_rest;
					if (valor != contador_rest){
						contador_rest++;
					}
					
					//lert(contador_acti);
					//alert(contador_rest);
					activacion_grafico = contador_acti * 100 / 10;
					activacion_grafico = 100 - activacion_grafico; 
					//alert(activacion_grafico.toFixed(0));
					dibujos_activos(activacion_grafico.toFixed(0));
					if(contador_acti == 0){
						$('#myModal').modal('show');
					}

		}
	}

	function formatCurrency(num) {
		num = num.toString().replace(/\$|\,/g,'');
		if(isNaN(num)) num = "0";
		sign = (num == (num = Math.abs(num)));
		num = Math.floor(num*100+0.50000000001);
		cents = num%100;
		num = Math.floor(num/100).toString();
		if(cents<10) cents = "0" + cents;
		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		num = num.substring(0,num.length-(4*i+3))+
		num.substring(num.length-(4*i+3));
				
		return (((sign)?'':'-') + num );
	}

	function aleatorio_name(){
		var i;
		var aleatorio;
		for (i=0 ; i<=6 ; i++){
			aleatorio = Math.round(Math.random()*10);
			aleatorio = aleatorio + aleatorio;
		}
		return aleatorio;
	}

});