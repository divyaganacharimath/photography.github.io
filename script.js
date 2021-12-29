// js for navbar side btn
const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fa fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fa fa-times"></i>';
    }
});

// above code helps to get navbar by clicking bar btn and closes by clicking times botton


// LIGHTBOX
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });