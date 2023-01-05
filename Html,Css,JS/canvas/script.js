const doRed = () => {
    var div1 = document.getElementById('div1');
    div1.style.backgroundColor = 'red';
    console.log('check');
    var context = div1.getContext('2d');
    context.fillStyle = 'yellow';
    context.fillRect(10,10,60,60);
    
    context.fillStyle = 'blue';
    context.font = '20px Arial';
    context.fillText('Hello',15,45);

}
const doGreen =()  =>{
    var div1 = document.getElementById('div1');
    div1.style.backgroundColor = 'green';
}
const changeColor =() =>{
    var dd1 =document.getElementById('div1')
    var element = document.getElementById('clr');
    var color = element.value;
    dd1.style.backgroundColor = color
}

const square = () =>{
    
    var div1 = document.getElementById('div1');
    var size = document.getElementById('size')
    console.log('check');
    var context = div1.getContext('2d');
    context.clearRect(0,0,div1.width,div1.height);
    context.fillStyle = 'yellow';
    context.fillRect(10,10,size.value,size.value);
    
}
