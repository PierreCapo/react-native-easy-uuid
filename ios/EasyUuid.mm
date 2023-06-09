#import "EasyUuid.h"

@implementation EasyUuid
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(uuid)
{
    return [[NSUUID UUID] UUIDString];
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeEasyUuidSpecJSI>(params);
}
#endif

@end
