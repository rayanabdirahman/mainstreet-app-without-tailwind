export default {
  name: 'mainstreet',
  slug: 'mainstreet',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#EA2740'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true
  },
  extra: {
    API_URL: process.env.__DEV__ ? 'http://a33422a24caf.ngrok.io/api' : 'http://a33422a24caf.ngrok.io/api'
  },
}
