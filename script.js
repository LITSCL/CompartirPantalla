const button_iniciar = document.getElementById("iniciar");
const button_detener = document.getElementById("detener");
const video_video = document.getElementById("video");

// Configuración para la obtención del video de la pantalla.
var displayMediaOptions = {
  video: {},
  audio: true
};

//Listener para el botón "Iniciar".
button_iniciar.addEventListener("click", function() {
  iniciarCaptura();
});

//Listener para el botón "Detener".
button_detener.addEventListener("click", function() {
  detenerCaptura();
});

async function iniciarCaptura() {
  try {
    video_video.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch(error) {
    console.log("Error: " + error);
  }
}

function detenerCaptura() {
  let pistas = video_video.srcObject.getTracks();

  pistas.forEach(track => track.stop());
  video_video.srcObject = null;
}