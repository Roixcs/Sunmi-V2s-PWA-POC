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

## Ejecucion en local
ionic serve

## Importante para local
Pruebas locales completas se requiere el SunmiV2 y conectarlo por ADB.
El comando npx cap open android
abre Android Studio
En Android Studio ya se puede:
 - Ejecutar en el Sunmi V2s conectado por USB (si lo tuvieras).
 - Generar el APK sin dispositivo:
     - Menú: Build > Build Bundle(s) / APK(s) > Build APK(s).
     - Resultado: android/app/build/outputs/apk/debug/app-debug.apk.
Generar APK firmado (para cliente):
 - Menú: Build > Generate Signed Bundle / APK….
 - Eliges APK.
 - Creas un keystore (si no tienes).
 - Firmas el APK en modo release.
 - Lo instalas en tu dispositivo.

## Instalación
```bash
npm install
ionic build
npx cap sync android
npx cap open android

Genera la carpeta www/ con tu app web.
Copia ese build al proyecto Android en android/app/src/main/assets/public.