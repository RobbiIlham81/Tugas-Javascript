// Belajar Destructuring

// contoh destructur di Function Parameter
const anime = {
  judul: "One Piece",
  rilis: 1999,
  episode: 1081,
  genre: "petualangan",
  pengarang: {
    nama: "Eiichiro Oda",
    negara: "Jepang",
  },
};

function printInfoAnime(judul, rilis, namaPengarang) {
  console.log(judul, rilis, namaPengarang);
}
printInfoAnime(anime.judul, anime.rilis, anime.pengarang.nama);

// Destructur
function printInfoAnime2({ judul, rilis, episode }) {
  console.log(judul, rilis, episode);
}
printInfoAnime2(anime);
