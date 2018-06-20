 // var submit_button = document.getElementById('button-submit-player');

function new_player_button(event) {
  event.preventDefault();
  var email = $('.email')[0].value;
  var fullname = $('#full-name')[0].value;
  var instahandle = $('#insta-handle')[0].value;
  var data = {email: email, full_name: fullname, insta_handle: instahandle, score: score}
  submit_details(data);
}

function return_player_button(event) {
  event.preventDefault();
  var email = $('.email')[1].value;
  var data = {email: email, score: score}
  submit_details(data);
}

function submit_details(data)
{
  $.ajax({
    url: 'http://localhost:3000/buromy_snake_games',
    type: 'POST',
    data: data,
    success: function(data) {
      if (data.success) {
        // display highscore
        var string = '';
        $('.post-play').hide();
        $.each(data.highscore, function(k,v){
          string = string + `<div class='highscore_person'>${k}</div><div class='highscore_figure'>${v}</div>`
        });
        $('.highscorers').append(string);
      } else {
        // display error
        alert(data.error);
      }
    }
  })
}
