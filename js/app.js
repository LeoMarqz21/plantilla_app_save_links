/*
*** LeoMarqz ***
*/
const btnMenu = document.getElementById('btn__menu')
const menu = document.getElementById('nav__menu')
const itemsMenu = document.querySelectorAll('.menu__item')

btnMenu.addEventListener('click', handleBtnMenu)

function handleBtnMenu(){
    menu.classList.toggle('active__menu')
}

itemsMenu.forEach(item=>{
    item.addEventListener('click', ()=>{
        menu.classList.remove('active__menu')
    })
})



// =======================================================
// ==================== BTN UP ===========================
// =======================================================

const btnUp = document.querySelector('.btn-up')

window.addEventListener('resize', handleBtnUp)
window.addEventListener('scroll', handleScroll)
btnUp.addEventListener('click', handleScrollUp)

handleBtnUp();

function handleBtnUp()
{
    let withContainer = document.querySelector('.container')
    let withBody = document.body.clientWidth
    let calc_btn_up = (withBody / 2) - (withContainer.clientWidth / 2) + 5
    btnUp.style.right = calc_btn_up + "px"
    console.log( "container: [ " + withContainer.clientWidth + " ] -- body: [ " + withBody + " ]")
}

function handleScroll() {
    let positionScroll = window.scrollY
    if(positionScroll > 100)
    {
        btnUp.style.display = 'block' 
        btnUp.style.position = 'fixed'
        handleBtnUp()
    }else
    {
        btnUp.style.display = 'none'
    } 
    console.log("position scroll: [ " + positionScroll + " ]")
}

