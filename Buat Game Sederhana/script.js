alert(`Selamat datang di game tebak angka.
Disini kamu akan menebak angka 1 - 3,
dan kamu akan bermain dalam 5 ronde.
Player yang berhasil mengumpulkan score terbanyak, maka dia yang menjadi pemenang.
SELAMAT BERMAIN!`);

let scoreP1 = 0;
let scoreP2 = 0;
let ronde = 1;
let box = true;

// Input player name
let nameP1;
let nameP2;
while (!nameP1 || !nameP2 || nameP1 === nameP2) {
  nameP1 = prompt(`Player 1, Masukan angka anda:`);
  nameP2 = prompt(`Player 2, Masukan angka anda:`);
  if (nameP1 === nameP2) {
    alert(`Angka tersebut telah digunakan. Silahkan masukkan angka lain`);
  }
}

while (box) {
  let player1 = parseInt(prompt(`${nameP1}, Masukan angka anda :`));
  let player2 = parseInt(prompt(`${nameP2}, Masukan angka anda :`));

  let random = numRandom();
  let repeat = validate(player1, player2);
  if (!repeat) {
    box = window.confirm(`Coba lagi?`);
  } else {
    if (player1 !== random && player2 !== random) {
      alert(`Jawaban tidak ada yang benar. Hasil Seri`);
    } else {
      if (player1 === random) {
        alert(`${nameP1} Win`);
        scoreP1++;
      }
      if (player2 === random) {
        alert(`${nameP2} Win`);
        scoreP2++;
      }
    }

    alert(`
    Nilai yang dicari: ${random}
    -----------------------------------
    - ${nameP1} = ${scoreP1}
    - ${nameP2} = ${scoreP2}`);
    ronde++;

    if (ronde <= 5) {
      box = window.confirm(`Anda ingin melanjutkan ronde ${ronde}?`);
    } else {
      if (scoreP1 > scoreP2) {
        alert(`Nice score ${nameP1}`);
        box = false;
      } else if (scoreP1 < scoreP2) {
        alert(`Nice score ${nameP2}`);
        box = false;
      } else {
        alert(`Permainan yang bagus`);
        ronde = 1;
        scoreP1 = 0;
        scoreP2 = 0;
        box = window.confirm(`Anda ingin lanjut bermain?`);
      }
    }
  }
}

function validate(gPlayer1, gPlayer2) {
  if (isNaN(gPlayer1) || isNaN(gPlayer2)) {
    alert(`Salah satu pemain belum bisa menebaknya`);
    return false;
  }

  if (gPlayer1 === gPlayer2) {
    alert(`Angka yang dimasukkan tidak boleh sama`);
    return false;
  }

  if (gPlayer1 < 1 || gPlayer2 < 1) {
    alert(`Tebakan tidak boleh kurang dari 1`);
    return false;
  }

  if (gPlayer1 > 3 || gPlayer2 > 3) {
    alert(`Tebakan tidak boleh lebih dari 3`);
    return false;
  }

  return true;
}

function numRandom() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  let random;
  while (isNotRandom) {
    random = Math.floor(Math.random() * 10);
    let find = false;
    for (let i = 0; i < range.length; i++) {
      if (random === range[i]) {
        find = true;
        break;
      }
    }
    if (find) {
      isNotRandom = false;
    }
  }
  return random;
}

console.log(numRandom());
