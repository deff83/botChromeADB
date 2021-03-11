<?php

session_start();


?>
<div>
<form method="post" action="Bitaps/withSript.php">
	<p>Адрес:<br>
	<input type="text" name="adress" value="17Mu4RdaMczu1jLmCSp2QXBAt1QHE1p9Ym"/><br>
	Сумма (min 10000):<br>
	<input type="number" name="sum" value="" step="any" min="10000"/><br>
	<input type="submit" name="Submit" value="Вывод" />
	</p>
</form>
</div>
