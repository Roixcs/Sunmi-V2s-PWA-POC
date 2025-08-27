import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.concentrix.sunmipwa',
  appName: 'SunmiPWA',
  webDir: 'www', // o 'dist' 
  server: {
    url: 'https://tu-pwa.ejemplo.com', // CDN/App Service
    cleartext: false,                   // true solo si usas http
  },
  android: {
    allowMixedContent: true,            // por si incrustas iframes http
  },
};

export default config;
