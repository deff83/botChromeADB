package com.Deff83.Analize;

public class SaveProhod {
    private boolean up_down = true;
    private double price = 0;
    private int time = 0;
    private boolean poglosh = false;

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public boolean isUp_down() {
        return up_down;
    }

    public void setUp_down(boolean up_down) {
        this.up_down = up_down;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isPoglosh() {
        return poglosh;
    }

    public void setPoglosh(boolean poglosh) {
        this.poglosh = poglosh;
    }
}
