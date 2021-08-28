package com.Deff83.Analize;

import com.binance.api.client.domain.market.Candlestick;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class Analize {
    private List<PatternMy>  list = new ArrayList<>();

    private List<SaveProhod>  saveProhodList = new ArrayList<>();

    public void analize_bar(Candlestick candl, int time_int){
        double open = Double.parseDouble(candl.getOpen());
        double close = Double.parseDouble(candl.getClose());
        double high = Double.parseDouble(candl.getHigh());
        double low = Double.parseDouble(candl.getLow());

        double telo = open - close;
        double hvost_up = high - low;
        double hvost_down = high - low;
        if (telo<0) {//green
            hvost_up = high - close;
            hvost_down = open - low;
        }
        if (telo>0) {//red
            hvost_up = high - open;
            hvost_down = close - low;
        }

        double telom = Math.abs(telo);

        if (hvost_up > telom * 2 &&  hvost_down<(telom/1)){
            list.add(new PatternMy("M", time_int, AnalNum.SINGLE));
        }

        if (hvost_down > telom * 2 &&  hvost_up<(telom/1)){
            list.add(new PatternMy("P", time_int, AnalNum.SINGLE));
        }


    }

    public void trand(Candlestick candl1, Candlestick candl2, int i) {
        int tek_size = saveProhodList.size();
        SaveProhod saveProhod = new SaveProhod();
        saveProhod.setTime(i);

        double open1 = Double.parseDouble(candl1.getOpen());
        double close1 = Double.parseDouble(candl1.getClose());
        double telo1 = open1 - close1;

        double open2 = Double.parseDouble(candl2.getOpen());
        double close2 = Double.parseDouble(candl2.getClose());
        double telo2 = open2 - close2;

        if (Math.abs(telo1)>Math.abs(telo2) && Math.signum(telo2)!=Math.signum(telo1)){
            saveProhod.setPoglosh(true);
            if (telo1>0) saveProhod.setTypepogl(2);

        }

        double high1 = Double.parseDouble(candl1.getHigh());
        double low1 = Double.parseDouble(candl1.getLow());

        double high2 = Double.parseDouble(candl2.getHigh());
        double low2 = Double.parseDouble(candl2.getLow());

        if(high1>high2 && low1>low2) {
            saveProhod.setUp_down(true);

        }
        if(high1<high2 && low1<low2) {
            saveProhod.setUp_down(false);

        }
        if(high1>high2) saveProhod.setPrice(high1);
        if(low1<low2) saveProhod.setPrice(low1);

        if ((high1<high2 && low1>low2)||(high1>high2 && low1<low2)) {
            //System.out.println("tyt"+i);
            try {
                saveProhod.setUp_down(saveProhodList.get(tek_size-1).isUp_down());
                if((high1>high2 && low1<low2)){
                    //System.out.println("tyt2"+saveProhodList.get(tek_size-1).isUp_down());
                    if(saveProhodList.get(tek_size-1).isUp_down()){
                        saveProhod.setPrice(high1);
                    }else{
                        saveProhod.setPrice(low1);
                    }

                }
                if((high1<high2 && low1>low2)){
                   // System.out.println("tyt3"+saveProhodList.get(tek_size-1).isUp_down());
                        saveProhod.setPrice(saveProhodList.get(tek_size-1).getPrice());


                }

            }catch (Exception e){
                e.printStackTrace();
            }

        }




        //saveProhod.setPrice(low1);

        saveProhodList.add(saveProhod);
    }

    public List<SaveProhod> getSaveProhodList() {
        return saveProhodList;
    }

    public List<PatternMy> getList() {
        return list;
    }

    public void clearList() {

        this.list = new ArrayList<>();
        this.saveProhodList = new ArrayList<>();
    }

    public Color getColorAnalize(String symbol){
        Color col = new Color(255, 255, 255);

        return col;
    }


}
