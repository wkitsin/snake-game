
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
  }
  // When the dies the modal will open
  function open_modal(x) {
    modal.style.display = "block";
    display_highscore_in_modal(x);
    stop_timer();
  }

  $('#new-player-button').click(function(){
    // fadeout buttons
    $('#new-player-button').fadeOut();
    $('#returning-player-button').fadeOut();

    //  insert form
    append_new_player_form();
    $('#new-player-form').fadeIn(1000);
  });


  $('#returning-player-button').click(function(){
    // fadeout buttons
    $('#new-player-button').fadeOut();
    $('#returning-player-button').fadeOut();

    //  insert form
    append_returning_player_form();
    $('#returning-player-form').fadeIn(1000);
  });


  function append_new_player_form() {
    $('.modal-content').append(`
      <div id='new-player-form' style="padding: 15px; border: 1px solid #000;">
      <form id="survey-form" style="font-size: 12px;">
        <div class="form-group">
          <span class="require" style="color: red; float: right;">* <label style="color: black; font-weight: 400;">indicates required</label></span>
        </div><br>
          <div class="form-group">
            <label>Email Address</label>
            <span class="require" style="color: red;">*</span>
            <input id="email" type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Full Name</label>
            <span class="require" style="color: red;">*</span>
            <input id="full-name" type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Instagram Handle</label>
            <span class="require" style="color: red;">*</span>
            <input id="insta-handle" type="text" class="form-control" required />
          </div>
          <input id="button-submit-new-player" class="btn btn-default" type="submit" value="Enter" />
      </form>
      </div>
      `)
  };

  function append_returning_player_form() {
    $('.modal-content').append(`
      <div id='returning-player-form' style="padding: 15px; border: 1px solid #000;">
      <form id="survey-form" style="font-size: 12px;">
        <div class="form-group">
          <span class="require" style="color: red; float: right;">* <label style="color: black; font-weight: 400;">indicates required</label></span>
        </div><br>
          <div class="form-group">
            <label>Email Address</label>
            <span class="require" style="color: red;">*</span>
            <input id="email" type="email" class="form-control" required />
          </div>
          <input id="button-submit-returning-player" class="btn btn-default" type="submit" value="Enter" />
      </form>
      </div>
      `)
  };
