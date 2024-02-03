let burgergButton = document.querySelector('.burger-menu')
let nav = document.querySelector('nav')

burgergButton.addEventListener('click', function () {

    if (nav.style.display == 'none') {
        nav.style.display = 'flex'
    }else{
        nav.style.display = 'none'
    }
})