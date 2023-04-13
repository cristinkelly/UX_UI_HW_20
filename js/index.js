$('body').scrollspy({ target: '#navbar-example2' })

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 200; 
    console.log(scrollPosition); 
  });
  