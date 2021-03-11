/**
 * 
 */
package com.Deff83;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

import org.junit.Ignore;
import org.junit.Test;

import com.Deff83.Binance.APIBinance;
import com.binance.api.client.domain.market.CandlestickInterval;

/**
 * @author Deff83
 *
 */
public class TestBinance {
	ScreenShot screen = new ScreenShot();
	APIBinance apiBinance = APIBinance.getinstance();
	@Test
	public void testDesktop() {
		BufferedImage bufImage;
		try {
			bufImage = screen.getBufferedImageScreen();
			screen.saveImage(bufImage, "C:\\Users\\1\\Desktop\\screen\\save0");
			int w = bufImage.getWidth();
			int h = bufImage.getHeight();
			System.out.println("Start");
			User32Library.user32.SystemParametersInfo(0x0014, 10, "C:\\Users\\1\\Desktop\\screen\\save0.png", 10);
			System.out.println("END");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@Ignore
	@Test
	public void testServerTime() {
		System.out.println(apiBinance.getServerTime());
	}
	@Ignore
	@Test
	public void testAPIBinanceTriggerCondition() {
		try {
			System.out.println(apiBinance.getStatuse());
		} catch (NoSuchAlgorithmException | IOException | InvalidKeyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@Ignore
	@Test
	public void testLastAgreg() {
		long nowTime = new Date().getTime();
		long interval = 3000;
		System.out.println(apiBinance.getLastAgreg("BTCUSDT", nowTime-interval, nowTime));
	}
	@Ignore
	@Test
	public void testGraf() {
		CandlestickInterval interval_candl = CandlestickInterval.FIVE_MINUTES;
		System.out.println(apiBinance.getGraf("BTCUSDT", interval_candl, 1300, null, null));
		testAPIBinanceTriggerCondition();
	}
}
