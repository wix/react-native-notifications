package com.wix.reactnativenotifications.core.notification;

import android.app.NotificationManager;
import android.content.Context;
import android.graphics.Color;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;

import java.util.List;

public class NotificationChannel implements INotificationChannel {

    final protected Context mContext;
    final protected NotificationChannelProps mNotificationChannelProps;

    protected NotificationChannel(Context context, Bundle bundle) {
        mContext = context;
        mNotificationChannelProps = createProps(bundle);
    }

    public static INotificationChannel get(Context context, Bundle bundle) {
        return new NotificationChannel(context, bundle);
    }

    protected NotificationChannelProps createProps(Bundle bundle) {
        return new NotificationChannelProps(bundle);
    }

    @Override
    public void setNotificationChannel() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return;
        }
        android.app.NotificationChannel channel = new android.app.NotificationChannel(
                mNotificationChannelProps.getChannelId(),
                mNotificationChannelProps.getName(),
                mNotificationChannelProps.getImportance()
        );

        if (mNotificationChannelProps.hasDescription()) {
            channel.setDescription(mNotificationChannelProps.getDescription());
        }
        if (mNotificationChannelProps.hasEnableLights()) {
            channel.enableLights(mNotificationChannelProps.getEnableLights());
        }
        if (mNotificationChannelProps.hasEnableVibration()) {
            channel.enableVibration(mNotificationChannelProps.getEnableVibration());
        }
        if (mNotificationChannelProps.hasGroupId()) {
            channel.setGroup(mNotificationChannelProps.getGroupId());
        }
        if (mNotificationChannelProps.hasLightColor()) {
            channel.setLightColor(Color.parseColor(mNotificationChannelProps.getLightColor()));
        }
        if (mNotificationChannelProps.hasShowBadge()) {
            channel.setShowBadge(mNotificationChannelProps.getShowBadge());
        }
        if (mNotificationChannelProps.hasSoundFile()) {
            channel.setSound(getSound(mNotificationChannelProps.getSoundFile()), null);
        }
        if (mNotificationChannelProps.hasVibrationPattern()) {
            channel.setVibrationPattern(
                    createVibrationPatternFromList(mNotificationChannelProps.getVibrationPattern())
            );
        }

        final NotificationManager notificationManager = (NotificationManager) mContext
                .getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.createNotificationChannel(channel);
    }

    @Override
    public NotificationChannelProps asProps() {
        return mNotificationChannelProps.copy();
    }

    protected long[] createVibrationPatternFromList(List patternRequest) {
        if (patternRequest == null) {
            return null;
        }

        long[] pattern = new long[patternRequest.size()];
        for (int i = 0; i < patternRequest.size(); i++) {
            if (patternRequest.get(i) instanceof Number) {
                pattern[i] = ((Number) patternRequest.get(i)).longValue();
            }
        }
        return pattern;
    }

    private Uri getSound(String sound) {
        if (sound == null) {
            return null;
        } else if (sound.contains("://")) {
            return Uri.parse(sound);
        } else if (sound.equalsIgnoreCase("default")) {
            return RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        } else {
            int soundResourceId = getResourceId("raw", sound);
            if (soundResourceId == 0) {
                soundResourceId = getResourceId("raw", sound.substring(0, sound.lastIndexOf('.')));
            }
            return Uri.parse("android.resource://" + mContext.getPackageName() + "/" + soundResourceId);
        }
    }

    private int getResourceId(String type, String image) {
        return mContext
                .getResources()
                .getIdentifier(image, type, mContext.getPackageName());
    }
}
