package com.easyuuid

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import java.util.UUID

@ReactModule(name = EasyUuidModule.NAME)
class EasyUuidModule(reactContext: ReactApplicationContext) :
  NativeEasyUuidSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  override fun uuid(): String {
    return UUID.randomUUID().toString()
  }

  companion object {
    const val NAME = "EasyUuid"
  }
}
