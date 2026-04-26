function tick() {
  var current = new Date();

  var eid = new Date(2026, 4, 27);

  var time = eid - current;

  if (time <= 0) {
    document.getElementById("countdown").innerHTML="Eid Mubarak!"
    return;
  }

  var days    = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours   = Math.floor(time / (1000 * 60 * 60)) % 24;
  var minutes = Math.floor(time / (1000 * 60)) % 60;
  var seconds = Math.floor(time / 1000) % 60;

  document.getElementById("countdown").innerHTML="Bakra Eid in: " + days + "Days" + hours + "Hours"
+ minutes + "Minutes" + seconds + "Seconds"


}
tick();
setInterval(tick, 1000)