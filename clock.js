window.addEventListener("load", function () {
  clockRun();
});

function clockRun() {
  var d = new Date();

  var s = d.getSeconds();
  var s_angle = s * 6; // 1초가 6도
  var s_angle_value = "rotate(" + s_angle + "deg)";
  document.getElementById("second").style.transform = s_angle_value;

  var m = d.getMinutes();
  var m_angle = m * 6; // 1초가 6도
  var m_angle_value = "rotate(" + m_angle + "deg)";
  document.getElementById("minute").style.transform = m_angle_value;

  var h = d.getHours();

  if (h < 12) {
    var h = h;
  } else {
    var h = h - 12;
  }

  var h_angle = h * 30 + (30 / 60) * m;
  var h_angle_value = "rotate(" + h_angle + "deg)";
  document.getElementById("hour").style.transform = h_angle_value;

  setTimeout(clockRun, 1000);
}

// Nomad
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
