//document.body.style.backgroundColor = "red";
//test me
const toggle = document.querySelector('.button');
const content = document.querySelector('.content')
toggle.addEventListener('click', () => {
    content.classList.toggle('tilt')
})