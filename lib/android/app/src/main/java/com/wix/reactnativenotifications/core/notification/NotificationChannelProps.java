package com.wix.reactnativenotifications.core.notification;

import android.os.Bundle;

import java.util.List;

public class NotificationChannelProps {

    protected Bundle mBundle;

    public NotificationChannelProps(Bundle bundle) {
        mBundle = bundle;
    }

    public String getChannelId() {
        return mBundle.getString("channelId");
    }

    public boolean hasChannelId() {
        return mBundle.containsKey("channelId");
    }

    public String getDescription() {
        return mBundle.getString("description");
    }

    public boolean hasDescription() {
        return mBundle.containsKey("description");
    }

    public boolean getEnableLights() {
        return mBundle.getBoolean("enableLights");
    }

    public boolean hasEnableLights() {
        return mBundle.containsKey("enableLights");
    }

    public boolean getEnableVibration() {
        return mBundle.getBoolean("enableVibration");
    }

    public boolean hasEnableVibration() {
        return mBundle.containsKey("enableVibration");
    }

    public String getGroupId() {
        return mBundle.getString("groupId");
    }

    public boolean hasGroupId() {
        return mBundle.containsKey("groupId");
    }

    public String getGroupName() {
        String name = mBundle.getString("groupName");
        if (name == null) {
            name = getGroupId();
        }
        return name;
    }

    public boolean hasGroupName() {
        return mBundle.containsKey("groupName");
    }

    public int getImportance() {
        return (int) mBundle.getDouble("importance");
    }

    public boolean hasImportance() {
        return mBundle.containsKey("importance");
    }

    public String getLightColor() {
        return mBundle.getString("lightColor");
    }

    public boolean hasLightColor() {
        return mBundle.containsKey("lightColor");
    }

    public String getName() {
        return mBundle.getString("name");
    }

    public boolean hasName() {
        return mBundle.containsKey("name");
    }

    public boolean getShowBadge() {
        return mBundle.getBoolean("showBadge");
    }

    public boolean hasShowBadge() {
        return mBundle.containsKey("showBadge");
    }

    public String getSoundFile() {
        return mBundle.getString("soundFile");
    }

    public boolean hasSoundFile() {
        return mBundle.containsKey("soundFile");
    }

    public List getVibrationPattern() {
        return mBundle.getParcelableArrayList("vibrationPattern");
    }

    public boolean hasVibrationPattern() {
        return mBundle.containsKey("vibrationPattern");
    }

    public Bundle asBundle() {
        return (Bundle) mBundle.clone();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder(1024);
        for (String key : mBundle.keySet()) {
            sb.append(key).append("=").append(mBundle.get(key)).append(", ");
        }
        return sb.toString();
    }

    protected NotificationChannelProps copy() {
        return new NotificationChannelProps((Bundle) mBundle.clone());
    }
}
