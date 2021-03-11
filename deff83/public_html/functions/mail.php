<?php
function sendMail($mail, $subject, $message, $from){
	//подключаем phpmailer    
						require_once($_SERVER['DOCUMENT_ROOT'].'/phpmailer/PHPMailerAutoload.php');

					//получаем экземпляр
						$mailt = new PHPMailer();
					//задаём как  работать с SMTP сервером
						$mailt->isSMTP();
						$mailt->SMTPOptions = array(
							'ssl'=> array(
								'verify_peer'=> false,
								'verify_peer_name'=> false,
								'allow_self_signed'=> true
							)
							
						);
					//адрес smtp сервера
						$mailt->Host       = "smtp.gmail.com";
					//сообщения дебагера, 0-не показываем 
						$mailt->SMTPDebug  = 0;
					//если сервер требует авторизации 
						$mailt->SMTPAuth   = true;
					//тип шифрования
						$mailt->SMTPSecure = "tls";
					//порт сервера
						$mailt->Port       = 587;
					//приоритет почты, 3 - нормально 
						//$mailt->Priority    = 3;
					//кодировка
						$mailt->CharSet     = 'UTF-8';
						//$mailt->Encoding    = '8bit';
					//тема письма
						
						$mailt->ContentType = "text/html";
					//адрес почтового ящика gmail
						$mailt->Username   = "artemslanc2018@gmail.com";
					//ваш пароль от ящика
						$mailt->Password   = "bbglxxvefedojdfl";
						//$mailt->isHTML(true);
					//текст письма 
						
						//$mailt->WordWrap = 50;
					//адрес, на котоый нужно отправить письмо
					
						$mailt->setFrom('artemslanc2018@gmail.com', $from);
						$mailt->addAddress($mail);
						$mailt->Subject     = $subject;
						$mailt->Body = $message;
						if(!$mailt->send()) {
						 
						  return true;
						}
						return false;
}
?>