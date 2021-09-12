package com.Deff83.Planet;

import com.Deff83.sign.Signture;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.json.JSONObject;

import java.util.Calendar;
import java.util.Date;

public class Moon {

    private static Moon moon = new Moon();
    private OkHttpClient okHttpClient;
    private String response_moon = null;
    private String phase = "null";

    private Moon(){
        okHttpClient = new OkHttpClient();
    }

    public static Moon getinstance() {return moon;}

    public void getZapros(){
       // String moonAPIURL = "https://www.icalendar37.net/lunar/api/?lang=en&month=9&year=2021&size=150&lightColor=rgb(255%2C255%2C210)&shadeColor=black&texturize=false&LDZ=1630443600";
        Date now = new Date();
        long timemilsec = Math.round((new Date(now.getYear(),now.getMonth(),1).getTime())/1000);
        int month = now.getMonth()+1;
        int year = now.getYear()+1900;



        String url_zap = "https://www.icalendar37.net/lunar/api/?lang=en&month="+month+"&year="+year+"&size=150&lightColor=rgb(255%2C255%2C210)&shadeColor=black&texturize=false&LDZ="+timemilsec+"";
        System.out.println(url_zap);

        Request request = new Request.Builder()
                .url(url_zap)
                .build();
        try(Response response = okHttpClient.newCall(request).execute()){
            response_moon = response.body().string();

            Date date=new Date();
            Calendar now_d = Calendar.getInstance();
            now_d.setTime(date);
            //System.out.println(now_d.get(Calendar.DAY_OF_MONTH));
            phase = setPhaze(now_d.get(Calendar.DAY_OF_MONTH), false);
            // phase += setPhaze(now_d.get(Calendar.DAY_OF_MONTH)+1);


        }catch (Exception e){};
        // System.out.println(response_moon);

        int month_n = month+1;
        if(month_n>12)month_n=1;


        timemilsec = Math.round((new Date(now.getYear(),month_n-1,1).getTime())/1000);

        url_zap = "https://www.icalendar37.net/lunar/api/?lang=en&month="+month_n+"&year="+year+"&size=150&lightColor=rgb(255%2C255%2C210)&shadeColor=black&texturize=false&LDZ="+timemilsec+"";
        System.out.println(url_zap);

        request = new Request.Builder()
                .url(url_zap)
                .build();
        try(Response response = okHttpClient.newCall(request).execute()){
            response_moon = response.body().string();

            Date date=new Date();
            Calendar now_d = Calendar.getInstance();
            now_d.setTime(date);
            //System.out.println(now_d.get(Calendar.DAY_OF_MONTH));
            phase += setPhaze(now_d.get(Calendar.DAY_OF_MONTH), true);
            // phase += setPhaze(now_d.get(Calendar.DAY_OF_MONTH)+1);


        }catch (Exception e){};
        // System.out.println(response_moon);


    }

    public String setPhaze(int day, boolean next_m){
        if (response_moon==null){
            getZapros();
        }
        double lighting = 0;
        String phaseName = "";
        String npWidget = "";
        String day_full = "error";
        String day_new = "error";

        try {
            JSONObject jsonObject = new JSONObject(response_moon);

            JSONObject phase = jsonObject.getJSONObject("phase");
            JSONObject day_phase = phase.getJSONObject(""+day);
            lighting = day_phase.getDouble("lighting");
            phaseName = day_phase.getString("phaseName");
            npWidget = day_phase.getString("npWidget");
            for (int i = 0; i < 31; i++) {
                try{
                    day_phase = phase.getJSONObject(""+i);
                    if(day_phase.getString("npWidget").equals("Full moon")){
                        day_full = ""+i;
                    }
                    if(day_phase.getString("npWidget").equals("New Moon")){
                        day_new = ""+i;
                    }



                }catch (Exception e){}
            }


        }catch (Exception e){e.printStackTrace();}

        if (next_m){
            return " Next(New:"+day_new+"; Full:"+day_full+")";
        }

        return npWidget+"(New:"+day_new+"; Full:"+day_full+")";
    }

    public String getPhase(){
        return  phase;
    }
}
