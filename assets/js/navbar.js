document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          document.getElementById('navbar-main').classList.add('transition-all');
          document.getElementById('navbar-main').classList.add('border-my');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          document.getElementById('navbar-main').classList.add('transition-all');
          document.getElementById('navbar-main').classList.remove('border-my')
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 