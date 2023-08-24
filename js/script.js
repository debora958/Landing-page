let contador = 1;
document.getElementById("slide1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    contador++;
    if(contador>4){
        contador=1;
    }

    document.getElementById("slide"+contador).checked = true;

}

function startup(){
    const passador = document.getElementById("slide1");
    passador.addEventListener("touchstart", handleStart);
    passador.addEventListener("touchstart", handleEnd);
    passador.addEventListener("touchstart", handleCancel);
    passador.addEventListener("touchstart", handleMove);
    log("Initialized.");


}

document.addEventListener("DOMContentLoaded", startup);

function handleStart(evt) {
    evt.preventDefault();
    log("touchstart.");
    const el = document.getElementById("slides-1");
    const ctx = el.getContext("2d");
    const touches = evt.changedTouches;
  
    for (let i = 0; i < touches.length; i++) {
      log(`touchstart: ${i}.`);
      ongoingTouches.push(copyTouch(touches[i]));
      const color = colorForTouch(touches[i]);
      log(`color of touch with id ${touches[i].identifier} = ${color}`);
      ctx.beginPath();
      ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
      ctx.fillStyle = color;
      ctx.fill();
    }
  }





