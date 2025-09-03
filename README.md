# Carrefour Mobile QA Challenge

[![CI](https://github.com/Isaque2206/carrefour-mobile-qa-challenge/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Isaque2206/carrefour-mobile-qa-challenge/actions/workflows/ci.yml)
[![Node](https://img.shields.io/badge/Node-18%2F20+-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![WebdriverIO](https://img.shields.io/badge/WebdriverIO-v8-EA5906?logo=webdriverio&logoColor=white)](https://webdriver.io/)
[![Appium](https://img.shields.io/badge/Appium-3.x-6A1B9A?logo=appium&logoColor=white)](https://appium.io/)
[![Mocha](https://img.shields.io/badge/Mocha-10.x-8D6748?logo=mocha&logoColor=white)](https://mochajs.org/)
[![Chai](https://img.shields.io/badge/Chai-BDD%2FTDD-A30701)](https://www.chaijs.com/)
[![Allure](https://img.shields.io/badge/Allure-Report-brightgreen)](https://github.com/Isaque2206/carrefour-mobile-qa-challenge/actions)

Automação **mobile** (Android/iOS) com **WebdriverIO + Appium + Mocha + Chai + Allure**, incluindo **pipeline de CI no GitHub Actions**.

---

## Requisitos (local)
- **Node** 18/20+
- **Java JDK**
- **Appium 3** (`npm i -g appium`)
  - Drivers: `appium driver install uiautomator2` (Android) e/ou `appium driver install xcuitest` (iOS)
- **Android SDK** (emulador) e/ou **Xcode** (simulador)
- (Opcional) `npx appium-doctor --android --ios`

> Variáveis recomendadas: `ANDROID_HOME`, `JAVA_HOME` e `PATH` com `platform-tools`, `emulator` e `tools`.

---

## App sob teste
Usamos o **native-demo-app** (projeto do WebdriverIO).  
Coloque os binários em `./apps/` com os nomes abaixo:
- **Android:** `native-demo-app-android.apk`
- **iOS:** `native-demo-app-ios.app` (ou ajuste `IOS_APP`)

Releases: https://github.com/webdriverio/native-demo-app/releases

---

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
## Estrutura (principal)
apps/                     # binários do app (APK/APP)
test/
specs/                  # testes (Mocha + Chai)
pageobjects/            # Page Objects
wdio.conf.ts              # config base do WebdriverIO
wdio.shared.conf.js       # setup compartilhado (reporters, capabilities comuns)
wdio.android.local.conf.js# config Android local
wdio.ios.local.conf.js    # config iOS local

## Stack & Ferramentas
WebdriverIO v8
Appium 3 (Drivers: UiAutomator2 / XCUITest)
Mocha (BDD) + Chai (assertions)
Allure (report)
TypeScript/JS (configs do WDIO)
GitHub Actions (CI)