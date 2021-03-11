package com.Deff83;

import java.awt.Color;

public class MassivPreobr {

	public MassivPreobr() {
		// TODO Auto-generated constructor stub
	}
	public int[] getLineMassiv(int [][] doubleMass, int w, int h) {
		int[] lineMass = new int[w*h];
		int y = 0;
		for(int i = 0; i<h; i++) {
			
			for(int j = 0; j<w; j++) {
				lineMass[y] = doubleMass[j][i];
				y++;
			}
		}
		return lineMass;
	}
	public int[][] getDoubleMassiv(int[] lineMas, int w, int h){
		int[][] doubleMass = new int[w][h];
		int y = 0;
		for(int i = 0; i<h; i++) {
			
			for(int j = 0; j<w; j++) {
				doubleMass[j][i] = lineMas[y];
				y++;
			}
		}
		return doubleMass;
	}
	public int[] getRGBNew(int[]  mass){
		int[] redMass = new int[mass.length];
		
		for(int i = 0; i<mass.length; i++) {
			Color c = new Color(mass[i]);
			int red = c.getRed();
			int green = c.getGreen();
			int blue = c.getBlue();
			if(i<1000) System.out.println(i + "  :  "+red+"   "+green+"   "+blue);
			int razdel = 1;
			double reddel = 256/razdel;
			red = (int) (Math.round((red+1)/reddel)*reddel)-1;
			green = (int) (Math.round((green+1)/reddel)*reddel)-1;
			blue = (int) (Math.round((blue+1)/reddel)*reddel)-1;
			if(red<0) red=0;
			if(green<0) green=0;
			if(blue<0) blue=0;
			
			redMass[i] = new Color(red,green,blue).getRGB();
			if(i<1000) System.out.println(i + "  :  "+red+"   "+green+"   "+blue);
		}
		return redMass;
	}
}
