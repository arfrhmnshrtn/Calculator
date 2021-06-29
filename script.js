const button = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
const hasil = document.querySelector('.hasil');
const clear = document.querySelector('.clear');

// looping button
for (let i = 0; i < button.length; i++){
    // jika button index ke-i di click maka akan menambahkan ke dalam value input
    button[i].addEventListener('click', function(){
        input.value += button[i].value;
    });
}

// event button delete
button[2].addEventListener('click', function(){
    let str = String(input.value);
    let a = str.split('').slice(0, input.value.length - 1).join('');
    input.value = a;
});

// event tombol hasil / =
hasil.addEventListener('click', function(){
    input.value = eval(input.value);
});

// event clear all value input
clear.addEventListener('click', function(){
    input.value = '';
});

