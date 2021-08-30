package com.Deff83;

import java.awt.*;

public class Config {



    private static String my_folder = "C:\\Users\\1";
    private static String my_folder2 = "C:\\Users\\Deff83";

    public static String url_file = my_folder+"\\Desktop\\screen\\saldo.txt";
    public static String img_file = my_folder+"\\Desktop\\screen\\save0";
    public static String imgfon_file = my_folder+"\\Desktop\\screen\\img.png";
    public static String exit_file = my_folder+"\\Desktop\\screen\\exit.txt";

    public static Color green = new Color(37, 255, 124);
    public static Color red = new Color(255, 37, 121);
    public static Color green_light = new Color(47, 255, 0);
    public static Color red_light = new Color(255, 0, 0);
    public static Color grey = new Color(42, 42, 42);
    public static Color grey_light = new Color(122, 122, 122);
    public static Color blue = new Color(0, 66, 121);
    public static Color blue_dark = new Color(0, 143, 255);
    public static Color yellow_dark = new Color(58, 46, 0);
    public static Color yellow = new Color(140, 110, 0);

    public static int num_analize_end = 5;

    public static void change_folder(){
        url_file = my_folder2+"\\Desktop\\screen\\saldo.txt";
        img_file = my_folder2+"\\Desktop\\screen\\save0";
        imgfon_file = my_folder2+"\\Desktop\\screen\\img.png";
        exit_file = my_folder2+"\\Desktop\\screen\\exit.txt";

    }
}
