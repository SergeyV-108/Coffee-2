<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$mail->CharSet = "UTF-8";
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

//От кого письмо
$mail->setFrom('serg.v.portfolio@gmail.com');
//Кому отправить
$mail->addAddress('serg.v.portfolio@gmail.com');
//Тема письма
$mail->Subject = 'Форма из портфолио';

//Тело письма
$body = '<h1>Здравствуйте</h1>';
//Проверка заполнения форм
if(trim(!empty($_POST['name']))){
	$body.='<p><stong>Имя:</stong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><stong>E-mail:</stong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
	$body.='<p><stong>Сообщение:</stong> '.$_POST['message'].'</p>';
}
$mail->Body = $body;
//Отправляем
if (!$mail->send()) {
	$message = 'Error';
}else{
	$message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>