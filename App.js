function appendValue(value){
     
     const display=document.getElementById('display') ;
      display.value+= value === 'x' ? '*' : value;
}
function calculateResult(){
    const display=document.getElementById('display') ;
    display.value=eval(display.value);
}
function clearDisplay(){
    const display=document.getElementById('display') ;
    display.value=' ';
}
 