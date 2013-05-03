<?php 
    include_once ("php/post.php");
    if($_GET['tipo'] == "save"){
            $p1= $_GET['p1'];
            $conex = new Game();
            $control = $conex->insertar_usuario($p1);
            //echo $control;
            echo $control;
            
    }else if($_GET['tipo'] == "consulta"){
            $user_id= $_GET['p1'];
            //var_dump($user_id);
            //echo 'funciona';
            $conex = new game();
            $control = $conex->consulta_usuario($user_id);
            echo $control ;
            
    }else if($_GET['tipo'] == "consultausers"){
            $conex = new game();
            $control = $conex->consulta_usuarios_points();
            echo $control ;
            
    }else if($_GET['tipo'] == "update"){
            $user_id= $_GET['u1'];
            $palabra= $_GET['u2'];
            //var_dump($user_id);
            //echo 'funciona';
            $conex = new game();
            $control = $conex->update_datos($user_id, $palabra);
            echo $control ;
            
    }else if($_GET['tipo'] == "palabra_up"){
            $conex = new game();
            $control = $conex->random_palabras();
            $valor_asig = rand(1, $control);
            $control_sig = $conex->consulat_palabras($valor_asig);
            echo $control_sig;
    }else if($_GET['tipo'] == "points_up"){
            $p1= $_GET['p1'];
            $p2= $_GET['p2'];
            $conex = new game();
            $control = $conex->consulta_puntos($p1);
            $suma_puntos = $control + $p2;
            $control_upd = $conex->update_puntos($p1,$suma_puntos);
            echo $control_upd;
    }
?>