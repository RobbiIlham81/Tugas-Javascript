console.clear();

const nilai = 60;
const keterangan = nilai > 70 ? "Selamat Anda Lulus" : "Maaf Anda Harus Mengikuti Ramedial";
console.log(keterangan); // Maaf Anda Harus Mengikuti Ramedial

const kondisiAnd = nilai < 70 && "Lulus"; // Jika kondisi true, akan mereturn "Lulus"
const kondisiOr = nilai > 70 || "Ramedial;"; // Jika kondisi false, akan mereturn "Ramedial"
console.log(kondisiAnd); // Lulus
console.log(kondisiOr); // Ramedial

const listFilm = [
  {
    judul: "Harry Potter",
    genre: ["Fantasi", "Horror", "Misteri"],
    season: 8,
  },
  {
    judul: "Hunger Games",
    genre: ["Survival", "Misteri", "Action"],
    season: 4,
  },
  {
    judul: "The Maze Runner",
    genre: ["Misteri", "Zombie", "Survival"],
    season: 4,
  },
  {
    judul: "Toy Story",
    genre: ["Animasi", "Comedy", "Petualangan"],
    season: 4,
  },
  {
    judul: "How to Train Your Dragon",
    genre: ["Animasi", "Comedy", "Action"],
    season: 4,
  },
];

// Belajar Map
const listJudul = listFilm.map((film) => film.judul);
console.log(listJudul);

// Belajar Filter
const filmMisteri = listFilm.filter((film) => film.genre.includes("Misteri"));
console.log(filmMisteri);
