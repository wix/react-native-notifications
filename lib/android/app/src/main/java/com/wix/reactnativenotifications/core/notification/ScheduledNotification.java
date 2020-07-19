package com.wix.reactnativenotifications.core.notification;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;


import com.wix.reactnativenotifications.core.utils.BundleJSONConverter;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Map;



public class ScheduledNotification extends BroadcastReceiver {
    public static String NOTIFICATION = "notification" ;
    public static String NOTIFICATION_ID = "notification-id" ;
    private static final String SCHEDULED_PREFERENCES_KEY = "RNFNotifications";
    private SharedPreferences preferences;
    private static final String TAG = "ScheduledNotification";
    private static  final String PUSH_LOCAL_NOTIFICATION_ACTION="PushLocalNotification";



    public void scheduleNotification (Context context,Bundle notificationBundle , long fireDate, int notificationID) {
        Intent notificationIntent = new Intent( context, ScheduledNotification.class ) ;
        notificationIntent.putExtra( NOTIFICATION , notificationBundle) ;
        notificationIntent.putExtra( NOTIFICATION_ID , notificationID) ;
        notificationIntent.setAction(PUSH_LOCAL_NOTIFICATION_ACTION);

        PendingIntent pendingIntent = PendingIntent. getBroadcast ( context, notificationID, notificationIntent , PendingIntent. FLAG_UPDATE_CURRENT ) ;

        AlarmManager alarmManager =( AlarmManager)context.getSystemService(Context.ALARM_SERVICE);
        assert alarmManager != null;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP , fireDate , pendingIntent);
        }else{
            alarmManager.set(AlarmManager.RTC_WAKEUP , fireDate , pendingIntent);
        }


        JSONObject json = null;
        try {
            json = BundleJSONConverter.convertToJSON(notificationBundle);
            this.preferences = context.getSharedPreferences(SCHEDULED_PREFERENCES_KEY, Context.MODE_PRIVATE);
            preferences
                    .edit()
                    .putString(String.valueOf(notificationID), json.toString())
                    .apply();
        } catch (JSONException e) {
            e.printStackTrace();
            Log.e(TAG, "Failed to store notification");
        }
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if(intent.getAction().equals(PUSH_LOCAL_NOTIFICATION_ACTION)){
            Bundle notificationProps = intent.getBundleExtra(NOTIFICATION);
            int notificationId = intent.getIntExtra( NOTIFICATION_ID , 0 ) ;
            String channelID=notificationProps.getString("channelID");
           final IPushNotification pushNotification = PushNotification.get(context, notificationProps);
            pushNotification.onPostRequest(notificationId,channelID);
        }else if(intent.getAction().equals(Intent.ACTION_BOOT_COMPLETED)){
            reScheduleAllNotifications(context);
        }

    }

    public void cancelScheduledNotification(Context context,int notificationID){
        Intent notificationIntent = new Intent( context, ScheduledNotification.class ) ;
       // notificationIntent.putExtra( NOTIFICATION_ID , notificationID) ;
        notificationIntent.setAction(PUSH_LOCAL_NOTIFICATION_ACTION);

        PendingIntent pendingIntent = PendingIntent. getBroadcast ( context, notificationID, notificationIntent , PendingIntent. FLAG_UPDATE_CURRENT ) ;

        AlarmManager alarmManager =( AlarmManager)context.getSystemService(Context.ALARM_SERVICE);
        assert alarmManager != null;
        alarmManager.cancel(pendingIntent);
        this.preferences = context.getSharedPreferences(SCHEDULED_PREFERENCES_KEY, Context.MODE_PRIVATE);
        preferences
                .edit()
                .remove(String.valueOf(notificationID))
                .apply();
    }

    public void cancelAllScheduledNotifications( Context context) {
        try {
            this.preferences = context.getSharedPreferences(SCHEDULED_PREFERENCES_KEY, Context.MODE_PRIVATE);
            Map<String, ?> notifications = preferences.getAll();

            for (String notificationId : notifications.keySet()) {
                cancelScheduledNotification(context,Integer.parseInt(notificationId));
            }
            preferences
                    .edit()
                    .clear()
                    .apply();
        } catch (SecurityException e) {
            // TODO: Identify what these situations are
            // In some devices/situations cancelAllLocalNotifications can throw a SecurityException.
            Log.e(TAG, e.getMessage());

        }
    }

   void reScheduleAllNotifications(Context context) {
        ArrayList<Bundle> array = new ArrayList<>();

       this.preferences = context.getSharedPreferences(SCHEDULED_PREFERENCES_KEY, Context.MODE_PRIVATE);

       Map<String, ?> notifications = preferences.getAll();

        for (String notificationId : notifications.keySet()) {
            try {
                JSONObject json = new JSONObject((String) notifications.get(notificationId));
                Bundle bundle = BundleJSONConverter.convertToBundle(json);
                scheduleNotification(context,bundle, bundle.getLong("fireDate"),Integer.parseInt(notificationId));
            } catch (JSONException e) {
                Log.e(TAG, e.getMessage());
            }
        }
    }

}
