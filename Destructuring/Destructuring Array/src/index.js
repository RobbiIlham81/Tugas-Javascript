// Belajar Destructuring

//Contoh Destructur Array
const listNegara = ["Indonesia", "Malaysia", "Singapura", "Thailand", "Vietnam"];
const negara1 = listNegara[0];
const negara2 = listNegara[1];
console.log(negara1, negara2);

// Destructur
const [pertama, kedua, ketiga, ...lainnya] = listNegara;
console.log(pertama, kedua, ketiga, lainnya);
