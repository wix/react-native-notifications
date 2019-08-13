package com.wix.reactnativenotifications.core;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class AppLaunchHelper {
    private static final String TAG = AppLaunchHelper.class.getSimpleName();

    private static final String LAUNCH_FLAG_KEY_NAME = "launchedFromNotification";

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
            intent.putExtra(LAUNCH_FLAG_KEY_NAME, true);
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
        return intent.getBooleanExtra(LAUNCH_FLAG_KEY_NAME, false);
    }
}
