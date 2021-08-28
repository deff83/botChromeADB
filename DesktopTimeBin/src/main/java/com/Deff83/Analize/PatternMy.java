package com.Deff83.Analize;

public class PatternMy {

    private AnalNum analNum = AnalNum.NULL;
    private String symbol = "";
    private int time_int = 0;

    public PatternMy(String symbol) {
        this.symbol = symbol;
    }

    public PatternMy(String symbol, int time_int, AnalNum analNum) {
        this.symbol = symbol;
        this.time_int = time_int;
        this.analNum = analNum;
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

    public AnalNum getType() {
        return analNum;
    }

    public void setType(AnalNum type) {
        this.analNum = type;
    }

    @Override
    public String toString() {
        return "PatternMy{" +
                "type=" + analNum +
                ", symbol='" + symbol + '\'' +
                ", time_int=" + time_int +
                '}';
    }
}
