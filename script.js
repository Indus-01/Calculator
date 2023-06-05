function show(n){
    document.querySelector('#number').value += n;
}

function equals(){
    document.querySelector('#number').value = eval(document.querySelector('#number').value)
}

document.querySelector('#cls').onclick = function(){
    document.querySelector('#number').value = '';
}
