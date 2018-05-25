package com.wix.reactnativenotifications.core;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.util.Log;

import com.facebook.common.executors.CallerThreadExecutor;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.BaseDataSubscriber;
import com.facebook.datasource.DataSource;
//import com.facebook.datasource.DataSubscriber;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.image.CloseableBitmap;
import com.facebook.imagepipeline.image.CloseableImage;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.imagepipeline.datasource.BaseBitmapDataSubscriber;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class BitmapLoader {
    public interface OnBitmapLoadedCallback {
        // The lifetime of the Bitmap is only valid for the duration of the callback. If the Bitmap
        // is required for a longer duration it should be copied.
        void onBitmapLoaded(Bitmap bitmap);
    }

    private final Context mContext;

    public BitmapLoader(Context context) {
        mContext = context;
    }

    public void loadUri(final Uri uri, final OnBitmapLoadedCallback callback) {
        final ImageRequest request = ImageRequestBuilder.newBuilderWithSource(uri)
                .setLowestPermittedRequestLevel(ImageRequest.RequestLevel.FULL_FETCH)
                .setProgressiveRenderingEnabled(false)
                .build();

        // fix: Fresco not initilized if app is closed
        if (!Fresco.hasBeenInitialized()) {
            Fresco.initialize(mContext);
        }

        final ImagePipeline imagePipeline = Fresco.getImagePipeline();
        final DataSource<CloseableReference<CloseableImage>> dataSource = imagePipeline.fetchDecodedImage(request, mContext);

        final BaseBitmapDataSubscriber dataSubscriber = new BaseBitmapDataSubscriber() {

            @Override
            protected void onNewResultImpl(Bitmap bitmap) {
                if (dataSource.isFinished()) {
                    callback.onBitmapLoaded(bitmap);
                }
            }

            @Override
            protected void onFailureImpl(final DataSource<CloseableReference<CloseableImage>> dataSource) {
                Log.e(LOGTAG, "Failed to load image from " + uri, dataSource.getFailureCause());
                dataSource.close();
            }
        };

        dataSource.subscribe(dataSubscriber, CallerThreadExecutor.getInstance());
    }
}