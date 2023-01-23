const form = document.getElementById('form');
const radio = document.getElementById('radio');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const check = document.getElementById('checkbox');
const text = document.getElementById('textbox');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function normalOver(){
    document.getElementById("mudar").innerHTML="Let's go";
    }
function mudarOver(){

    document.getElementById("mudar").innerHTML="Just Go Ahead";
    }



function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function validaNext3(){
    const text = document.querySelector('#textbox').value;

    if (text){
        document.querySelector('#next5').disabled = false;
        return
    }
    document.querySelector('#next5').disabled = true;

}


function validaNext(){
    const radio = document.querySelector('#checkdisable').value;
    const select = document.querySelector('#account').value;

    if (radio && select) {
        document.querySelector('#next').disabled = false;
        return
    }
    document.querySelector('#next').disabled = true;
    
}

function validaNext6(){
    const name = document.querySelector('#full');
    const email = document.querySelector('#email');
    const age = document.querySelector('#age');

    if(name && email && age){
        document.querySelector('#submit').disable = false;
        return
    }
    document.querySelector('#submit').disable = true;
}

function validaNext2(){
    const check = document.querySelector('#checkdisable').value;
    const select = document.querySelector('#decide').value;

    if ( check && select) {
        document.querySelector('#next4').disabled = false;
        return
    }
    document.querySelector('#next4').disabled = true;
}





function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
function nameValidate(){
    if(campos[0].value.length < 3)
    {
    setError(0);
    }
    else
    {
    removeError(0);
    }
}

function emailValidate(){

    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }

    else
    {
        removeError(1);
    }
}

function ageValidate(){

    if(campos[2].value < 120)
    {
        removeError(2);
    }
    else
    {
       setError(2);
    }
}









