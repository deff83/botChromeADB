/**
 * 
 */
package com.Deff83.Binance;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.List;

import com.binance.api.client.domain.market.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.Deff83.sign.Signture;
import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.account.Account;
import com.binance.api.client.domain.account.AssetBalance;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * @author Deff83
 *
 */
public class APIBinance {
	private final Logger logger = LogManager.getLogger(APIBinance.class);
	private final String APIKEY = "RVhKoUCmMyjqoThhoUa8Q9XpLh8RZQxFJuBNG5LbKSuUMDh6gN7Qayun1hnTIAiW";
	private final String  SECRETCODE = "Z2OTQTpDVJhZRgRHxkhNgrNp7WA0QpQIsf2wzSeLhEBe8hqGRleLPn7Nc6AmdGor";
	BinanceApiClientFactory factory;
	BinanceApiRestClient binance_client;
	
	//My requests
	OkHttpClient client_okhttp;
	
	private static APIBinance apiBinance = new APIBinance();
	private APIBinance() {
		factory = BinanceApiClientFactory.newInstance(APIKEY, SECRETCODE);
		binance_client = factory.newRestClient();
		binance_client.ping();
		client_okhttp = new OkHttpClient();
	}
	public static APIBinance getinstance() {return apiBinance;}
	public Long getServerTime() { return binance_client.getServerTime();}
	public List<AssetBalance> getBalance() {
		// TODO Auto-generated method stub
		Account account = binance_client.getAccount();
		return account.getBalances();
	}
	public List<AggTrade> getLastAgreg(String par, long startTime, long endTime) {
		return binance_client.getAggTrades(par, null, 10, startTime, endTime);
	}

	public List<Candlestick> getGraf(String par, CandlestickInterval interval, int sizeGrf, Long startTime, Long endTime) {
		return binance_client.getCandlestickBars(par, interval, sizeGrf, startTime, endTime);

	}

	public TickerPrice getPrice(String par) {
		return binance_client.getPrice(par);

	}

	public List<TickerStatistics> getPriceTable(){

		return binance_client.getAll24HrPriceStatistics();
	}


	public String getStatuse() throws IOException, NoSuchAlgorithmException, InvalidKeyException{
		long timestamp = new Date().getTime();
		String params_for_sign = "timestamp="+timestamp;
		String signature = Signture.getHmacSHA256(SECRETCODE, params_for_sign);
		String params = "?timestamp="+timestamp+"&signature="+signature;
		Request request = new Request.Builder()
				.addHeader("X-MBX-APIKEY", APIKEY)
				.url("https://api.binance.com/wapi/v3/apiTradingStatus.html"+params)
				.build();
		try(Response response = client_okhttp.newCall(request).execute()){
			return response.body().string();
		}
	}
}
