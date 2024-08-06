const EasyUuid = require('./NativeEasyUuid').default;

export function uuid(): string {
  return EasyUuid.uuid();
}
