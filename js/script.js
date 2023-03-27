let title = document.querySelector('#title');
let content = document.querySelector('.content');
let loader = document.querySelector('.loader');
window.addEventListener('load', loadFunc);
function loadFunc () {
    loader.classList.add('hidden');
    console.log(loader.className);
    // second way
    // loader.className += 'hidden'
}
