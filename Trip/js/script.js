$(document).ready(function () {
$('.main_btna').on('click',()=>{
    $('.overlay').fadeToggle('slow');
    $('.modal').slideDown(300);
});//end main_btna

$('.main_btn').on('click',()=>{
    $('.overlay').fadeToggle('slow');
    $('.modal').slideDown(300);
});//end main_btn

$('.main_btnab').on('click',()=>{
    $('.overlay').fadeToggle('slow');
    $('.modal').slideDown(300);
});//end Trip time

$('.close').on('click',()=>{
    $('.modal').slideUp(300);
    ftoggle();
});//end close

function ftoggle(){
    $('.overlay').fadeToggle('slow');
}
});
