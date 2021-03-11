package com.Deff83;

import java.awt.image.BufferedImage;
import java.io.File;
import java.util.Scanner;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class Main {

	public Main() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {


		System.out.println("start");
		// TODO Auto-generated method stub
		ScreenShot screen = new ScreenShot();
		ScheduledExecutorService exec = Executors.newSingleThreadScheduledExecutor();
		Runnable run = new Runnable(){

			@Override
			public void run() {
				// TODO Auto-generated method stub
				
		File fileexit = new File(Config.exit_file);
		if(fileexit.exists()) {
			System.exit(0);
		}
		
			
		try {
			BufferedImage bufImage = screen.getBufferedImageScreen();
			screen.saveImage(bufImage, Config.img_file);
			int w = bufImage.getWidth();
			int h = bufImage.getHeight();
			System.out.println("width:"+w+" height:"+h);
			User32Library.user32.SystemParametersInfo(0x0014, 10, Config.img_file+".png", 10);
			/*int[][] pixelRGB = screen.pixelsArray(bufImage, w, h);
				MassivPreobr massivPreobr = new MassivPreobr();
				int[] pixelRGBline = massivPreobr.getLineMassiv(pixelRGB, w, h);
				pixelRGBline = massivPreobr.getRGBNew(pixelRGBline);
				pixelRGB = massivPreobr.getDoubleMassiv(pixelRGBline, w, h);
			BufferedImage bufRedImage = screen.getRedBufferedImage(pixelRGB, w, h);
			screen.saveImage(bufRedImage, "save1");*/
			System.out.println("END");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
			
		};
		exec.scheduleWithFixedDelay(run, 0, 30, TimeUnit.SECONDS);
		
	}

}
