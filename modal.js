
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get HighScore modal
  var modal_highscore = document.getElementById('modal_highscore');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  // insert innerHTML highscore in modal_highscore
  function display_highscore_in_modal(x) {
    modal_highscore.innerHTML = x;
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    close_modal();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          close_modal();
      }
  }

  function close_modal() {
    modal.style.display = "none";
    init();
  }
  // When the dies the modal will open
  function open_modal(x) {
    modal.style.display = "block";
    display_highscore_in_modal(x);
    // init();
  }
