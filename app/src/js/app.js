window.addEventListener('DOMContentLoaded',e=>{
    //header animation
	let header = document.querySelector('header.header');
	setTimeout(() => {
		header.classList.add('animated');
	}, 100);
  // show mobile menu
  const burgerBtn = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const headerNav = document.querySelector('.header__nav');
  if (burgerBtn){
    burgerBtn.addEventListener('click', e=>{
      burgerBtn.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.classList.toggle('fixed');
    })
    headerNav.addEventListener('click',e=>{
      if (e.target.tagName === 'A' && burgerBtn.classList.contains('active')){
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('fixed');
      }
    })
  }
})