// Belajar Destructuring

// contoh destructur Default Value dan Alias
const anime = {
  judul: "One Piece",
  rilis: 1999,
  episode: 1081,
  genre: "petualangan",
  pengarang: {
    nama: "Eiichiro Oda",
    negara: "Jepang",
  },
  majalah: "Weekly Shonen Jump",
};

// Destructur
function printInfoAnime2({ judul, rilis, episode: eps, majalah = "Weekly Shonen Jump" }) {
  console.log(judul, rilis, eps, majalah);
}
printInfoAnime2(anime);
