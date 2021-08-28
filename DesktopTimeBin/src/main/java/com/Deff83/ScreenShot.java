package com.Deff83;

import java.text.SimpleDateFormat;
import java.util.*;

import javax.imageio.ImageIO;

//import org.json.JSONObject;

import com.Deff83.Analize.Analize;
import com.Deff83.Analize.PatternMy;
import com.Deff83.Binance.APIBinance;
import com.binance.api.client.domain.market.Candlestick;
import com.binance.api.client.domain.market.CandlestickInterval;
import com.binance.api.client.domain.market.TickerStatistics;

import java.awt.AWTException;
import java.awt.Canvas;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.awt.image.WritableRaster;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;


public class ScreenShot {
	private SimpleDateFormat formatter = new SimpleDateFormat("HH:mm");
	private APIBinance apiBinance = APIBinance.getinstance();

	private Analize analize = new Analize();
	private boolean bool_analise = true;

	public ScreenShot() {
		// TODO Auto-generated constructor stub
	}
	
	public BufferedImage getBufferedImageScreen() throws Exception {
		
		Rectangle rect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
		int w = rect.width;
		int h = rect.height;
		
		BufferedImage buffer = new BufferedImage(w, h, BufferedImage.TYPE_BYTE_INDEXED);
		
		Graphics g = buffer.getGraphics();
		File fileimg = null;
		BufferedImage img = null;
		//TODO change folder
		try {
			fileimg = new File(Config.imgfon_file);
			img = ImageIO.read(fileimg);
		}catch (Exception e){
			Config.change_folder();
			fileimg = new File(Config.imgfon_file);
			img = ImageIO.read(fileimg);
		}

		g.drawImage(img , 0, 0,w,h, null);
		g.setColor(Color.WHITE);
		//g.fillRect(850, 100, 300, 300);
		try(BufferedReader br = new BufferedReader(new FileReader(Config.url_file))){
			int x = Integer.valueOf(br.readLine());
			if (x==0) {
				x = (int) Math.round(Math.random()*2)+1;
			}
			switch (x){
			case 1:
				g.setColor(Color.decode(getColorRandomn()));
				drawPoligon(g, w, h);
				drawTime(g);
				break;
			case 2:
				int col = (int) Math.round(Math.random()*10)+1;
				for(int k=0; k<col; k++) {
				g.setColor(Color.decode(getColorRandomn()));
				drawUzor(g, w, h);
				}
				drawTime(g);
				break;
			case 3:
				drawRandomnGrap(g,w,h);
				drawTime(g);
				break;
			case 4:
				drawBitoc(g,w,h);
				drawTime(g);
				break;
			case 5:
				drawBitTable(g, w, h);
				break;
			}
		}
		catch (Exception e1) {
			e1.printStackTrace();
		}
		
		
		drawRect(g, w);
		//�����

		
		return buffer;
	
	}

	private void drawTime(Graphics g){
		Calendar now = Calendar.getInstance();
		g.setColor(Color.WHITE);
		Font font = new Font("Arial", Font.BOLD|Font.ITALIC, 100);
		g.setFont(font);
		g.drawString(formatter.format(now.getTime()), 800, 200);
		//System.out.println(now.getTime().getHours());
		//System.out.println(now.getTime().getMinutes());
		if (now.getTime().getHours()==4 && now.getTime().getMinutes()==0){
			bool_analise = true;
		}
	}

