/* =====================================================================
   DATA RTL — SD Negeri 1 Godegan
   ---------------------------------------------------------------------
   Semua file PDF disimpan di GitHub (folder dokumen/ dan slides/).

   Isi bukti/produk dengan PATH RELATIF:
     "dokumen/digitalisasi/bukti-sosialisasi.pdf"

   Untuk link web (misal Portal MPI), isi URL lengkap:
     "https://sd1godegan.github.io/mpi"

   Viewer otomatis:
     - Path .pdf → modal preview
     - URL web  → buka tab baru

   Kosongkan ("") kalau belum ada → tombol jadi "Belum tersedia".
   ===================================================================== */

const RTL_DATA = {

  /* ================= 01. DIGITALISASI PEMBELAJARAN ================= */
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
            code: "",
            title: "Sosialisasi Materi Bimtek Digitalisasi Pembelajaran",
            detail: "Menyampaikan kembali materi bimtek kepada warga sekolah tentang cara belajar di era digital, penggunaan perangkat digital, pembuatan media pembelajaran interaktif, pemanfaatan Ruang Murid, dan penyusunan RPP berbasis TPACK.",
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
            detail: "Praktik membuat MPI dengan memanfaatkan PID, laptop, Ruang Murid, DeepSeek AI, atau aplikasi digital lainnya.",
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
            detail: "Menyusun RPP yang memuat tujuan pembelajaran, langkah kegiatan, media digital, dan penilaian yang sesuai untuk penguatan literasi dan numerasi.",
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
            code: "",
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
            code: "",
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

  /* ================= 02. TATA KELOLA SEKOLAH (SPMI) ================= */
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
            code: "",
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
            code: "",
            title: "Workshop Perencanaan Berbasis Data",
            detail: "Menyusun perencanaan sekolah berdasarkan data rapor pendidikan dan evaluasi diri sekolah.",
            waktu: "23 September 2026",
            sasaran: "Kepala Sekolah, Guru, dan Tendik",
            pj: "Ardika Riski Rahmawan, S.Pd.",
            output: "RKT dan RKAS 2027 tersusun.",
            bukti: "dokumen/tatakelola/bukti-workshop-perencanaan.pdf",
            produk: "dokumen/tatakelola/produk-rkt-rkas-2027.pdf"
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
            waktu: "24 September 2026",
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
            code: "",
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

  /* ================= 03. LITERASI & NUMERASI ================= */
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
            code: "",
            title: "Diskusi Bersama: Membaca Rapor Pendidikan Sekolah",
            detail: "Mendiseminasikan materi bimtek BOS Kinerja. Guru memahami kondisi nyata sekolah dari data Rapor Pendidikan 2025, mengenali 3 prioritas utama (numerasi geometri, literasi teks sastra, karakter kreativitas–nalar kritis), dan memahami konsep dasar literasi-numerasi (L1–L3, miskonsepsi litnum).",
            waktu: "Kamis, 8 Oktober 2026",
            sasaran: "Kepala Sekolah, seluruh Guru, dan Tendik",
            pj: "Wahyuningrum Pratiwi, S.Pd.",
            output: "Notulen diskusi dan foto kegiatan.",
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
            code: "",
            title: "Merancang Pembelajaran Litnum Berbasis Kokurikuler",
            detail: "Guru menyusun LKPD dan soal bertahap L1 → L2 → L3, menyiapkan pembelajaran yang mengaktifkan penalaran kritis & kreativitas murid, serta memilih strategi penguatan (lingkungan kaya teks, diskusi bermakna, pembelajaran kontekstual).",
            waktu: "Jumat, 9 Okt & Senin, 12 Okt 2026",
            sasaran: "Seluruh Guru Kelas dan Guru Mapel",
            pj: "Wahyuningrum Pratiwi, S.Pd.",
            output: "LKPD, kisi-kisi soal L1–L3, dan modul pembelajaran.",
            bukti: "dokumen/litnum/bukti-workshop-litnum.pdf",
            produk: "dokumen/litnum/produk-lkpd-l1-l3.pdf"
          }
        ]
      },
      {
        number: "3",
        title: "Implementasi",
        items: [
          {
            code: "",
            title: "Praktik Mengajar (Uji Coba di Kelas)",
            detail: "Guru menerapkan pembelajaran literasi-numerasi yang sudah dirancang. Murid berlatih menalar (numerasi) dan mengevaluasi teks (literasi) melalui masalah nyata. Sekolah mulai mengintegrasikan ke kokurikuler \"Cerdas Literasi & Cerdas Numerasi\" (Selasa–Rabu, 07.00–07.35).",
            waktu: "Selasa, 13 & Rabu, 14 Oktober 2026",
            sasaran: "Guru Model dan Murid",
            pj: "Guru Model",
            output: "Foto pembelajaran, lembar observasi, dan hasil murid.",
            bukti: "dokumen/litnum/bukti-praktik-mengajar.pdf",
            produk: ""
          }
        ]
      },
      {
        number: "4",
        title: "Refleksi",
        items: [
          {
            code: "",
            title: "Diskusi Evaluasi Program Penguatan Litnum",
            detail: "Guru berbagi pengalaman berhasil dan sulit, menilai apakah pembelajaran sudah melatih L1–L3 serta menumbuhkan kreativitas–nalar kritis, lalu menyusun langkah lanjutan melalui intrakurikuler, kokurikuler, dan pembiasaan.",
            waktu: "Kamis, 15 Oktober 2026",
            sasaran: "Kepala Sekolah dan seluruh Guru",
            pj: "Kepala Sekolah",
            output: "Notulen refleksi dan dokumen rencana lanjutan.",
            bukti: "dokumen/litnum/bukti-refleksi.pdf",
            produk: ""
          }
        ]
      }
    ]
  }

};
