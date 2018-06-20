// $(document).ready(function(){
	//Canvas stuff
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();

	//Lets save the cell width in a variable for easy control
	var cw = 30;
	var d;
	var previous_d ;
	var food;
	var score;
	var high_score = 99;
  var img_coin = document.getElementById("goldcoin");
  var img_avatar;
	var highscrore_display = document.getElementById("highscore");
	var start_timer;
	var game_timeout;
	var img_counter = 0;
	// var right_boy_array = [document.getElementById('avatar-right-1'),document.getElementById('avatar-right-2'),
	// document.getElementById('avatar-right-3'),document.getElementById('avatar-right-4')];
	preloadRightBoyImages();
	preloadBackBoyImages();
	preloadLeftBoyImages();
	preloadFrontBoyImages();

	//Lets create the snake now
	var snake_array; //an array of cells to make up the snake

	function init()
	{
			game_timeout = 45;
			time_value.innerHTML = game_timeout
			d = "right"; //default direction
			create_snake();
			create_food(); //Now we can see the food particle
			//finally lets display the score
			score = 0;
			update_score(score);
			start_timer = setInterval(function() { timer() }, 1000);
			//Lets move the snake now using a timer which will trigger the paint function
			//every 100ms
			if(typeof game_loop != "undefined") clearInterval(game_loop);
			game_loop = setInterval(paint, 300);
		}
	init();

	function create_snake()
	{
		var length = 5; //Length of the snake
		snake_array = []; //Empty array to start with
		for(var i = length-1; i>=0; i--)
		{
			//This will create a horizontal snake starting from the top left
			snake_array.push({x: i, y:0});
		}
	}

	//Lets create the food now
	function create_food()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw),
			y: Math.round(Math.random()*(h-cw)/cw),
		};

    // check if food is spawned on snake's body
		food_collision(food)
		//This will create a cell with x/y between 0-44
		//Because there are 45(450/10) positions accross the rows and columns
	}

	function food_collision(food) {
		snake_array.forEach(function(e){
			if (food.x === e.x && food.y === e.y) {
				create_food();
			}
		})
	}

	//Lets paint the snake now
	function paint()
	{
		//To avoid the snake trail we need to paint the BG on every frame
		//Lets paint the canvas now
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, w, h);

		//The movement code for the snake to come here.
		//The logic is simple
		//Pop out the tail cell and place it infront of the head cell
		var nx = snake_array[0].x;
		var ny = snake_array[0].y;
		//These were the position of the head cell.
		//We will increment it to get the new head position
		//Lets add proper direction based movement now
		if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up") ny--;
		else if(d == "down") ny++;

		//Lets add the game over clauses now
		//This will restart the game if the snake hits the wall
		//Lets add the code for body collision
		//Now if the head of the snake bumps into its body, the game will restart
		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array))
		{
			//restart game
			open_modal(score);
			//Lets organize the code a bit now.
			return;
		}

		//Lets write the code to make the snake eat the food
		//The logic is simple
		//If the new head position matches with that of the food,
		//Create a new head instead of moving the tail
		if(nx == food.x && ny == food.y)
		{
			var tail = {x: nx, y: ny};
			score++;
			update_score(score);
			//Create new food
			create_food();
		}
		else
		{
			var tail = snake_array.pop(); //pops out the last cell
			tail.x = nx; tail.y = ny;
		}
		//The snake can now eat the food.
		snake_array.unshift(tail); //puts back the tail as the first cell
    paint_head(nx, ny);
		img_counter ++ ;
		if (img_counter === 4) {
			img_counter = 0 ;
		}

		for(var i = 1; i < snake_array.length; i++)
		{
			var c = snake_array[i];
			//Lets paint 10px wide cells
			paint_cell(c.x, c.y);
		}

		//Lets paint the food
		paint_cell(food.x, food.y);
		//Lets paint the

		var score_text = "Score: " + score;
		ctx.fillText(score_text, 5, h-5);

		if (game_timeout <= 0 || score >= high_score) {
			clearInterval(game_loop);
			open_modal(score);
			return;
		}
	}

	//Lets first create a generic function to paint cells
	function paint_cell(x, y)
	{
		// ctx.fillStyle = "blue";
		ctx.drawImage(img_coin, x*cw, y*cw, 30, 30);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}

  function paint_head(x, y)
	{
		var previous_d = d;
		if (d === 'right') {
			var img_avatar = right_boy_array[img_counter];
		} else if (d === 'left') {
			var img_avatar = left_boy_array[img_counter];
		} else if (d === 'up') {
			var img_avatar = back_boy_array[img_counter];
		} else if (d === 'down') {
			var img_avatar = front_boy_array[img_counter];
		}

    ctx.drawImage(img_avatar, x*cw, y*cw, 30, 30);
	}

	function check_collision(x, y, array)
	{
		//This function will check if the provided x/y coordinates exist
		//in an array of cells or not
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}

	//Lets add the keyboard controls now
	$(document).keydown(function(e){
		var key = e.which;
		//We will add another clause to prevent reverse gear
		if(key == "37" && d != "right") d = "left";
		else if(key == "38" && d != "down") d = "up";
		else if(key == "39" && d != "left") d = "right";
		else if(key == "40" && d != "up") d = "down";
		//The snake is now keyboard controllable
	})

	function update_score(x) {
		highscrore_display.innerHTML = x;
	}
// })
	function preloadImage(array)
	{
		for (var i = 0; i < array.length; i++) {
			var img=new Image();
			img.src=array[i];
			img_array << img
		}
		debugger
	}

window.onload = function() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("goldcoin");
  ctx.drawImage(img, 100, 100);
}
