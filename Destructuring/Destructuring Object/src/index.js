// Belajar Destructuring

// contoh destructur object
const anime = {
  judul: "One Piece",
  rilis: 1999,
  episodde: 1081,
  genre: "petualangan",
  pengarang: {
    nama: "Eiichiro Oda",
    negara: "Jepang",
  },
};

const judulAnime = anime.judul;
const rilisAnime = anime.rilis;
const namaPengarang = anime.pengarang.nama;
console.log(judulAnime, rilisAnime, namaPengarang);

//destructor
const { judul, rilis, ...infoLainnya } = anime;
console.log(judul, rilis, infoLainnya);
