const button = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
const input1 = document.querySelector('.input-1');
const hasil = document.querySelector('.hasil');
const clear = document.querySelector('.clear');
const darkMode = document.querySelector('.dark-mode');
const container = document.querySelector('.container');
const salmon = document.querySelectorAll('.salmon');

// looping button
for (let i = 0; i < button.length; i++){
    // jika button index ke-i di click maka akan menambahkan ke dalam value input
    button[i].addEventListener('click', function(){
        input.value += button[i].value;
        input1.value = input.value;
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
    if (input.value.length == 0){
        input.value = '';
    }else{
        input.value = eval(input.value);
        input1.style.opacity = '1';
    }
    
});

// event clear all value input
clear.addEventListener('click', function(){
    input.value = '';
    input1.value = '';
    window.location.reload('Refresh');
});

darkMode.addEventListener('click', function(){
    container.style.background = '#fff';
});

