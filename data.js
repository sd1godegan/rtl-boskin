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
            title: "Diskusi Bersama: Membaca Rapor Pendidikan Sekolah",
            detail: "Mendiseminasikan hasil Bimtek BOSP Kinerja Terbaik 2026. Guru mempelajari konsep dasar literasi (kecakapan membaca, memahami, mengevaluasi, dan merefleksikan teks sastra maupun teks informasi) dan numerasi (kemampuan bernalar menggunakan konsep, prosedur, fakta, dan alat matematika untuk menyelesaikan masalah sehari-hari), serta pembagian level proses kognitif L1 (menemukan informasi eksplisit), L2 (memahami dan menerapkan), dan L3 (menalar dan mengevaluasi). Bedah Rapor Pendidikan 2025: Literasi 100% Baik dengan sub-indikator terendah A.1.2 Teks Sastra (81,19) dan A.1.5 Penalaran L3 (63,53); Numerasi 88,23% Baik dengan sub-indikator terendah A.2.3 Geometri (55,58) dan A.2.7 Penalaran L3 (56,62); serta indikator Karakter pada pemenuhan pembelajaran yang memfasilitasi murid bereksplorasi, bernalar kritis, dan memecahkan masalah secara mandiri. Menetapkan 3 prioritas utama: (1) Numerasi Geometri — bangun datar/ruang, spasial, dan pengukuran; (2) Literasi Teks Sastra — alur cerita, penokohan, pesan moral, dan nilai tersirat; (3) Karakter Nalar Kritis & Kreativitas — pembelajaran yang mendorong pertanyaan kritis dan eksplorasi. Menyepakati program kokurikuler \"Cerdas Literasi & Cerdas Numerasi\" setiap hari Selasa dan Rabu pukul 07.00–07.35 WIB serta penyusunan instrumen LKPD terstandar berfokus teks sastra, geometri, dan soal berjenjang L1–L3.",
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
            detail: "Membahas pedoman AI penyusunan LKPD literasi, penanganan miskonsepsi literasi. Menyusun LKPD Literasi Teks Sastra berjenjang L1–L3 untuk semua kelas I–VI. Praktik generate prompt AI untuk memproduksi teks sastra sesuai prioritas Rapor Pendidikan  dan menyiapkan prompt gambar adegan cerita. Diakhiri reviu, verifikasi pasca-generate, dan peer review keterbacaan teks, kecukupan baris jawaban uraian, serta kesesuaian soal L1/L2/L3 dengan indikator Rapor Pendidikan.",
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
            detail: "Membahas pedoman AI penyusunan LKPD numerasi dengan fokus domain Geometri dan Pengukuran, penanganan miskonsepsi numerasi, menyusun LKPD Numerasi Geometri berjenjang L1–L3 untuk semua kelas I–VI. Praktik generate prompt AI untuk LKPD numerasi geometri kontekstual dengan kotak pengerjaan berstruktur (Diketahui, Ditanya, Penyelesaian, Kesimpulan) serta gambar visual pendukung. Diakhiri reviu dan verifikasi pasca-generate melalui peer review kelogisan angka, kejelasan petunjuk soal, serta kesesuaian soal L1/L2/L3 dengan indikator Rapor Pendidikan.",
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
            detail: "Pelaksanaan kokurikuler pagi \"Cerdas Literasi\" pukul 07.00–07.35 WIB. Seluruh siswa memasuki kelas masing-masing tepat waktu, pengkondisian suasana belajar literasi yang kondusif, dan guru kelas membagikan perangkat LKPD Literasi Teks Sastra yang telah disusun pada hari sebelumnya. Siswa mengerjakan LKPD secara mandiri: Fase A (Kelas I–II) membaca teks sastra pendek bergambar lalu menjawab pertanyaan berjenjang L1 (menemukan informasi eksplisit) hingga L3 (pendapat sederhana tentang pesan moral cerita); Fase B (Kelas III–IV) membaca teks cerita rakyat/fiksi dan mengerjakan pemahaman alur, penokohan (L1–L2), serta evaluasi tindakan tokoh (L3); Fase C (Kelas V–VI) membaca teks sastra kompleks dan menyelesaikan soal penalaran mandiri, menganalisis konflik cerita, serta merefleksikan nilai-nilai moral dalam kehidupan sehari-hari (L3). Guru mendampingi proses pengerjaan tanpa mengintervensi jawaban siswa, lalu mengumpulkan seluruh lembar LKPD untuk diperiksa dan dinilai menggunakan rubrik penilaian yang telah disiapkan.",
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
            detail: "Pelaksanaan kokurikuler pagi \"Cerdas Numerasi\" pukul 07.00–07.35 WIB. Seluruh siswa mengawali kegiatan di kelas masing-masing tepat waktu, pengkondisian pembelajaran numerasi secara tertib, dan guru kelas membagikan LKPD Numerasi Geometri yang telah dirancang pada hari sebelumnya. Siswa mengerjakan LKPD secara mandiri: Fase A (Kelas I–II) mengamati bentuk bangun datar/ruang di dalam kelas, mengukur objek nyata menggunakan alat ukur baku maupun tak baku, lalu menuliskan hasilnya (L1–L3); Fase B (Kelas III–IV) mengerjakan soal keliling dan luas bangun datar berbasis data visual/tabel menggunakan pola pengerjaan berstruktur (Diketahui, Ditanya, Penyelesaian, Jawaban) (L1–L3); Fase C (Kelas V–VI) menyelesaikan masalah numerasi kontekstual mengenai denah dan tata letak ruang efisien serta mendeduksi perhitungan matematika non-rutin pada kotak kerja LKPD (L1–L3). Guru memantau dan mendampingi jalannya pengerjaan untuk memastikan kemandirian serta keteraturan siswa, kemudian mengumpulkan lembar kerja untuk diperiksa dan dinilai mengacu pada kisi-kisi serta pedoman penskoran yang telah disiapkan.",
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
            detail: "Kepala Sekolah dan guru mengevaluasi hasil pengerjaan LKPD Literasi dan Numerasi mandiri yang telah diselesaikan siswa di seluruh kelas. Guru melaporkan bahwa pembiasaan kokurikuler pagi \"Cerdas Literasi & Cerdas Numerasi\" (Selasa & Rabu) membangun antusiasme belajar siswa tanpa mengganggu jam intrakurikuler, dan penggunaan LKPD berjenjang (L1–L3) berbasis Rapor Pendidikan berhasil memicu daya nalar kritis serta pemecahan masalah siswa di kelas. Diskusi reflektif guru membahas keberhasilan dan kendala: kendala yang teridentifikasi adalah sebagian siswa kelas awal yang lambat membaca mengalami kesulitan saat mengerjakan soal L2/L3; solusi yang disepakati adalah penerapan pendekatan Teaching at the Right Level (TaRL) serta pendampingan khusus melalui tutor sebaya dan remedial. Kegiatan ditutup dengan analisis ketercapaian target RTL dan evaluasi output kegiatan.",
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
