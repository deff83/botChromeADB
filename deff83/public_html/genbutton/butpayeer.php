<?php
   session_start();
 ?>
<html>
<head>
  <meta charset="UTF-8">
	<style>
		input.red-border{
			border: 1px solid red;
			width:100%;
			height:20px;
			font:  bold 14px Arial, serif;
			-moz-border-radius: 5px; /* Firefox */
			-webkit-border-radius:  5px; /* Safari 4 */
			border-radius:  5px; /* IE 9, Safari 5, Chrome */
		}
		
	</style>
  <script>
	window.onload = init_payeer;

function init_payeer(){
	var price_exist_payeer = 0;
	price_exist_payeer = <?php
		session_start();
		if(isset($_GET['price_payeer'])){$price_payeer = $_GET['price_payeer'];};
		if (empty($price_payeer) ){$_SESSION['pricebuy'] = 0; echo 0;} else {
			$_SESSION['pricebuy'] = $price_payeer;
			echo 1;};
	?>;
	if (price_exist_payeer==1){
		
		postpayeer();
	}else{
		
		var button_payeer = document.getElementById("buy_addr");
		button_payeer.onclick = handleButtonClick_payeer;
	}
	
}
function SHA1(msg){function rotate_left(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;};function lsb_hex(val){var str='';var i;var vh;var vl;for(i=0;i<=6;i+=2){vh=(val>>>(i*4+4))&0x0f;vl=(val>>>(i*4))&0x0f;str+=vh.toString(16)+vl.toString(16);} 
return str;};function cvt_hex(val){var str='';var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);} 
return str;};function Utf8Encode(string){string=string.replace(/\r\n/g,'\n');var utftext='';for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);} 
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);} 
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}} 
return utftext;};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;msg=Utf8Encode(msg);var msg_len=msg.length;var word_array=new Array();for(i=0;i<msg_len-3;i+=4){j=msg.charCodeAt(i)<<24|msg.charCodeAt(i+1)<<16|msg.charCodeAt(i+2)<<8|msg.charCodeAt(i+3);word_array.push(j);} 
switch(msg_len % 4){case 0:i=0x080000000;break;case 1:i=msg.charCodeAt(msg_len-1)<<24|0x0800000;break;case 2:i=msg.charCodeAt(msg_len-2)<<24|msg.charCodeAt(msg_len-1)<<16|0x08000;break;case 3:i=msg.charCodeAt(msg_len-3)<<24|msg.charCodeAt(msg_len-2)<<16|msg.charCodeAt(msg_len-1)<<8|0x80;break;} 
word_array.push(i);while((word_array.length % 16)!=14)word_array.push(0);word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++)W[i]=word_array[blockstart+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;} 
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;} 
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;} 
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;} 
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;} 
var temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();} 
	function postpayeer(){
		document.getElementById("summ_payeer").value =<?php echo $_SESSION['pricebuy']; ?>;
		
		var inputadd = document.createElement("input");
		inputadd.type = "hidden";
		inputadd.name="success_url";
		var  success_code_prom = "<?php
			$login = $_SESSION['login'];
			include ($_SERVER['DOCUMENT_ROOT']."/bd.php");
			$result = mysql_query("SELECT * FROM users WHERE login='$login'",$db);
			$myrow = mysql_fetch_array($result);
			$balance = $myrow['balance'];
			$promez = $login.$balance;
			$secretcode = sha1($promez);
			echo $promez;
		?>";
		
		var success_code = SHA1("<?php echo $_SESSION['pricebuy']; ?>test"+success_code_prom+"test");
		//type=payeer
		inputadd.value = String.fromCharCode(104,116,116,112,58,47,47,115,57,50,57,49,48,55,110,46,98,101,103,101,116,46,116,101,99,104,47,103,101,110,98,117,116,116,111,110,47,115,117,99,99,101,115,115,98,117,121,46,112,104,112,63,116,121,112,101,61,112,97,121,101,101,114,38,115,101,99,114,101,116,99,111,100,101,61)+success_code;
		
		var posterel_payeer = document.getElementById("poster_payeer");
		posterel_payeer.appendChild(inputadd);
		
		
		var inputaddsign = document.createElement("input");
		inputaddsign.type = "hidden";
		inputaddsign.name="m_sign";
		inputaddsign.value = "<?php
				include ($_SERVER['DOCUMENT_ROOT']."/ini/Config.php");
				$login = $_SESSION['login'];
				$m_shop = $Config_m_shop_payeer;
				$m_orderid = '12345';
				$m_curr = 'RUB';
				$formcomment = "Invest-Ferma (".$login.")";
				$m_desc = base64_encode($formcomment);
				$m_key = '18819801s';
				$arHash = array(
						$m_shop,
						$m_orderid,
						money_format('%.2n', $_SESSION['pricebuy']),
						$m_curr,
						$m_desc
					);
					
			/*	$secretcode = sha1($pr."test".$_SESSION['login'].$balance."test");
	$success_url = "http://s929107n.beget.tech/genbutton/successbuy.php?secretcode=".$secretcode."&type=crypto";
				$arParams = array(
						'success_url' => 'http://s929107n.beget.tech',
					);
				// Формируем ключ для шифрования
				$key = md5('18819801s'.$m_orderid);
				// Шифруем дополнительные параметры
				$m_params = urlencode(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, $key, json_encode($arParams), MCRYPT_MODE_ECB)));
				
				$arHash[] = $m_params;*/
$arHash[] = $m_key;
				
				$sign = strtoupper(hash('sha256', implode(':', $arHash)));
				echo $sign;
			?>";
		posterel_payeer.appendChild(inputaddsign);
		//alert(inputadd.value+"\n"+"<?php echo $_SESSION['pricebuy']; ?>test"+success_code_prom+"test"+"\n"+inputaddsign.value+"\n");
		document.getElementById("poster_payeer").submit();
		
	}
