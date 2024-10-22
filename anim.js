// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Regálame tu corazón ♥", time: 25 },
  { text: "Déjame entrar a ese lugar", time: 26 },
  { text: "Donde nacen las flores", time: 28 },
  { text: "Donde nace el amor", time: 32 },

  { text: "Déjame entrar a esa parte de vida", time: 34 },
  { text: "Donde tú y yo seamos felices", time: 41 },
  { text: "Quiero abrazarte siempre", time: 47 },
  { text: "Estemos juntos o no", time: 54 },

  { text: "Amo tu mirada", time: 59 },
  { text: "Te quiero", time: 67 },
  { text: "Tu sonrisa me da mil años de vida", time: 72 },
  { text: "Eres mi refugio", time: 78 },

  { text: "Solo quiero estar para ti", time: 83 },
  { text: "Te amo", time: 91 },
  { text: "Mariposas en mi interior", time: 97 },
  { text: "Amo el café amargo y dulce de tu mirar", time: 104 },

  { text: "Estare siempre a tu lado", time: 108 },
  { text: "Eres lo que mas me da paz", time: 144 },
  { text: "Mintras me miras y sonries me doy cuenta", time: 148 },
  { text: "Eres todo lo que necesito", time: 153 },

  { text: "Cayendo en tus encantos", time: 158 },
  { text: "Como una caricia al corazón", time: 164 },
  { text: "Quiero verte siempre pues", time: 169 },
  { text: "Amo cuando sonríes", time: 176 },

  { text: "Cuando tu me sonries!", time: 183 },
  { text: "Eres mi razón de ser", time: 188 },
  { text: "Y si un día dices que sí", time: 200 },
  { text: "¿Sabes qué?", time: 202 },
  { text: "Acepto los términos y condiciones", time: 204 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);