	private void drawBitTable(Graphics g, int w, int h) {
		String table_para = "";
		int sixeblock = 100;

		double maxpercent = 10;
		double maxpercentwhite = 50;


		try(BufferedReader br = new BufferedReader(new FileReader(Config.url_file))){
			br.readLine();
			br.readLine();
			br.readLine();
			br.readLine();
			br.readLine();

			table_para = br.readLine();
			sixeblock = Integer.parseInt(br.readLine());
			maxpercent = Double.parseDouble(br.readLine());
			maxpercentwhite = Double.parseDouble(br.readLine());
		}
		catch (Exception e1) {
			e1.printStackTrace();
		}
		String[] mass_para = table_para.split("&");



		List<String> list_mass_para = Arrays.asList(mass_para);


		if (mass_para.length == 0) return;

		List<TickerStatistics> listprices = apiBinance.getPriceTable();

		Font font = new Font("Arial", Font.BOLD|Font.ITALIC, 15);
		g.setFont(font);

		int k = 0;
		int maxl = (int) Math.floor(w/sixeblock);

		for(int i=0; i<listprices.size(); i++){
			TickerStatistics statistics = listprices.get(i);

			if (list_mass_para.contains(statistics.getSymbol())) {

				try {

					//if((open-close)>=0) {

					Double percent = Double.parseDouble(statistics.getPriceChangePercent());

					int float_R = 255;//
					int float_G = 255;
					int float_B = 0;

					if (percent>0) {
						float_R = 70;//
						float_G = (int) ((percent * 185) / maxpercent)+70;
						if (float_G>255) float_G = 255;
						float_B = 0;

					}
					if (percent<0) {
						//Math.abs(percent)
						float_R = (int) ((Math.abs(percent) * 185) / maxpercent) +70;//

						System.out.println(percent);
						System.out.println(float_R);
						if (float_R>255) float_R = 255;
						float_G = 70;
						float_B = 0;
					}
					if (percent>maxpercentwhite){
						float_R = 255;
						float_G = 255;
						float_B = 255;
					}
					if (percent<-maxpercentwhite){
						float_R = 0;
						float_G = 0;
						float_B = 100;
					}



					float[] hsb = Color.RGBtoHSB(float_R, float_G, float_B, null);

					g.setColor(Color.getHSBColor(hsb[0], hsb[1], hsb[2]));
						g.fillRect((k%maxl)*sixeblock, ((int) Math.floor(k/maxl))*sixeblock, sixeblock, sixeblock);
					//}
					int len = statistics.getSymbol().length();
						g.setColor(Color.BLACK);
					g.drawString(statistics.getSymbol() , (k%maxl)*sixeblock + (int) (sixeblock*5/10) - len*6, ((int) Math.floor(k/maxl))*sixeblock+(int) (sixeblock*4/10));
					g.drawString(percent+"", (k%maxl)*sixeblock + (int) (sixeblock*5/10) - len*4, ((int) Math.floor(k/maxl))*sixeblock+(int) (sixeblock*4/10)+20);


				} catch (Exception e) {
				}
				k++;

			}
		}

	}


	public void saveImage(BufferedImage bufferedImage, String filename) throws IOException {
		File file = new File(filename+".png");
		ImageIO.write(bufferedImage, "PNG", file);
	}
	public int[][] pixelsArray(BufferedImage bufferedImage,int w, int h){
		int[][] pixels = new int[w][h];
		int y = 0;
		for(int i = 0; i<h; i++) {
			
			for(int j = 0; j<w; j++) {
				
				pixels[j][i] = bufferedImage.getRGB(j, i);
				if(y<1000) {
					Color c = new Color(pixels[j][i]);
					
				}
				y++;
			}
		}
		return pixels;
	}
	public BufferedImage getRedBufferedImage(int[][] pixels, int w, int h) {
		BufferedImage bufferedImage = new BufferedImage(w, h, BufferedImage.TYPE_BYTE_INDEXED);
		WritableRaster raster = (WritableRaster) bufferedImage.getRaster();
		int[] pixelsline = new int[w*h];
		
		for(int i = 0; i<h; i++) {
			
			for(int j = 0; j<w; j++) {
				Color c = new Color(pixels[j][i]);
				bufferedImage.setRGB(j, i, c.getRGB());
				
			}
		}
		
		return bufferedImage;
	}
	public void drawRect(Graphics g, int w) {
		//�������������
				int nado = 100; 
				int esti = 50;
				try(BufferedReader br = new BufferedReader(new FileReader(Config.url_file))){
					br.readLine();
					nado = Integer.valueOf(br.readLine());
					esti = Integer.valueOf(br.readLine());
				} 
				catch (Exception e1) {
					e1.printStackTrace();
				}
				int wid = (int) (esti*w)/nado;
				g.fillRect(0, 0, wid, 1);
	}
	public void drawPoligon(Graphics g, double w, double h) {

		int col = (int) Math.round(Math.random()*50);
		int[] polX = new int[col];
		int[] polY = new int[col];
		for(int i = 0; i<col; i++) {
			polX[i] = (int) Math.round(Math.random()*w);
			polY[i] = (int) Math.round(Math.random()*h);
		}
		
		
		g.fillPolygon(polX, polY, col);
	}
	public String getColorRandomn() {
		String colorstr = "#";
		for(int i=0;i<6;i++) {
			int colorbyte = (int)  Math.round(Math.random()*15);
			String colorstrbyte = ""+colorbyte;
			switch(colorbyte) {
			case 10:
				colorstrbyte = "A";
				break;
			case 11:
				colorstrbyte = "B";
				break;
			case 12:
				colorstrbyte = "C";
				break;
			case 13:
				colorstrbyte = "D";
				break;
			case 14:
				colorstrbyte = "E";
				break;
			case 15:
				colorstrbyte = "F";
				break;
			}
			colorstr += colorstrbyte;
		}
		return colorstr;
	}
	
