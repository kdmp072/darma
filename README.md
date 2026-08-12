# DARMA

Dashboard Akurat Reporting Manajemen Aplikasi untuk monitoring SPPG, Tenaga Kerja, dan KDMP wilayah Pekalongan/Batang.

## Persyaratan

- Node.js 22 atau lebih baru
- Akun Cloudflare dengan D1
- Binding D1 bernama `DB`

## Pengembangan lokal

```bash
npm ci
npm run db:schema:local
npm run dev
```

## Validasi

```bash
npm run validate
```

Validasi mencakup syntax seluruh ES Module, domain laporan, repository data, perhitungan SPPG 204/411, permission, dan API/RBAC Worker.

## Deployment

```bash
npm run validate
npx wrangler deploy --dry-run
npm run deploy
```

Jangan menjalankan `db:schema:remote` atau `deploy` sebelum memastikan `database_id` pada `wrangler.toml` menunjuk D1 yang benar. Backup JSON dan `.dev.vars` tidak boleh dimasukkan ke repository.

## Struktur

- `public/index.html` — shell tampilan.
- `public/styles/` — CSS per area fungsi.
- `public/js/app.js` — composition root ES Modules.
- `public/js/domain/` — definisi dan perhitungan murni.
- `public/js/features/` — Map, Dashboard, Unit, Monitoring, Histori, Laporan, dan ekspor.
- `public/js/data/` — runtime dan repository data.
- `server/api.js` — API, autentikasi, RBAC, dan akses D1.
- `worker.js` — entry point Cloudflare Worker.
- `tests/` — pengujian otomatis.

Dokumentasi rinci tersedia di `docs/refactor-architecture.md`.

Panduan membuat repository GitHub, Worker, D1 baru, dan memulihkan backup tersedia di `SETUP-GITHUB-CLOUDFLARE.md`.
