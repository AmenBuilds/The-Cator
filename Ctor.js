

const display=document.getElementById("display");


function AddtoDis(input){
    display.value += input;
}


function ClearDis(){
    display.value = "";
}



function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
   
}