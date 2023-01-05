
var img ;
var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var canvas;
var input;

function clearCanvas(){
    let context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
}  

function loadImage(){
    var input = document.getElementById('img');
    canvas = document.getElementById('can');
    image = new SimpleImage(input);
     image1= new SimpleImage(input);
     image2= new SimpleImage(input);
     image3= new SimpleImage(input);
     image4= new SimpleImage(input);
     image5= new SimpleImage(input);
     image6= new SimpleImage(input);
    image.drawTo(canvas);
}
function makeGray(){
    if(image == null || !image.complete()){
        window.alert('image not loaded');
    }
    else{
   var img = image1;
    for (pixel of img.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue() ) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    img.drawTo(canvas);
}
}
function makeRed(){
    if(image == null || !image.complete()){
        window.alert('image not loaded');
    }
    else{
    var img = image2;
    for(pixel of img.values()){
        pixel.setRed(255);
    }
    img.drawTo(canvas);
}
}
function makeBlue(){
    if(image == null || !image.complete()){
        window.alert('image not loaded');
    }
    else{
var img = image3;
    for(pixel of img.values()){
        pixel.setBlue(255);
    }
    img.drawTo(canvas);
}
}
function resetImage(){
image.drawTo(canvas);    
}

function redFilter(){
    if(image == null || !image.complete()){
        window.alert('image not loaded');
    }
    else{
var img = image4;
for(pixel of img.values()){
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
    if(avg > 128){
       pixel.setRed(avg * 2 - 255);
       pixel.setGreen(0);
       pixel.setBlue(0); 
       console.log(1);
    }
    else{
        pixel.setRed(255);
       pixel.setGreen(avg * 2 - 255);
       pixel.setBlue(avg * 2 - 255);  
       console.log(2)
    }
}
img.drawTo(canvas);
}
}
function randomFilter(){
    if(image == null || !image.complete()){
        window.alert('image not loaded');
    }
    else{
        var img = image5;
        for(let pixel of img.values()){
    
            if(pixel.getY() % 100!== 0){
                var random = Math.floor(Math.random() * 10) ;
                if(random === 1  ){
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(0);
                }
                if(random === 4  ){
                pixel.setRed(255);
                pixel.setGreen(0);
                pixel.setBlue(0);
                }
                if(random === 7 ){
                pixel.setRed(0);
                pixel.setGreen(255);
                pixel.setBlue(0);
                }
            }
          
    }
}
img.drawTo(canvas);
}
function rainbowFilter(){
    if(image == null || !image.complete()){
        window.alert('image not loaded');
    }
    else{
        img = image6;
        var stripe = image.getHeight();
var part1 = 0;
var part2 = 1/7 * stripe;
var part3 = 2/7 * stripe;
var part4 = 3/7 * stripe;
var part5 = 4/7 * stripe;
var part6 = 5/7 * stripe;
var part7 = 6/7 * stripe;
var part8 = 7/7 * stripe;

for(let pixel of img.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue() ) / 3;
    if(pixel.getY() < part2 && pixel.getY() > part1){
        if(avg < 128){
        pixel.setRed(2 *avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
        }
        else if(avg >=128){
           pixel.setRed(255);
        pixel.setGreen(2 *avg -255);
        pixel.setBlue(2 *avg);
        } 
        }
        if(pixel.getY() < part3 && pixel.getY() > part2){
        if(avg < 128){
        pixel.setRed(2 *avg);
        pixel.setGreen(0.8 * avg);
        pixel.setBlue(0);
        }
        else if(avg >=128){
           pixel.setRed(255);
        pixel.setGreen(1.2 * avg -51);
        pixel.setBlue(2 *avg -255);
        } 
        }
        if(pixel.getY() < part4 && pixel.getY() > part3){
        if(avg < 128){
        pixel.setRed(2 *avg);
        pixel.setGreen(2 *avg);
        pixel.setBlue(0);
        }
        else if(avg >=128){
           pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 *avg -255);
        } 
        }
        if(pixel.getY() < part5 && pixel.getY() > part4){
        if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(2 *avg);
        pixel.setBlue(0);
        }
        else if(avg >=128){
           pixel.setRed(2 *avg -255);
        pixel.setGreen(255);
        pixel.setBlue(2 *avg -255);
        } 
        }
        if(pixel.getY() < part6 && pixel.getY() > part5){
        if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 *avg);
        }
        else if(avg >=128){
           pixel.setRed(2 *avg -255);
        pixel.setGreen(2 *avg -255);
        pixel.setBlue(255);
        } 
        }
        if(pixel.getY() < part7 && pixel.getY() > part6){
        if(avg < 128){
        pixel.setRed(0.8 * avg);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
        }
        else if(avg >=128){
           pixel.setRed(1.2 * avg -51);
        pixel.setGreen(2 *avg -255);
        pixel.setBlue(255);
        } 
        }
        if(pixel.getY() < part8 && pixel.getY() > part7){
        if(avg < 128){
        pixel.setRed(1.6 * avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
        }
        else if(avg >=128){
           pixel.setRed(0.4 * avg + 153);
        pixel.setGreen(2 * avg -255);
        pixel.setBlue(0.4 * avg + 153);
        } 
        }
        
    }
    img.drawTo(canvas);

}
}