<?php
	include_once ("cnx.php");
 	class Game {
        
        public function strip_html_tags($text)
        {
            $text = preg_replace(
                array(
                  // Remove invisible content
                    '@<head[^>]*?>.*?</head>@siu',
                    '@<style[^>]*?>.*?</style>@siu',
                    '@<script[^>]*?.*?</script>@siu',
                    '@<object[^>]*?.*?</object>@siu',
                    '@<embed[^>]*?.*?</embed>@siu',
                    '@<applet[^>]*?.*?</applet>@siu',
                    '@<noframes[^>]*?.*?</noframes>@siu',
                    '@<noscript[^>]*?.*?</noscript>@siu',
                    '@<noembed[^>]*?.*?</noembed>@siu',
                  // Add line breaks before and after blocks
                    '@</?((address)|(blockquote)|(center)|(del))@iu',
                    '@</?((div)|(h[1-9])|(ins)|(isindex)|(p)|(pre))@iu',
                    '@</?((dir)|(dl)|(dt)|(dd)|(li)|(menu)|(ol)|(ul))@iu',
                    '@</?((table)|(th)|(td)|(caption))@iu',
                    '@</?((form)|(button)|(fieldset)|(legend)|(input))@iu',
                    '@</?((label)|(select)|(optgroup)|(option)|(textarea))@iu',
                    '@</?((frameset)|(frame)|(iframe))@iu',
                ),
                array(
                    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
                    "\n\$0", "\n\$0", "\n\$0", "\n\$0", "\n\$0", "\n\$0",
                    "\n\$0", "\n\$0",
                ),
                $text );
            return strip_tags($text);
        }
        
        public function insertar_usuario($username) {
            $user = $this->strip_html_tags($username);
            $fecha = date("Y-m-d H:i:s");
            mysql_select_db("sweetscl_juego");
            $mQuery ="INSERT INTO `sweetscl_juego`.`usuario` (
                `id_usuario`, 
                `usuaroo`, 
                `points`, 
                `fecha_cred`, 
                `fecha_update`) 
                VALUES (
                    NULL, 
                    '".$user."', 
                    NULL, 
                    '".$fecha."', 
                    CURRENT_TIMESTAMP);";
            //return $mQuery;
            mysql_query($mQuery);
            return mysql_insert_id();
        } 
        
        public function insertar_puntos($id_usuario, $points_user) {
            $puntos = $this->strip_html_tags($points_user);
            mysql_select_db("sweetscl_juego");
            $mQuery ="INSERT INTO 
            `sweetscl_juego`.
            `points` 
            (`id_points`, 
                `id_user`, 
                `points`) 
            VALUES (
                NULL, 
                '".$id_usuario."', 
                '".$puntos."');
                ";
            mysql_query($mQuery) ;
            $id = mysql_insert_id();
            return $id;
        }
	 
	 public function consulta_usuario ($id_usuario){
            $id_usuario = $this->strip_html_tags($id_usuario);
            mysql_select_db("sweetscl_juego");
			$mQuery = "SELECT *  FROM `usuario` WHERE `id_usuario` = ".$id_usuario."";
		    $resultado = mysql_query($mQuery) ;
            //return $mQuery;
                if (mysql_num_rows($resultado)== 0){
                    
                    return "false"; 
                    
                }else{
                    $totales = mysql_num_rows($resultado);
                    $i = 0;
                    $resta = $totales - 1;
                    $variable = 'usuario';
                    $idusuarios = 'id';
                    $points = 'points';
                     while ($row = mysql_fetch_array($resultado)) {
                     if($i==$resta) {$puntuacion = "";}
                        else{$puntuacion = ",";}
                      $cuerpo =  $cuerpo.'{"'.$variable.'":"'.$row['usuaroo'].'","'.$idusuarios.'":"'.$row['id_usuario'].'","'.$points.'":"'.$row['points'].'"}'.$puntuacion;
                      $i++;   

                    }
                    $jsonfijo = '{"usuario_id":['.$cuerpo.']}';
                    return $jsonfijo;
                    
                }
                
                //return $resultado;*/
	}

    public function consulta_usuarios (){
            mysql_select_db("sweetscl_juego");
            $mQuery = "SELECT * FROM `usuario` LIMIT 0 , 30";
            $resultado = mysql_query($mQuery) ;
                //return $mQuery;
                if (mysql_num_rows($resultado)== 0){
                    
                    return "false"; 
                    
                }else{
                    $totales = mysql_num_rows($resultado);
                    $i = 0;
                    $resta = $totales - 1;
                    $variable = 'usuario';
                    $idusuarios = 'id';
                    $points = 'points';
                     while ($row = mysql_fetch_array($resultado)) {
                     if($i==$resta) {$puntuacion = "";}
                        else{$puntuacion = ",";}
                      $cuerpo =  $cuerpo.'{"'.$variable.'":"'.$row['usuaroo'].'","'.$idusuarios.'":"'.$row['id_usuario'].'","'.$points.'":"'.$row['points'].'"}'.$puntuacion;
                      $i++;   

                    }
                    $jsonfijo = '{"usuario_id":['.$cuerpo.']}';
                    return $jsonfijo;
                    
                }
                
                //return $resultado;*/
        }

        public function consulta_usuarios_points (){
            mysql_select_db("sweetscl_juego");
            $mQuery = "SELECT * FROM `usuario` ORDER BY `usuario`.`points` DESC";
            $resultado = mysql_query($mQuery) ;
                //return $mQuery;
                if (mysql_num_rows($resultado)== 0){
                    
                    return "false"; 
                    
                }else{
                    $totales = mysql_num_rows($resultado);
                    $i = 0;
                    $resta = $totales - 1;
                    $variable = 'usuario';
                    $idusuarios = 'id';
                    $points = 'points';
                     while ($row = mysql_fetch_array($resultado)) {
                     if($i==$resta) {$puntuacion = "";}
                        else{$puntuacion = ",";}
                      $cuerpo =  $cuerpo.'{"'.$variable.'":"'.$row['usuaroo'].'","'.$idusuarios.'":"'.$row['id_usuario'].'","'.$points.'":"'.$row['points'].'"}'.$puntuacion;
                      $i++;   

                    }
                    $jsonfijo = '{"usuario_id":['.$cuerpo.']}';
                    return $jsonfijo;
                    
                }
                
                //return $resultado;*/
        }
        
        public function consulta_usuario_puntos($objeto){
                $objeto = strip_html_tags($objeto);
                mysql_select_db("sweetscl_juego");
			    $mQuery = "SELECT *  FROM `palabras` WHERE `id_facebook` = '$objeto'";
		        $resultado = mysql_query($mQuery) ; 
                $totales = mysql_num_rows($resultado);
                $i = 0;
                $resta = $totales - 1;
                $variable = 'usuario';
                $idpalabra = 'puntos';
                while ($row = mysql_fetch_array($resultado)) {
                       if($i==$resta) {$puntuacion = "";}
                        else{$puntuacion = ",";}
                      $cuerpo =  $cuerpo.'{"'.$variable.'":"'.$row['ususaroo'].'","'.$idpalabra.'":"'.$row['puntos'].'"}'.$puntuacion;
                      $i++;
                    }
                    
                    $jsonfijo = '{"usuarios":['.$cuerpo.']}';
                    return $jsonfijo;
            }
            
        
        public function update_puntos($id_usuario, $puntos){
                mysql_select_db("sweetscl_juego");
			$mQuery = "UPDATE `sweetscl_juego`.`usuario` SET `points` = '".$puntos."' WHERE `usuario`.`id_usuario` = '".$id_usuario."';";
		      $resultado = mysql_query($mQuery) ;              
                return $resultado;
            }

        public function random_palabras(){
            mysql_select_db("sweetscl_juego");
            $mQuery = "SELECT * FROM `palabras`;";
            $resultado = mysql_query($mQuery) ; 
            $totales_pa = mysql_num_rows($resultado);             
            return $totales_pa;
            }

        public function consulat_palabras($id_palabra){
                mysql_select_db("sweetscl_juego");
                $mQuery = "SELECT * FROM `palabras` WHERE `id_palabra` =".$id_palabra.";";
                $resultado = mysql_query($mQuery) ; 
                while ($row = mysql_fetch_array($resultado)) {
                    $palabra_ret = $row['palabra'];
                }             
                return $palabra_ret;
            }

        public function consulta_puntos($id_usuario){
                mysql_select_db("sweetscl_juego");
                $mQuery = "SELECT * FROM `usuario` WHERE `id_usuario` =".$id_usuario.";";
                $resultado = mysql_query($mQuery) ; 
                while ($row = mysql_fetch_array($resultado)) {
                    $palabra_ret = $row['points'];
                }             
                return $palabra_ret;
            }
  }
?>