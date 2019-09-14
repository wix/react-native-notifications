
package com.wix.reactnativenotifications;

import android.content.Context;
import android.support.annotation.Nullable;
import android.support.v4.app.NotificationManagerCompat;

public abstract class NotificationManagerCompatFacade {
    public static NotificationManagerCompat from(@NonNull Context context) {
        return NotificationManagerCompat.from(context);
    }
}
