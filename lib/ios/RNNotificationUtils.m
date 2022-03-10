#import "RNNotificationUtils.h"

@implementation RNNotificationUtils

+ (NSString *)deviceTokenToString:(NSData *)deviceToken {
    NSMutableString *result = [NSMutableString string];
    NSUInteger deviceTokenLength = deviceToken.length;
    const unsigned char *bytes = deviceToken.bytes;
    for (NSUInteger i = 0; i < deviceTokenLength; i++) {
        [result appendFormat:@"%02x", bytes[i]];
    }
    
    return [result copy];
}

@end
