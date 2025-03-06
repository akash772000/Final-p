// ====================================  Toggler    =============================================
let toggler=document.querySelector('#toggler');
let navlist=document.querySelector('.navlist');

toggler.addEventListener('click',listDisplay)
function listDisplay(){
    navlist.classList.toggle('showList')
}