/* =====================================================================
   DATA RTL — SD Negeri 1 Godegan
   ---------------------------------------------------------------------
   Cara mengisi link Google Drive:
     - Tempel link share biasa (contoh di bawah), TIDAK perlu ubah manual.
     - Format yang didukung:
         https://drive.google.com/file/d/FILE_ID/view?usp=sharing
         https://drive.google.com/open?id=FILE_ID
         https://drive.google.com/uc?id=FILE_ID
         FILE_ID (hanya ID)
     - Sistem akan otomatis mengubahnya menjadi tautan unduhan langsung.
     - Kosongkan ("") → tombol jadi "Belum tersedia".
     - Setelan Drive wajib: "Anyone with the link can view".
   ===================================================================== */

const RTL_DATA = {

  /* ================= 01. DIGITALISASI PEMBELAJARAN ================= */
  digitalisasi: {
    title: "Digitalisasi Pembelajaran",
    subtitle: "Best Practice RTL Bimtek BOSP Kinerja Terbaik 2026 — SD Negeri 1 Godegan",
    accent: "#2563eb",
    slide: "slides/digitalisasi-pembelajaran.pdf",
    rtl_doc: "",   // link dokumen RTL di Drive (Word/PDF)
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
            files: [
              { label: "Materi Bimtek", link: "" },
              { label: "Foto Kegiatan", link: "" }
            ]
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
            files: [{ label: "Contoh MPI", link: "" }]
          },
          {
            code: "b.",
            title: "Pembuatan RPP Berbasis TPACK",
            detail: "Menyusun RPP yang memuat tujuan pembelajaran, langkah kegiatan, media digital, dan penilaian yang sesuai untuk penguatan literasi dan numerasi.",
            waktu: "Senin, 28 September 2026",
            sasaran: "Guru",
            pj: "Ardika Riski Rahmawan, S.Pd.",
            output: "Tersusunnya RPP berbasis TPACK yang siap diterapkan.",
            files: [{ label: "Template RPP", link: "" }]
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
            files: [{ label: "Dokumentasi Praktik", link: "" }]
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
            files: [{ label: "Notulen Refleksi", link: "" }]
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
    rtl_doc: "",
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
            files: [
              { label: "Materi IHT SPMI", link: "" },
              { label: "Daftar Hadir", link: "" }
            ]
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
            files: [
              { label: "Dokumen RKT 2027", link: "" },
              { label: "Dokumen RKAS 2027", link: "" }
            ]
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
            files: [{ label: "Rancangan Pembelajaran", link: "" }]
          },
          {
            code: "b.",
            title: "Simulasi / Peer Teaching",
            detail: "Uji coba mengajar antarteman guru sebelum diterapkan di kelas.",
            waktu: "24 September 2026",
            sasaran: "Kepala Sekolah, Guru, dan Tendik",
            pj: "Diah Nurhidayati, S.Pd.",
            output: "Guru mendapatkan pengalaman sebelum menerapkan pembelajaran di kelas.",
            files: [{ label: "Lembar Observasi", link: "" }]
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
            files: [{ label: "Notulen Refleksi", link: "" }]
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
    rtl_doc: "",
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
            files: [
              { label: "Notulen Diskusi", link: "" },
              { label: "Foto Kegiatan", link: "" }
            ]
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
            files: [
              { label: "LKPD", link: "" },
              { label: "Kisi-kisi Soal L1–L3", link: "" },
              { label: "Modul Pembelajaran", link: "" }
            ]
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
            files: [
              { label: "Lembar Observasi", link: "" },
              { label: "Hasil Murid", link: "" }
            ]
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
            files: [
              { label: "Notulen Refleksi", link: "" },
              { label: "Rencana Lanjutan", link: "" }
            ]
          }
        ]
      }
    ]
  }

};
