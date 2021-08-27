package com.Deff83.Analize;

import com.binance.api.client.domain.market.Candlestick;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class Analize {
    private List<PatternMy>  list = new ArrayList<PatternMy>();

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
            list.add(new PatternMy("M", time_int));
        }

        if (hvost_down > telom * 2 &&  hvost_up<(telom/1)){
            list.add(new PatternMy("P", time_int));
        }


    }


    public List<PatternMy> getList() {
        return list;
    }

    public void clearList() {
        this.list = new ArrayList<PatternMy>();
    }

    public Color getColorAnalize(String symbol){
        Color col = new Color(255, 255, 255);

        return col;
    }
}
