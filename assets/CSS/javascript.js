// const buyBtns = document.querySelectorAll('.js-buy-ticket')
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalclose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
console.log(buyBtns)
function showBuyTickets(){
    modal.classList.add('open')
}
function hideBuyTickets(){
    modal.classList.remove('open')
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
modalclose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()//dừng hành vi nổi bọt 
})

var header = document.getElementById('header')
var btnMenu = document.getElementById('btn-menu')
var headerHight = header.clientHeight;
btnMenu.onclick = function(){
    // Đóng mở menu 
    var isClose = header.clientHeight == headerHight;
    if(isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
}

//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0 ; i < menuItems.length; i++)
{
    var menuItem= menuItems[i];
    
    menuItem.onclick = function(){
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');

        if(isParentMenu){
            event.preventDefault();
        }
        else{
            header.style.height = null;
        }
    }
}