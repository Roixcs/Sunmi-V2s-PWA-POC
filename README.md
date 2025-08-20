# Sunmi V2s PWA POC

POC de impresión en **Sunmi V2s (modelo T5940, Android 11)** usando:
- Ionic + Angular (UI)
- Capacitor (bridge nativo)
- Plugin [`@kduma-autoid/capacitor-sunmi-printer`](https://www.npmjs.com/package/@kduma-autoid/capacitor-sunmi-printer)

## Requisitos
- Node.js LTS (18 o 20)
- Ionic CLI (`npm install -g @ionic/cli`)
- JDK 11 o 17
- Android Studio con SDK 30+
- Dispositivo Sunmi V2s con modo desarrollador habilitado

## Instalación
```bash
npm install
ionic build
npx cap sync android
npx cap open android
