const togglebutton = document.getElementsByClassName('toggle-button')[0];
const navitem = document.getElementsByClassName('navitems')[0];

togglebutton.addEventListener('click', ()=>{
    navitem.classList.toggle('active');
})