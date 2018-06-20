
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get HighScore modal
  var modal_highscore = document.getElementById('modal_highscore');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get the content inside modal
  var content_modal = document.getElementsByClassName('modal-content');

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
    init();
    modal.style.display = "none";

    // allow buttons to reappear
    $('#new-player-button').show();
    $('#returning-player-button').show();

    // hiding all forms
     $('#new-player-form').hide();
     $('#returning-player-form').hide();
     $('.highscorers').empty();
  }
  // When the dies the modal will open
  function open_modal(x) {
    $('.post-play').show();
    modal.style.display = "block";
    display_highscore_in_modal(x);
    stop_timer();
    // remove snake and food
    snake_array = [];
    food = null;
  }

  $('#new-player-button').click(function(){
    // fadeout buttons
    // $('#new-player-button').fadeOut();
    // $('#returning-player-button').fadeOut();

    //  show form
    $('#new-player-form').fadeIn(1000);
    // hide returning player form
    $('#returning-player-form').hide();
  });


  $('#returning-player-button').click(function(){
    // fadeout buttons
    // $('#new-player-button').fadeOut();
    // $('#returning-player-button').fadeOut();

    //  show form
    $('#returning-player-form').fadeIn(1000);
    $('#new-player-form').hide();
  });
