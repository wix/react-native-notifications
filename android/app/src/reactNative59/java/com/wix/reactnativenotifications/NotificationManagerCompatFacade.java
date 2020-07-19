
package com.wix.reactnativenotifications;

import android.content.Context;
import androidx.annotation.NonNull;
import androidx.core.app.NotificationManagerCompat;

public abstract class NotificationManagerCompatFacade {
    public static NotificationManagerCompat from(@NonNull Context context) {
        return NotificationManagerCompat.from(context);
    }
}
