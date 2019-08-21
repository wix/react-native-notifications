package com.wix.reactnativenotifications.app;

import android.os.Build;
import android.os.Bundle;
import android.view.ViewGroup;
import android.widget.Toolbar;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactRootView;

import static android.os.Build.VERSION.SDK_INT;

public class MainActivity extends ReactActivity {

    private ReactRootView mReactRootView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ViewGroup layout;
        if (SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            layout = (ViewGroup) getLayoutInflater().inflate(R.layout.activity_main, null);
            Toolbar toolbar = layout.findViewById(R.id.toolbar);
            setActionBar(toolbar);
        } else {
            layout = (ViewGroup) getLayoutInflater().inflate(R.layout.activity_main_prelollipop, null);
        }
        mReactRootView = new ReactRootView(this);
        layout.addView(mReactRootView);

        setContentView(layout);

        startReactApplication();
    }

    private void startReactApplication() {
        mReactRootView.startReactApplication(getReactInstanceManager(), "WixRNNotifications", null);
    }
}
