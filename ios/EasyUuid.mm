#import "EasyUuid.h"

@implementation EasyUuid
RCT_EXPORT_MODULE()

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (NSString *)uuid {
  return [[NSUUID UUID] UUIDString];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeEasyUuidSpecJSI>(params);
}
#endif

@end
