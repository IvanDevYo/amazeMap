<?php

function debug($str) {
	echo '<pre>';
	var_dump($str);
	echo '</pre>';
	exit;
}

$file = file_get_contents('json/points.json');
$json = json_decode($file,TRUE);

$lat = $_POST["lat"];
$lang = $_POST["lang"];

if(!empty($json["features"])) {
	die($json["features"]);
}