	private void drawBitoc(Graphics g, int w, int h) {
		// TODO Auto-generated method stub
		int inter = 0;
		String inter_para = "";
		try(BufferedReader br = new BufferedReader(new FileReader(Config.url_file))){
			br.readLine();
			br.readLine();
			br.readLine();
			inter = Integer.valueOf(br.readLine());
			inter_para = br.readLine();
		}
		catch (Exception e1) {
			e1.printStackTrace();
		}
		CandlestickInterval interval_candl;
		String interStr = "";
		switch(inter) {
		case 0:
			interval_candl = CandlestickInterval.ONE_MINUTE;
			interStr = "1m";
			break;
		case 1:
			interval_candl = CandlestickInterval.THREE_MINUTES;
			interStr = "3m";
			break;
		case 2:
			interval_candl = CandlestickInterval.FIVE_MINUTES;
			interStr = "5m";
			break;
		case 3:
			interval_candl = CandlestickInterval.FIFTEEN_MINUTES;
			interStr = "15m";
			break;
		case 4:
			interval_candl = CandlestickInterval.HALF_HOURLY;
			interStr = "30m";
			break;
		case 5:
			interval_candl = CandlestickInterval.HOURLY;
			interStr = "1H";
			break;
		case 6:
			interStr = "2H";
			interval_candl = CandlestickInterval.TWO_HOURLY;
			break;
		case 7:
			interval_candl = CandlestickInterval.FOUR_HOURLY;
			interStr = "4H";
			break;
		case 8:
			interval_candl = CandlestickInterval.SIX_HOURLY;
			interStr = "6H";
			break;
		case 9:
			interval_candl = CandlestickInterval.EIGHT_HOURLY;
			interStr = "8H";
			break;
		case 10:
			interval_candl = CandlestickInterval.TWELVE_HOURLY;
			interStr = "12H";
			break;
		case 11:
			interval_candl = CandlestickInterval.DAILY;
			interStr = "1D";
			break;
		case 12:
			interval_candl = CandlestickInterval.THREE_DAILY;
			interStr = "3D";
			break;
		case 13:
			interval_candl = CandlestickInterval.WEEKLY;
			interStr = "1W";
			break;
		case 14:
			interval_candl = CandlestickInterval.MONTHLY;
			interStr = "1M";
			break;
		default:
			interStr = "1D";
			interval_candl = CandlestickInterval.DAILY;
		}

		//System.out.println(interStr);

		int hsize = h;
		int wsize = 400;


		String[] mass_para = inter_para.split("&");
		if (mass_para.length == 0) return;

		List<Candlestick> listGraf =  apiBinance.getGraf(mass_para[0], interval_candl, (int) (wsize-0.15*wsize), null, null);
		double maxPrice = Double.parseDouble(listGraf.get(0).getOpen());
		double minPrice = maxPrice;
		double maxVol = 0.0;
		g.setColor(Color.WHITE);

		//TODO min max price

		for (Candlestick candl:listGraf) {
			double open = Double.parseDouble(candl.getOpen());
			if(open>maxPrice) maxPrice=open;
			if(open<minPrice) minPrice=open;
			double close = Double.parseDouble(candl.getClose());
			if(close>maxPrice) maxPrice=close;
			if(close<minPrice) minPrice=close;
			double high = Double.parseDouble(candl.getHigh());
			if(high>maxPrice) maxPrice=high;
			if(high<minPrice) minPrice=high;
			double low = Double.parseDouble(candl.getLow());
			if(low>maxPrice) maxPrice=low;
			if(low<minPrice) minPrice=low;
			double vol = Double.parseDouble(candl.getVolume());
			if (maxVol<vol) maxVol = vol;
		}
		double koeff_Y = hsize/(maxPrice-minPrice);

		//TODO analize
		if (bool_analise ||  analize.getList().size() == 0) {
			analize.clearList();
			for (int i = 0; i < listGraf.size(); i++) {

				Candlestick candl = listGraf.get(i);
				analize.analize_bar(candl, i);

			}
			System.out.println("here");
			bool_analise = false;
		}
		List<PatternMy>  listj = analize.getList();
		Font font_my = new Font("Arial", Font.BOLD|Font.ITALIC, 9);
		g.setFont(font_my);
		for (int i = 0; i<listj.size(); i++) {
			PatternMy patternMy = listj.get(i);
			int time_my = patternMy.getTime_int();

			try {

				g.setColor(Config.grey);
				g.fillRect(time_my*w/wsize+(w/wsize)/2, 0, 1, hsize);
				g.setColor(analize.getColorAnalize(patternMy.getSymbol()));
				g.drawString(patternMy.getSymbol(), time_my*w/wsize, 300);
			}catch (Exception e){};
		}

		// TODO paint graf
		for (int i = 0; i<listGraf.size(); i++) {

			Candlestick candl = listGraf.get(i);
			double vol = Double.parseDouble(candl.getVolume());

			double open = Double.parseDouble(candl.getOpen());
			double close = Double.parseDouble(candl.getClose());
			double high = Double.parseDouble(candl.getHigh());
			double low = Double.parseDouble(candl.getLow());
			if((open-close)>=0) {
				g.setColor(Config.red);
				g.fillRect(i*w/wsize, hsize-(int)((open-minPrice)*koeff_Y), w/wsize, (int)((open-close)*koeff_Y));
			}else {
				g.setColor(Config.green);
				g.fillRect(i*w/wsize, hsize-(int)((close-minPrice)*koeff_Y), w/wsize, (int)((close-open)*koeff_Y));
				
			}
			g.fillRect(i*w/wsize+(w/wsize)/2, hsize-(int)((high-minPrice)*koeff_Y), 1, (int)((high-low)*koeff_Y));

			g.setColor(Config.grey_light);
			g.fillRect(i*w/wsize, hsize-60 - (int)((vol)*100/(maxVol)), w/wsize, (int)((vol)*100/(maxVol)));

			//System.out.println(i*w/wsize+" / "+(int)((open-minPrice)*koeff_Y)+" / "+w/wsize+" / "+(int)((open-close)*koeff_Y));
			//System.out.println(open+" "+close);
			
		}

		/*try {
			String statuse = apiBinance.getStatuse();
			
			//statuse
			g.setColor(Color.BLACK);
			g.fillRect(0, 720-10, 900, 11);
			g.setColor(Color.WHITE);
			Font font = new Font("Arial",Font.BOLD, 10);
			g.setFont(font);
			JSONObject jsonobj = new JSONObject(statuse);
			JSONObject jsonstatus = jsonobj.getJSONObject("status");
			long updateTime = jsonstatus.getLong("updateTime");
			g.drawString(interStr+" "+statuse+" "+formatter.format(updateTime), 10, 720);
			
		} catch (InvalidKeyException | NoSuchAlgorithmException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		
		g.fillRect(0, 0, 10, 10);

		//TODO binance prices
		g.setColor(Color.WHITE);
		Font font = new Font("Arial", Font.BOLD|Font.ITALIC, 15);
		g.setFont(font);
		if (mass_para.length <= 1) return;
		for (int i=0; i < mass_para.length; i++) {

			try {
				g.drawString(mass_para[i] + ":" + apiBinance.getPrice(mass_para[i]).getPrice(), w - 190, 180 + i * 20);
			}catch (Exception e){};
		}


	}
	
	public void drawUzor(Graphics g, double w, double h) {
		int colrest = (int) Math.round(Math.random()*100);
		
		int col = 360*colrest;
		int kratnost = (int) Math.round(Math.random()*100);
		
		int[] polX = new int[col];
		int[] polY = new int[col];
		double x = 0,y = 0;
		double r = Math.random()*w/2;
		double r2 = Math.random()*((w/2)-r);
		System.out.println("r"+r+" r2"+r2);
		int colotrez = (int) Math.round(Math.random()*5);
		System.out.println("colotrez"+colotrez);
		double[] nfiotrez = new double[colotrez];
		double[] fiotrez = new double[colotrez];
		
		for(int j=0; j<colotrez; j++) {
			nfiotrez[j] = Math.random()*360;
			fiotrez[j] = Math.random()*(360-nfiotrez[j]);
			System.out.println("nfiotrez[j]"+nfiotrez[j]+" fiotrez[j]"+fiotrez[j]);
		}
		for(int i = 0; i<col; i++) {
			int fi = i; //���� ������
			int fione = fi%360; //����
			
			double r1 = r + (r2*Math.sin(fi*kratnost*Math.PI/(colrest*180)));
			
			x = r1 * Math.cos(fi*Math.PI/180);
			y = r1 * Math.sin(fi*Math.PI/180);
			
			polY[i] = (int) (y + (h/2));
			polX[i] = (int) (x + (w/2));
			int o = 0;
			for(int u=0; u<colotrez; u++) {
				
				if(fione>nfiotrez[u]&&fione<nfiotrez[u]+fiotrez[u]) {o=1;}else{
					
				};
			}
			if(o==0) {
				try {
					g.drawLine(polX[i-1], polY[i-1], polX[i], polY[i]);
				}catch(Exception e) {
				}
			}
			
		}


		
	}
	public void drawRandomnGrap(Graphics g, double w, double h) {
		int col = (int) Math.round(Math.random()*100);
		for(int i = 0; i<col; i++) {
		g.setColor(Color.decode(getColorRandomn()));
		int x = (int) Math.round(Math.random()*w);
		int y = (int) Math.round(Math.random()*h);
		int xw = (int) Math.round(Math.random()*(w-x));
		int yh = (int) Math.round(Math.random()*(h-y));
		
		
		
		int fill = (int) Math.round(Math.random()*4);
		switch(fill) {
		case 0:
			g.fillOval(x, y, xw, yh);
		break;
		case 1:
			g.fillRect(x, y, xw, yh);
		break;
		case 2:
			g.fill3DRect(x, y, xw, yh, true);
		break;
		case 3:
			int a3 = (int) Math.round(Math.random()*360);
			int b3 = (int) Math.round(Math.random()*(360-a3));
			
			g.fillArc(x, y, xw, yh, a3, b3+a3);
		break;
		case 4:
			int a4 = (int) Math.round(Math.random()*xw);
			int b4 = (int) Math.round(Math.random()*yh);
			
			g.fillRoundRect(x, y, xw, yh, a4, b4);
		break;
		}
		}
		
	}
}
