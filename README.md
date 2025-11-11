# Alışkanlık Takip Uygulaması (Habit Tracker)

React Native Expo ile geliştirilmiş bir alışkanlık takip uygulaması.

## Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Firebase Yapılandırması

1. [Firebase Console](https://console.firebase.google.com/)'a gidin
2. Yeni bir proje oluşturun veya mevcut bir projeyi seçin
3. Project Settings > General bölümüne gidin
4. "Your apps" bölümünden Web uygulaması ekleyin (</> ikonu)
5. Yapılandırma bilgilerinizi kopyalayın
6. `config/firebase.js` dosyasını açın ve aşağıdaki bilgileri güncelleyin:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. Firestore Veritabanını Ayarlayın

1. Firebase Console'da Firestore Database'i etkinleştirin
2. Test modunda başlatın (geliştirme için)
3. Uygulama çalıştığında otomatik olarak bağlantı test edilecektir

## Çalıştırma

```bash
npm start
```

Ardından:
- Web için: `w` tuşuna basın
- Android için: `a` tuşuna basın
- iOS için: `i` tuşuna basın

## Özellikler

- ✅ Firestore bağlantısı
- 🔄 Bağlantı durumu kontrolü
- 📱 React Native Expo desteği

## Sonraki Adımlar

- Günlük görevler ekleme
- Firestore'da günlük veri kaydı
- Haftalık başarı yüzdesi gösterimi

