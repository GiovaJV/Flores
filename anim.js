// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You leapt from crumbling bridges", time: 34 },
  { text: "Watching cityscapes turn to dust", time: 37 },
  { text: "Filming helicopters crashing in the ocean", time: 44 },
  { text: "From way above", time: 49 },
  { text: "Got the music in you, baby, tell me why", time: 55 },
  { text: "Got the music in you, baby, tell me why", time: 59 },
  { text: "You've been locked in here forever", time: 65 },
  { text: "And you just can't say goodbye", time: 68 },
  { text: "Kisses on the foreheads of the lovers", time: 76 },
  { text: "Wrapped in your arms", time: 79 },
  { text: "You've been hiding them in hollowed out pianos", time: 85 },
  { text: "Left in the dark", time: 89 },
  { text: "Got the music in you, baby, tell me why", time: 96 },
  { text: "Got the music in you, baby, tell me why", time: 100 },
  { text: "You've been locked in here forever", time: 106 },
  { text: "And you just can't say goodbye", time: 109 },
  { text: "Your lips, My lips", time: 117 },
  { text: "Apocalypse.", time: 120 },
  { text: "Your lips, My lips", time: 128 },
  { text: "Apocalypse.", time: 131 },
  { text: "Go and sneak us through the rivers", time: 136 },
  { text: "Flood is rising up on your knees", time: 139 },
  { text: "Oh, please", time: 144 },
  { text: "COME OUT AND HAUNT ME", time: 147 },
  { text: "I know you want me", time: 150 },
  { text: "Come out and haunt mee", time: 153 },
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
