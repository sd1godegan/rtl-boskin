/**
 * RTL Data — SD Negeri 1 Godegan
 * Best Practice Bimtek BOSP Kinerja Terbaik 2026
 * -----------------------------------------------------------------
 * Semua file PDF di-host di GitHub Pages (folder `slides/` & `dokumen/`).
 *
 * Cara isi:
 *   - Path relatif  →  "dokumen/digitalisasi/bukti-sosialisasi.pdf"
 *   - URL eksternal →  "https://sd1godegan.github.io/mpi"
 *   - Kosongkan ("") kalau belum ada → tombol jadi disabled.
 *
 * @typedef {Object} RtlItem
 * @property {string} title
 * @property {string} detail
 * @property {string} waktu
 * @property {string} sasaran
 * @property {string} pj
 * @property {string} output
 * @property {string} [code]   - Penanda (a., b., dsb.)
 * @property {string} [bukti]  - Path PDF bundel bukti
 * @property {string} [produk] - Path PDF produk atau URL eksternal
 *
 * @typedef {Object} RtlSection
 * @property {string} number
 * @property {string} title
 * @property {RtlItem[]} items
 *
 * @typedef {Object} RtlDataset
 * @property {string} title
 * @property {string} subtitle
 * @property {string} accent
 * @property {string} slide
 * @property {RtlSection[]} sections
 */

"use strict";

/**
 * Rekursif freeze — mencegah mutasi data secara tidak sengaja.
 * @template T
 * @param {T} value
 * @returns {T}
 */
function deepFreeze(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
  }
  return value;
}

/* ============================================================
   DATA
   ============================================================ */
