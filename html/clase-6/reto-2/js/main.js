const caja = document.getElementById("cajaQr");

function getRandomInt(min, max) {
  // min and max included
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const qrcode = new QRCode(caja, {
	text: getRandomInt(1,64).toString(),
	width: 250,
	height: 180,
	colorDark : "#2b7cfb",
	colorLight : "#fff",
	correctLevel : QRCode.CorrectLevel.H
});

