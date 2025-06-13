<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$textarea = $_POST['text'];
$token = "7878735396:AAFcafREplyEd80GN9jxM4n84GP5n2KGcPk";
$chat_id = "-1002811449230";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'text' => $textarea
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Message sent";
} else {
  echo "Error";
}
?>