# GIVIXUS

Aplikasi Web GIVIXUS — Dashboard web interaktif (versi Web, tanpa APK).

## Struktur Project

- `index.js` — Server Express (Backend + Server Statik)
- `GIVIXUS/Login.html` — Halaman Login
- `GIVIXUS/Givixus.html` — Dashboard Utama (Home)
- `database/config.js` — Konfigurasi (Environment Variables)
- `database/user.json`, `database/akses.json` — Data pengguna
- `vercel.json` — Konfigurasi deploy ke Vercel

## Environment Variables

Buat file `.env` (lihat `.env.example`) atau atur di Vercel Dashboard → Project Settings → Environment Variables:

- `TELEGRAM_BOT_TOKEN` — Token bot Telegram (opsional)
- `OWNER_ID` — Id owner (opsional)
- `PORT` — Port server (digunakan otomatis di Vercel)
- `IPVPS` — URL VPS (opsional)

## Deploy ke Vercel

1. Deploy repositori ini ke Vercel (Vercel membaca `vercel.json`).
2. Set Environment Variables seperti di atas.
3. Build & run: `npm run start`.

## Catatan

Fitur pengiriman payload (bug/crash/blank) dinonaktifkan untuk menjaga keamanan WhatsApp seluruh pengguna.
