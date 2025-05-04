import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aitoolhub.app',
  appName: 'AI Tool Hub',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
