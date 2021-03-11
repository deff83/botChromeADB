/**
 * 
 */
package com.Deff83.sign;

import java.nio.charset.Charset;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


/**
 * @author Deff83
 *
 */
public class Signture {
	private static final Logger logger = LogManager.getLogger(Signture.class);
	private Signture() {}
	public static String getHmacSHA256(String key, String text) throws NoSuchAlgorithmException, InvalidKeyException {
		final Charset asciiCs = Charset.forName("US-ASCII");
		final Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
		final SecretKeySpec secret_key = new javax.crypto.spec.SecretKeySpec(asciiCs.encode(key).array(), "HmacSHA256");
		sha256_HMAC.init(secret_key);
		final byte[] mac_data = sha256_HMAC.doFinal(asciiCs.encode(text).array());
		String result = "";
		for (final byte element : mac_data) { 
			result += Integer.toString((element & 0xff) + 0x100, 16).substring(1); 
		} 
		logger.info(result);
		return result;
	}
}
