import { getDefaultConfig, mergeConfig } from '@react-native/metro-config';
import { createRequire } from 'module';
import { withNativeWind } from 'nativewind/dist/metro/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: baseConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...baseConfig.resolver.sourceExts, 'svg'],
  },
};

const metroConfig = mergeConfig(baseConfig, config);

export default withNativeWind(metroConfig, { input: './tailwind/global.css' });
