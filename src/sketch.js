//===================================================================================

var density = "Ñ@#W$9876543210?!abc;:+=-,._                        ";

let video;
let asciiDiv;

//===================================================================================

function setup()
{
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}

//===================================================================================

function draw() 
{
  video.loadPixels();
  let asciiImage = "";

  for (let j = 0; j < video.height; j++) 
  {
    for (let i = 0; i < video.width; i++) 
    {
      var pixelIndex = (i + j * video.width) * 4;
      var r = video.pixels[pixelIndex + 0];
      var g = video.pixels[pixelIndex + 1];
      var b = video.pixels[pixelIndex + 2];
      var avg = (r + g + b) / 3;
      var len = density.length;
      var charIndex = floor(map(avg, 0, 255, 0, len));
      var c = density.charAt(charIndex);

      if (c == " ")
      {
        asciiImage += "&nbsp;";
      }
      else
      {
        asciiImage += c;
      }
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}

//===================================================================================