
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNEasyUuidSpec.h"

@interface EasyUuid : NSObject <NativeEasyUuidSpec>
#else
#import <React/RCTBridgeModule.h>

@interface EasyUuid : NSObject <RCTBridgeModule>
#endif

@end
