<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_cnx = "localhost";
$database_cnx = "sweetscl_juego";
$username_cnx = "sweetscl_jueapp";
$password_cnx = "facto8117731";
$cnx = mysql_pconnect($hostname_cnx, $username_cnx, $password_cnx) or trigger_error(mysql_error(),E_USER_ERROR); 
?>