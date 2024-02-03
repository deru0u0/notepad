'use strict';
{
    const text = document.getElementById('text');
    const save = document.getElementById('save');
    const message = document.getElementById('message');
    const clear = document.getElementById('clear');

    if( localStorage.getItem('memo') === null ) {
        text.value = '';
    } else {
        text.value = localStorage.getItem('memo');
    }
    save.addEventListener('click', function() {
        message.classList.add('appear');
        setTimeout(()=> {
            message.classList.remove('appear');
        },1000);
        localStorage.setItem('memo', text.value);
    },false);

    clear.addEventListener('click', function() {
        if ( confirm('本当に削除しますか')) {
            text.value = '';
            localStorage.removeItem('memo');
        }
    },false);
}