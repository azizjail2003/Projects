
    const alert=() =>{
        console.log('hello');
        
        window.alert('Why the fuck did you click me you suck!');
        var condition = window.confirm('would you like to continue');
        if(condition == true){
            window.alert('You choosed yes');
        }
        else{
            window.alert('Why did you choosed no!!');
        }

    }
    const changeColor=()=>{
        var a = document.getElementById('intro');
        var b = document.getElementById('body');
        a.className = 'result';
        b.className = 'result';
        console.log(a.className, " ",  b.className);
        
        
    }
    const changeText = () =>{
        const element1 = document.getElementById('intro');
        const element2 = document.getElementById('body');
        console.log(element1.innerText);
        if(element1.innerText == 'Here is div 1' ){
        element1.innerHTML = 'text changed in div1';
        element2.innerHTML = 'text changed in div2';
        }
        else{
            element1.innerHTML = 'Here is div 1 ';
            element2.innerHTML = 'Here is div 2'
        }
    }
    const changeButton =() => {
        const element = document.getElementById('click');    
        element.value = 'clicked';
        console.log(element);
        element.style.color = 'yellow';
        
    }
    const changeButton2 = () =>{
        const element = document.getElementById('click');
        element.value = 'click';
        console.log(element); 

    }
    const changeType = () => {
        const element = document.getElementById('click');
        element.type = 'text';
    }
