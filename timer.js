var time_value = document.getElementById('counter');

function timer() {
  game_timeout-- ;
  time_value.innerHTML = game_timeout;
  if (game_timeout <= 0) {
    stop_timer();
  }
}

function stop_timer() {
  clearInterval(start_timer);
}
