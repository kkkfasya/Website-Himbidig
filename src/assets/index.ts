import anggotaLengkap from "./anggota1.webp";
import anggotaBph from "./anggota2.webp";
import anggotaInovasi from "./anggota3.webp";
import anggotaMedia from "./anggota4.webp";
import anggotaMinat from "./anggota5.webp";

import kegiatan1 from "./kegiatan1.webp";
import kegiatan2 from "./kegiatan2.webp";
import kegiatan3 from "./kegiatan3.webp";
import kegiatan4 from "./kegiatan4.webp";
import kegiatan5 from "./kegiatan5.webp";

import logo from "./logo.webp";

const kegiatanAll = [kegiatan1, kegiatan2, kegiatan3, kegiatan4, kegiatan5];

const anggotaAll = [
  anggotaLengkap,
  anggotaBph,
  anggotaInovasi,
  anggotaMedia,
  anggotaMinat,
];

const allImages = [...anggotaAll, ...kegiatanAll];

export {
  // grouped images
  allImages,
  kegiatanAll,
  anggotaAll,

  // individual images
  anggotaLengkap,
  anggotaBph,
  anggotaInovasi,
  anggotaMedia,
  anggotaMinat,
  kegiatan1,
  kegiatan2,
  kegiatan3,

  // logo
  logo,
};
