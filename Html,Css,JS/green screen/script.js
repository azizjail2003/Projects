var fgImage = null ;
var bgImage = null;


function loadForeGroundImage(){
var input=document.getElementById('fgImage');
var canvas = document.getElementById('fgcan');
fgImage = new SimpleImage(input);
fgImage.drawTo(canvas);

}

function loadBackGroundImage(){
    var input=document.getElementById('bgImage');
    var canvas = document.getElementById('bgcan');
    bgImage = new SimpleImage(input);
    bgImage.drawTo(canvas);
    
    }

function clearCanvas () {
    var paintcanvas = document.getElementById('fgcan');
    var context = paintcanvas.getContext("2d");
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
    paintcanvas = document.getElementById('bgcan');
    var context = paintcanvas.getContext("2d");
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
    }
    
function doGreenScreen(){
    if(fgImage == null || !fgImage.complete()){
        window.alert('The foreground image is not loaded yet');
    }
    if(bgImage == null || !bgImage.complete()){
        window.alert('The background image is not loaded yet');
    }
    else{
        clearCanvas();

var x = fgImage.getWidth();
var y = fgImage.getHeight();
var blank = new SimpleImage(x,y);
for(pixel of fgImage.values()){
        var a =pixel.getX();
        var b =pixel.getY();
    if(pixel.getGreen() == 255 ){
        
        blank.setPixel(a,b,bgImage.getPixel(a,b));
    }
    else{
        blank.setPixel(a,b,pixel);
    }
}
blank.drawTo(document.getElementById('fgcan'))
    print(blank);
    }
}
      