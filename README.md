<div align="center">

# ⚡ Bitcoin Address Generator — Premium Web3 Edition

**A fully client-side, highly secure, and offline-ready Bitcoin address generator.**

[![Security: 100% Client-Side](https://img.shields.io/badge/Security-100%25%20Client--Side-brightgreen.svg?style=for-the-badge)](#)
[![Offline Ready](https://img.shields.io/badge/Offline-Ready-blue.svg?style=for-the-badge)](#)
[![UI: Web3 Glassmorphism](https://img.shields.io/badge/UI-Web3%20Glassmorphism-purple.svg?style=for-the-badge)](#)
[![Mobile: Fully Responsive](https://img.shields.io/badge/Mobile-Fully%20Responsive-orange.svg?style=for-the-badge)](#)

</div>

---

## 📸 Project Preview

<div align="center">
  
  <!-- لقد قمت بإصلاح رابط الصورة الأولى هنا ليعمل بشكل صحيح -->
  <img src="https://raw.githubusercontent.com/AbdallahP2P/bitcoin-address-generator/main/images/1.jpg" alt="Bitcoin Address Generator - Desktop UI" width="800">
  <br>
  <em>(Single Address Generator - Dark Mode)</em>
  
  <br><br>

  <img src="https://raw.githubusercontent.com/AbdallahP2P/bitcoin-address-generator/main/images/2.jpg" alt="Bitcoin Address Generator - Mobile UI" width="800">
  <br>
  <em>(Mnemonic Seed & Mobile View)</em>

</div>

---

## 📖 Project Overview

This repository is a **massive architectural and visual overhaul** of a classic Bitcoin address generator. While the core cryptographic algorithms remain battle-tested, the entire architecture, UI/UX, and responsiveness have been rebuilt from the ground up to meet modern Web3 standards.

The goal of this project is to provide a tool that is not only cryptographically secure but also visually stunning, flawlessly mobile-responsive, and easy for developers to read, maintain, and deploy.

---

## 🛠️ What Was Upgraded? (My Contributions)

This project has been completely **refactored, modernized, and redesigned**. Key contributions include:

### 1. Code Restructuring & Refactoring
*   **Clean Architecture:** Removed all messy inline styles from the HTML and separated them into a highly organized, modular `style.css`.
*   **Modern Layouts:** Replaced legacy and broken `display: table` hacks with modern **CSS Flexbox and Grid** for ultimate flexibility.
*   **Bug Elimination:** Fixed critical layout breaks, overlapping elements, and removed the unnecessary "Randomness Canvas" overlay that caused mobile UI freezes.

### 2. Web3 Premium UI/UX
*   **Glassmorphism:** Applied a premium frosted-glass effect to the sidebar and main cards using `backdrop-filter: blur()`.
*   **Neon Dynamics:** Added glowing shadows, interactive hover states, and sweeping light animations on primary buttons.
*   **Smart Donation System:** Integrated an elegant, floating donation button with a sliding glass panel and transaction verification links.

### 3. Flawless Mobile Compatibility
*   **Smart Sidebar:** Transforms into a smooth, swipeable horizontal menu on mobile devices using `scroll-snap-type`.
*   **Zero Overlaps:** Intelligent `padding-bottom` logic ensures floating elements (like the Donate button) **never cover** generated seed phrases, addresses, or QR codes.
*   **Fluid Typography:** Fonts and layouts scale perfectly from 4K monitors down to 320px mobile screens.

### 4. Print-Ready (Paper Wallets)
*   **Smart Print CSS:** When printing paper wallets, the CSS automatically hides navigation, donation buttons, and dark backgrounds, converting everything to high-contrast black and white for perfect physical prints.

---

## ✨ Core Features

*   **Single Address Generation:** Generate Legacy, SegWit, and Native SegWit (Bech32) addresses.
*   **Bulk Generation:** Generate up to 1000 addresses simultaneously (with optional BIP38 encryption).
*   **Mnemonic Seed (BIP39):** Generate 12 to 24-word seed phrases and view BIP32 extended keys.
*   **Address Details:** Decrypt BIP38 private keys and view address details.
*   **Paper Wallet Generator:** Create highly customized, printable paper wallets.
*   **Testnet Support:** Fully compatible with Bitcoin Testnet (`?testnet`).

---

## 🔗 Original Source & Credits

This project is built upon the excellent cryptographic foundation created by **[Gustavo Madureira](https://github.com/gtmadureira)**. Massive thanks to him for the core cryptographic logic, BIP32/39/44 implementations, and the initial architecture.

*   **Original Repository:** [https://github.com/gtmadureira/bitcoin_address-generator](https://github.com/gtmadureira/bitcoin_address-generator)
*   **Original Author:** Gustavo Madureira.

---

## 💖 Support the Project (Donate)

If you find this premium Web3 overhaul useful, or if it saves you time, please consider a donation to support the continuous development and maintenance of this project.

**Bitcoin (Legacy P2PKH):**
```text
1AzAaRRKVMaWjgyz4kN4ZjozNh7dadHxKs
