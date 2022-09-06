const hamburger = $("#menuToggle");
const mobileMenu = $("#menuItems");



hamburger.on("click", function(){
   if (hamburger.hasClass('open')){
    
    hamburger.removeClass('open'); 
    mobileMenu.slideToggle();
    setTimeout(function(){
        $('body').removeClass('overflow-hidden');}, 300);
    
   }else{
    $('body').addClass('overflow-hidden')
    hamburger.addClass('open'); 
    mobileMenu.slideToggle();
   }
    
});

