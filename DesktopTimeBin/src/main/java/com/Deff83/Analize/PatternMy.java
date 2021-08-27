package com.Deff83.Analize;

public class PatternMy {

    private String symbol = "";
    private int time_int = 0;

    public PatternMy(String symbol) {
        this.symbol = symbol;
    }

    public PatternMy(String symbol, int time_int) {
        this.symbol = symbol;
        this.time_int = time_int;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public int getTime_int() {
        return time_int;
    }

    public void setTime_int(int time_int) {
        this.time_int = time_int;
    }

    @Override
    public String toString() {
        return "PatternMy{" +
                "symbol='" + symbol + '\'' +
                ", time_int=" + time_int +
                '}';
    }
}
