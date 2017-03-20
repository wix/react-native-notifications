package com.wix.reactnativenotifications.app;

import android.annotation.TargetApi;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.ViewGroup;
import android.widget.Toolbar;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactRootView;

import static android.os.Build.VERSION.SDK_INT;

public class MainActivity extends ReactActivity {

    private static final int OVERLAY_PERMISSION_REQ_CODE = 1234;

    private ReactRootView mReactRootView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ViewGroup layout;
        if (SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            layout = (ViewGroup) getLayoutInflater().inflate(R.layout.activity_main, null);
            Toolbar toolbar = (Toolbar) layout.findViewById(R.id.toolbar);
            setActionBar(toolbar);
        } else {
            layout = (ViewGroup) getLayoutInflater().inflate(R.layout.activity_main_prelollipop, null);
        }
        mReactRootView = new ReactRootView(this);
        layout.addView(mReactRootView);

        setContentView(layout);

        if (SDK_INT >= Build.VERSION_CODES.M && !Settings.canDrawOverlays(this)) {
            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:" + getPackageName()));
            startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
        } else {
            startReactApplication();
        }
    }

    @TargetApi(Build.VERSION_CODES.M)
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Settings.canDrawOverlays(this)) {
                startReactApplication();
            } else {
                finish();
            }
        }
    }

    private void startReactApplication() {
        mReactRootView.startReactApplication(getReactInstanceManager(), "WixRNNotifications", null);
    }
}
