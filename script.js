var header = document.querySelector('nav');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 100) {
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
}
 