function handleButtonClick_payeer() {
	function isNumeric(n) {
	   return !isNaN(parseFloat(n)) && isFinite(n);
	}
	var summs = document.getElementById("summ_payeer").value.replace(',', '.');
	
	if(isNumeric(summs)) 
	{
		summs = Math.floor(summs * 100) / 100;
	   //число
	   if (summs < 2){
		   document.getElementById("summ_payeer").className = "red-border";
	   }else{
		   document.location.href="<?php echo $_SERVER['REQUEST_URI']?>?price_payeer=" + summs;

	   }
	}else{   //"не число"
		document.getElementById("summ_payeer").className = "red-border";
	}

}



  </script>

  </head>
<body>

<form method="post" action="https://payeer.com/merchant/" id="poster_payeer">
<div class="texthelpbuy">Сумма пополнения в рублях</div>
	<?php
		include ($_SERVER['DOCUMENT_ROOT']."/ini/Config.php");
		$login = $_SESSION['login'];
		$m_shop = $Config_m_shop_payeer;
		$m_orderid = '12345';
		$m_curr = 'RUB';
		$formcomment = "Invest-Ferma (".$login.")";
		$m_desc = base64_encode($formcomment);
		
		
		echo "<input type='hidden' name='m_shop' value='".$m_shop."'>";
		echo "<input type='hidden' name='m_orderid' value='".$m_orderid."'>";
		echo "<input type='hidden' name='m_curr' value='".$m_curr."'>";
		echo "<input type='hidden' name='m_desc' value='".$m_desc."'>";
		
		
	
	?>
	<input id='summ_payeer' name='m_amount'  type='text' placeholder='25.00' min='2' maxlength='10' step='0.01' required pattern='[0-9]+([.][0-9]+)?' data-type='number' class='inputbuy'>


	
	
</form>

<div class='textchange'>25 RUB - 10 000 монет</div>
<input type='submit' value='Пополнить' id='buy_addr' class='butbuy'>
</body>

</html>