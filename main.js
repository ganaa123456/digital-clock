const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const setDay = document.querySelector(".setDay");

function setTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let setDays;
  hour.textContent = hours + ":";
  minute.textContent = minutes + ":";
  second.textContent = seconds;
  if (hour < 13) {
    setDays = "AM";
  } else {
    setDays = "PM";
  }
  setDay.textContent = setDays;
  document.querySelector(".digital").style.display = "flex";
}
setInterval(setTime, 1000);
