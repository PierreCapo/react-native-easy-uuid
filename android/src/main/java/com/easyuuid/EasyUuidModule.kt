package com.easyuuid

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import java.util.UUID;

class EasyUuidModule internal constructor(context: ReactApplicationContext) :
  EasyUuidSpec(context) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod(isBlockingSynchronousMethod = true)
  override fun uuid(): String {
    return UUID.randomUUID().toString()
  }

  companion object {
    const val NAME = "EasyUuid"
  }
}