const RTL_DATA = deepFreeze({

  /* ==================== 01. DIGITALISASI ==================== */
  digitalisasi: {
    title: "Digitalisasi Pembelajaran",
    subtitle: "Best Practice RTL Bimtek BOSP Kinerja Terbaik 2026 — SD Negeri 1 Godegan",
    accent: "#2563eb",
    slide: "slides/digitalisasi-pembelajaran.pdf",
    sections: [
      {
        number: "1",
        title: "Sosialisasi",
        items: [
          {
            title: "Sosialisasi Materi Bimtek Digitalisasi Pembelajaran",
            detail: "Diseminasi materi bimtek kepada warga sekolah: cara belajar di era digital, penggunaan perangkat digital, pembuatan media pembelajaran interaktif, pemanfaatan Ruang Murid, dan penyusunan RPP berbasis TPACK.",
            waktu: "Jumat, 25 September 2026",
            sasaran: "Guru, Kepala Sekolah, dan Tenaga Kependidikan",
            pj: "Ardika Riski Rahmawan, S.Pd.",
            output: "Warga sekolah memahami materi bimtek dan memiliki gambaran yang sama tentang penerapan digitalisasi pembelajaran.",
            bukti: "dokumen/digitalisasi/bukti-sosialisasi.pdf",
            produk: ""
          }
        ]
      },
      {
        number: "2",
        title: "Workshop MPI & RPP Berbasis TPACK",
        items: [
          {
            code: "a.",
            title: "Pembuatan Media Pembelajaran Interaktif (MPI)",
            detail: "Praktik membuat MPI memanfaatkan PID, laptop, Ruang Murid, DeepSeek AI, atau aplikasi digital lainnya.",
            waktu: "Senin, 28 September 2026",
            sasaran: "Guru",
            pj: "Ardika Riski Rahmawan, S.Pd.",
            output: "Menghasilkan media pembelajaran interaktif yang bisa langsung dipakai di kelas.",
            bukti: "dokumen/digitalisasi/bukti-workshop-mpi.pdf",
            produk: "https://sd1godegan.github.io/mpi"
          },
          {
            code: "b.",
            title: "Pembuatan RPP Berbasis TPACK",
            detail: "Menyusun RPP memuat tujuan pembelajaran, langkah kegiatan, media digital, dan penilaian untuk penguatan literasi dan numerasi.",
            waktu: "Senin, 28 September 2026",
            sasaran: "Guru",
            pj: "Ardika Riski Rahmawan, S.Pd.",
            output: "Tersusunnya RPP berbasis TPACK yang siap diterapkan.",
            bukti: "dokumen/digitalisasi/bukti-workshop-rpp.pdf",
            produk: "dokumen/digitalisasi/produk-rpp-tpack.pdf"
          }
        ]
      },
      {
        number: "3",
        title: "Implementasi",
        items: [
          {
            title: "Praktik Pembelajaran dengan MPI",
            detail: "Guru mencoba menggunakan MPI di kelas, sambil diamati dan didokumentasikan.",
            waktu: "Selasa, 29 September 2026",
            sasaran: "Guru dan Peserta Didik",
            pj: "Jumaryati, S.Pd. & Nur Ika Sudaryani, S.Pd.",
            output: "Pembelajaran dengan MPI terlaksana dan terdokumentasi dengan baik.",
            bukti: "dokumen/digitalisasi/bukti-implementasi.pdf",
            produk: ""
          }
        ]
      },
      {
        number: "4",
        title: "Refleksi",
        items: [
          {
            title: "Diskusi Refleksi",
            detail: "Berdiskusi bersama untuk menilai apa yang sudah berjalan, apa kendalanya, dan apa yang perlu diperbaiki ke depan.",
            waktu: "Rabu, 30 September 2026",
            sasaran: "Guru, Kepala Sekolah, dan Tenaga Kependidikan",
            pj: "Jumaryati, S.Pd.",
            output: "Catatan refleksi, evaluasi, dan rencana perbaikan untuk penguatan digitalisasi pembelajaran.",
            bukti: "dokumen/digitalisasi/bukti-refleksi.pdf",
            produk: ""
          }
        ]
      }
    ]
  },

  /* ==================== 02. TATA KELOLA ==================== */
  tatakelola: {
    title: "Tata Kelola Sekolah (SPMI)",
    subtitle: "Best Practice RTL Bimtek BOSP Kinerja Terbaik 2026 — SD Negeri 1 Godegan",
    accent: "#7c3aed",
    slide: "slides/tata-kelola-spmi.pdf",
    sections: [
      {
        number: "1",
        title: "Sosialisasi",
        items: [
          {
            title: "IHT Sistem Penjaminan Mutu Pendidikan",
            detail: "In House Training untuk seluruh warga sekolah tentang konsep dan penerapan SPMI di satuan pendidikan.",
            waktu: "22 September 2026",
            sasaran: "Kepala Sekolah, Guru, dan Tendik",
            pj: "Ardika Riski Rahmawan, S.Pd.",
            output: "Pemahaman warga sekolah tentang Sistem Penjaminan Mutu Pendidikan.",
            bukti: "dokumen/tatakelola/bukti-iht-spmi.pdf",
            produk: ""
          }
        ]
      },
      {
        number: "2",
        title: "Perencanaan",
        items: [
          {
            title: "Workshop Perencanaan Berbasis Data",
            detail: "Menyusun perencanaan sekolah berdasarkan data rapor pendidikan dan evaluasi diri sekolah.",
            waktu: "23 September 2026",
            sasaran: "Kepala Sekolah, Guru, dan Tendik",
            pj: "Ardika Riski Rahmawan, S.Pd.",
            output: "RKT dan RKAS 2027 tersusun.",
            bukti: "dokumen/tatakelola/bukti-workshop-perencanaan.pdf",
            produk: "dokumen/tatakelola/produk-draft-rkt-2027.pdf"
          }
        ]
      },
      {
        number: "3",
        title: "Implementasi Benahi",
        items: [
          {
            code: "a.",
            title: "Diskusi Guru: Merancang Aktivitas Pembelajaran Geometri",
            detail: "Merancang aktivitas pembelajaran Geometri melalui komunitas belajar sekolah.",
            waktu: "24 September 2026",
            sasaran: "Kepala Sekolah, Guru, dan Tendik",
            pj: "Jumaryati, S.Pd.",
            output: "Tersusunnya rancangan kegiatan pembelajaran Geometri.",
            bukti: "dokumen/tatakelola/bukti-diskusi-geometri.pdf",
            produk: ""
          },
          {
            code: "b.",
            title: "Simulasi / Peer Teaching",
            detail: "Uji coba mengajar antarteman guru sebelum diterapkan di kelas.",
            waktu: "25 September 2026",
            sasaran: "Kepala Sekolah, Guru, dan Tendik",
            pj: "Diah Nurhidayati, S.Pd.",
            output: "Guru mendapatkan pengalaman sebelum menerapkan pembelajaran di kelas.",
            bukti: "dokumen/tatakelola/bukti-peer-teaching.pdf",
            produk: ""
          }
        ]
      },
      {
        number: "4",
        title: "Refleksi",
        items: [
          {
            title: "Diskusi Refleksi Keberhasilan dan Kesulitan Pembelajaran",
            detail: "Guru mendiskusikan keberhasilan dan kesulitan dalam kegiatan rancangan aktivitas pembelajaran dan peer teaching.",
            waktu: "25 September 2026",
            sasaran: "Kepala Sekolah, Guru, dan Tendik",
            pj: "Jumaryati, S.Pd.",
            output: "Terjadi perbaikan pembelajaran secara berkelanjutan.",
            bukti: "dokumen/tatakelola/bukti-refleksi.pdf",
            produk: ""
          }
        ]
      }
    ]
  },

  /* ==================== 03. LITERASI & NUMERASI ==================== */
  litnum: {
    title: "Literasi & Numerasi",
    subtitle: "Best Practice RTL Bimtek BOSP Kinerja Terbaik 2026 — SD Negeri 1 Godegan",
    accent: "#ea580c",
    slide: "slides/literasi-numerasi.pdf",
    sections: [
      {
        number: "1",
        title: "Sosialisasi",
        items: [
          {
            title: "Sosialisasi Bimtek Literasi Numerasi",
            detail: "Diseminasi hasil Bimtek BOSP Kinerja Terbaik 2026 dan pembagian level kognitif L1–L3. Bedah Rapor Pendidikan 2025: Literasi 100% Baik (terendah: Teks Sastra 81,19; Penalaran L3 63,53); Numerasi 88,23% Baik (terendah: Geometri 55,58; Penalaran L3 56,62); Karakter pada pembelajaran eksploratif, bernalar kritis, dan mandiri. Prioritas RTL: (1) Numerasi Geometri, (2) Literasi Teks Sastra, (3) Karakter Nalar Kritis & Kreativitas. Integrasi dalam kokurikuler \"Cerdas Literasi & Cerdas Numerasi\" (Selasa & Rabu, 07.00–07.35 WIB) dan penyusunan LKPD terstandar berjenjang L1–L3.",
            waktu: "Kamis, 8 Oktober 2026",
            sasaran: "Kepala Sekolah, Seluruh Guru Kelas, Guru Mata Pelajaran, dan Tenaga Kependidikan",
            pj: "Wahyuningrum Pratiwi, S.Pd.",
            output: "Notulensi sosialisasi dan daftar hadir seluruh peserta, serta foto dokumentasi kegiatan sosialisasi dan bedah Rapor Pendidikan.",
            bukti: "dokumen/litnum/bukti-diskusi-rapor.pdf",
            produk: ""
          }
        ]
      },
      {
        number: "2",
        title: "Workshop Program Literasi Numerasi",
        items: [
          {
            code: "a.",
            title: "Workshop LKPD Literasi Teks Sastra Berjenjang L1–L3",
            detail: "Menyusun LKPD Literasi Teks Sastra berjenjang L1–L3 untuk kelas I–VI. Mencakup pedoman AI, penanganan miskonsepsi, praktik generate prompt teks sastra & gambar adegan, reviu pasca-generate, dan peer review keterbacaan serta kesesuaian soal L1–L3 dengan indikator Rapor Pendidikan.",
            waktu: "Jumat, 9 Oktober 2026",
            sasaran: "Seluruh Guru Kelas (I–VI) dan Guru Mata Pelajaran",
            pj: "Wahyuningrum Pratiwi, S.Pd.",
            output: "LKPD Literasi Teks Sastra untuk seluruh kelas I–VI (Fase A, B, C)",
            bukti: "dokumen/litnum/bukti-workshop-literasi.pdf",
            produk: "dokumen/litnum/produk-lkpd-literasi.pdf"
          },
          {
            code: "b.",
            title: "Workshop LKPD Numerasi Geometri Berjenjang L1–L3",
            detail: "Menyusun LKPD Numerasi Geometri berjenjang L1–L3 untuk kelas I–VI. Mencakup pedoman AI, penanganan miskonsepsi, praktik generate prompt soal kontekstual dengan kotak berstruktur (Diketahui, Ditanya, Penyelesaian, Kesimpulan) dan gambar visual, reviu pasca-generate, serta peer review kelogisan angka dan kesesuaian soal L1–L3 dengan indikator Rapor Pendidikan.",
            waktu: "Senin, 12 Oktober 2026",
            sasaran: "Seluruh Guru Kelas (I–VI) dan Guru Mata Pelajaran",
            pj: "Wahyuningrum Pratiwi, S.Pd.",
            output: "LKPD Numerasi Geometri untuk seluruh kelas I–VI (Fase A, B, C)",
            bukti: "dokumen/litnum/bukti-workshop-numerasi.pdf",
            produk: "dokumen/litnum/produk-lkpd-numerasi.pdf"
          }
        ]
      },
      {
        number: "3",
        title: "Implementasi",
        items: [
          {
            code: "a.",
            title: "Kokurikuler \"Cerdas Literasi\" & Pengerjaan LKPD Literasi Mandiri",
            detail: "Kokurikuler pagi \"Cerdas Literasi\" pukul 07.00–07.35 WIB. Siswa mengerjakan LKPD Teks Sastra secara mandiri sesuai fase: Fase A (I–II) teks pendek bergambar L1–L3; Fase B (III–IV) cerita rakyat/fiksi, alur dan penokohan L1–L2 serta evaluasi tindakan tokoh L3; Fase C (V–VI) teks kompleks, analisis konflik, dan refleksi nilai moral L3. Guru mendampingi tanpa mengintervensi, lalu menilai dengan rubrik yang disiapkan.",
            waktu: "Selasa, 13 Oktober 2026",
            sasaran: "Seluruh Guru Kelas (I–VI) dan Siswa",
            pj: "Seluruh Guru Kelas",
            output: "Hasil pengerjaan LKPD Literasi Teks Sastra mandiri seluruh siswa kelas I–VI, rekapitulasi nilai dan peta pencapaian level kognitif, serta foto dokumentasi kegiatan pengerjaan LKPD literasi di masing-masing kelas.",
            bukti: "dokumen/litnum/bukti-implementasi-literasi.pdf",
            produk: ""
          },
          {
            code: "b.",
            title: "Kokurikuler \"Cerdas Numerasi\" & Pengerjaan LKPD Numerasi Mandiri",
            detail: "Kokurikuler pagi \"Cerdas Numerasi\" pukul 07.00–07.35 WIB. Siswa mengerjakan LKPD Numerasi Geometri secara mandiri sesuai fase: Fase A (I–II) mengenal bangun datar/ruang dan mengukur objek nyata L1–L3; Fase B (III–IV) keliling & luas bangun datar dari data visual/tabel dengan pola Diketahui–Ditanya–Penyelesaian–Jawaban; Fase C (V–VI) soal kontekstual denah & tata ruang efisien serta penalaran non-rutin. Guru memantau kemandirian, lalu menilai mengacu kisi-kisi dan pedoman penskoran.",
            waktu: "Rabu, 14 Oktober 2026",
            sasaran: "Seluruh Guru Kelas (I–VI) dan Siswa",
            pj: "Seluruh Guru Kelas",
            output: "Hasil pengerjaan LKPD Numerasi Geometri mandiri seluruh siswa kelas I–VI, rekapitulasi nilai dan peta pencapaian level kognitif, serta foto dokumentasi kegiatan pengerjaan LKPD numerasi di masing-masing kelas.",
            bukti: "dokumen/litnum/bukti-implementasi-numerasi.pdf",
            produk: ""
          }
        ]
      },
      {
        number: "4",
        title: "Refleksi",
        items: [
          {
            title: "Evaluasi & Refleksi Program Penguatan Literasi Numerasi",
            detail: "Evaluasi hasil LKPD Literasi & Numerasi seluruh kelas. Pembiasaan kokurikuler pagi (Selasa & Rabu) membangun antusiasme tanpa mengganggu intrakurikuler, dan LKPD berjenjang L1–L3 memicu nalar kritis serta pemecahan masalah. Kendala: sebagian siswa kelas awal lambat membaca sulit pada soal L2/L3. Solusi: pendekatan TaRL, tutor sebaya, dan remedial. Ditutup dengan analisis ketercapaian target RTL dan evaluasi output.",
            waktu: "Rabu, 14 Oktober 2026",
            sasaran: "Kepala Sekolah, Seluruh Guru Kelas (I–VI), Guru Mata Pelajaran, dan Tenaga Kependidikan",
            pj: "Jumaryati, S.Pd. (Kepala Sekolah)",
            output: "Dokumen Notulen Refleksi dan Evaluasi Lengkap.",
            bukti: "dokumen/litnum/bukti-refleksi.pdf",
            produk: ""
          }
        ]
      }
    ]
  }

});
