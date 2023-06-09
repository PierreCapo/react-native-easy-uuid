import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-easy-uuid' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const EasyUuidModule = isTurboModuleEnabled
  ? require('./NativeEasyUuid').default
  : NativeModules.EasyUuid;

const EasyUuid = EasyUuidModule
  ? EasyUuidModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return EasyUuid.multiply(a, b);
}
