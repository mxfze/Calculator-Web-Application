const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value="Invalid";
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 43 && charCode !== 45 && charCode !== 42 && charCode !== 47 && charCode !== 46) {
      return false;
    }
    return true;
  }
