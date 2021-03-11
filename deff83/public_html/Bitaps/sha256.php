<?php
function sign_HMAC_signature($wallet_id, $wallet_id_hash, $password, $nonce) {
	$key = hash('sha256', $wallet_id . $password, true);
	$key = hash('sha256', $key, true);
	
		
	$msg = $wallet_id_hash . $nonce;
	
	$HMAC_signature = hash_hmac('sha256', $msg, $key);
	
	return $HMAC_signature;
	
}

?>