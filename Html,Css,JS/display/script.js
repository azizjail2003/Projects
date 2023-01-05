var image;
function upload(){
    var input =document.getElementById('img');
    var canvas = document.getElementById('can');
    image = new SimpleImage(input);
    var width = image.getWidth();
    var height = image.getHeight();
    console.log(height , '',width);
    
    canvas.style.height = height;
    canvas.style.width = width;
    image.drawTo(canvas);
return image;
}


function makeGray(){
   
    for(pixel of image.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue() ) / 3;

        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
        
    }
    var imgcanvas = document.getElementById('can');
    image.drawTo(imgcanvas);
}