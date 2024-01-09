searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick =() =>{
  searchForm.classList.toggle('active');
}

window.addEventListener('scroll', function() {
  searchForm.classList.remove('active');
  const header2 = document.querySelector('.header-2');
  const scrollThreshold = 100;

  if (window.scrollY > scrollThreshold) {
      header2.classList.add('fixed-header-2');
  } else {
      header2.classList.remove('fixed-header-2');
  }
});

window.addEventListener('load', function() {
  const header2 = document.querySelector('.header-2');
  header2.classList.remove('fixed-header-2'); // Ensure it's not fixed on page load
});




let loginForm = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick =() => {
  loginForm.classList.toggle("active");}
document.querySelector("#close-login-btn").onclick =() => {
    loginForm.classList.remove("active");
}
//initilazing Swiper


