# Carrefour Mobile QA Challenge (Local)

Projeto pronto para rodar **localmente** em Android/iOS com **WebdriverIO + Appium + Mocha + Chai + Allure**.

## Requisitos
- Node 18/20+
- Java JDK
- Appium 2 (`npm i -g appium`) + drivers: `appium driver install uiautomator2` e/ou `appium driver install xcuitest`
- Android SDK (emulador) e/ou Xcode (simulador)
- (Opcional) `npx appium-doctor --android --ios`

## App sob teste
Baixe os binários do **native-demo-app** (releases do WebdriverIO) e coloque em `./apps/` com os nomes abaixo:
- Android: `native-demo-app-android.apk`
- iOS: `native-demo-app-ios.app` (ou ajuste a variável `IOS_APP`)

Releases: https://github.com/webdriverio/native-demo-app/releases

## Instalação
```bash
npm ci
```

## Execução
Android (emulador rodando):
```bash
npm run test:android:local
```

iOS (simulador rodando):
```bash
npm run test:ios:local
```

> Variáveis úteis: `ANDROID_APP`, `ANDROID_VERSION`, `IOS_APP`, `IOS_VERSION`, `IOS_DEVICE`.

## Relatório Allure
```bash
npm run allure:report
# abra: ./allure-report/index.html
```

Trigger CI: 2025-08-28T17:24:01

Trigger CI: 2025-08-28T17:34:59
