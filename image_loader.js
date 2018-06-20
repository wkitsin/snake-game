var right_boy_array = [] ;
var left_boy_array = [] ;
var front_boy_array = [] ;
var back_boy_array = [] ;


function preloadRightBoyImages()
{
    var imageList = [
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Right-1.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Right-2.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Right-3.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Right-4.png"
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
        right_boy_array.push(imageObject);
    }
}

function preloadLeftBoyImages()
{
    var imageList = [
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Left-1.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Left-2.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Left-3.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Left-4.png"
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
        left_boy_array.push(imageObject);
    }
}

function preloadFrontBoyImages()
{
    var imageList = [
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Front-1.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Front-2.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Front-3.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Front-4.png"
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
        front_boy_array.push(imageObject);
    }
}

function preloadBackBoyImages()
{
    var imageList = [
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Back-1.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Back-2.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Back-3.png",
        "https://s3-ap-southeast-1.amazonaws.com/buro247my/snake-game/boy+sprites/Gardener-Boy-Back-4.png"
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
        back_boy_array.push(imageObject);
    }
}
