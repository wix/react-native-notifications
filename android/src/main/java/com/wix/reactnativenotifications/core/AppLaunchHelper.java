package com.wix.reactnativenotifications.core;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.wix.reactnativenotifications.core.notifications.IntentExtras;

public class AppLaunchHelper {
    private static final String TAG = AppLaunchHelper.class.getSimpleName();

    public Intent getLaunchIntent(Context appContext) {
        try {
            // The desired behavior upon notification opening is as follows:
            // - If app is in foreground (and possibly has several activities in stack), simply keep it as-is in foreground.
            // - If app is in background, bring it to foreground as-is (context stack untampered).
            //   A distinction is made in this case such that if app went to back due to *back-button*, is should be recreated (this
            //   is Android's native behavior).
            // - If app is dead, launch it through the main context (as Android launchers do).
            // Overall, THIS IS EXACTLY THE SAME AS ANDROID LAUNCHERS WORK. So, we use the same configuration (action, categories and
            // flags) as they do.
            final Intent helperIntent = appContext.getPackageManager().getLaunchIntentForPackage(appContext.getPackageName());
            final Intent intent = new Intent(appContext, Class.forName(helperIntent.getComponent().getClassName()));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED);
            intent.putExtra(IntentExtras.FCM_PREFIX, true);
            return intent;
        } catch (ClassNotFoundException e) {
            // Note: this is an imaginary scenario cause we're asking for a class of our very own package.
            Log.e(TAG, "Failed to launch/resume app", e);
            return null;
        }
    }

    public boolean isLaunchIntentsActivity(Activity activity) {
        final Intent helperIntent = activity.getPackageManager().getLaunchIntentForPackage(activity.getPackageName());
        final String activityName = activity.getComponentName().getClassName();
        final String launchIntentActivityName = helperIntent.getComponent().getClassName();
        return activityName.equals(launchIntentActivityName);
    }

    public boolean isLaunchIntentOfNotification(Intent intent) {
        return intent.getBooleanExtra(IntentExtras.LAUNCH_FLAG, false);
    }

    public boolean isLaunchIntentOfBackgroundPushNotification(Intent intent) {
        final Bundle extras = intent.getExtras();

        if (extras != null) {
            // We don't look for FCM_FROM as "from" is far too generic and may appear in other launch intents.
            if (extras.containsKey(IntentExtras.FCM_COLLAPSE_KEY)) {
                return true;
            }

            for (final String key : extras.keySet()) {
                if (key.startsWith(IntentExtras.FCM_PREFIX)) {
                    return true;
                }
            }
        }

        return false;
    }
}
