const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const input = document.getElementById("input-watch");
let myInetrval = "";
start.addEventListener("click", () => {
  let second = "00";
  let minutes = "00";
  let hours = "00";
  myInetrval = setInterval(() => {
    second = parseInt(second) + 1;
    if (second < 10) {
      second = "0" + parseInt(second);
    }
    
    if (second >= 60) {
      second = '00';
      minutes = parseInt(minutes) + 1;
      if (minutes < 10) {
        minutes = "0" + parseInt(minutes);
      }
    }

    if (minutes >= 60) {
      second = '00';
      minutes = '00';
      hours = parseInt(hours) + 1;
      if (hours < 10) {
        hours = "0" + parseInt(hours);
      }
    }

    input.value = `${hours}:${minutes}:${second}`;
  }, 1000);
});

pause.addEventListener("click", () => {
  clearInterval(myInetrval);
});
reset.addEventListener("click", () => {
  clearInterval(myInetrval);
  input.value = '00:00:00';
});
