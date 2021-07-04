const btn = document.querySelectorAll('.btn');
const output = document.querySelector('.output');
const history = document.querySelector('.history');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

// looping button
for (let i = 0; i < btn.length; i++){
    // jika button index ke-i di click maka akan menambahkan ke dalam value input
    btn[i].addEventListener('click', function(){
        // let hasil = input.value;
        output.value += btn[i].value;
        history.value = output.value;
    });
}

// event button delete
btn[2].addEventListener('click', function(){
    let str = String(output.value);
    let a = str.split('').slice(0, output.value.length - 1).join('');
    output.value = a;
});

// event tombol hasil / =
equals.addEventListener('click', function(){
    if (output.value.length == 0){
        output.value = '';
    }else{
        output.value = eval(output.value);
    }
});

// event clear all value input
clear.addEventListener('click', function(){
    output.value = '';
    history.value = '';
    window.location.reload('Refresh');
});