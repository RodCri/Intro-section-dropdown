const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;
const navArrow = document.querySelectorAll('.nav__arrow');

hamburguerIcon.addEventListener('click', ()=>{
  hamburguerIcon.classList.toggle('nav__hamburguer--open');
  navOverlay.classList.toggle('nav__overlay--show')
});

navOverlay.addEventListener('click', (e)=>{
  e.preventDefault();
  const currentElement = e.target;
  if(isActive(currentElement, 'nav__parent')){
    const subMenu = currentElement.parentElement.children[1];
    if(window.innerWidth < 768){
      let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;
      subMenu.style.height = `${height}px`;
      rotateArrow(currentElement.children[0]);
    }else{
      if(!isActive (subMenu, 'nav__inner--show')){
        closeDropdown(currentDropdown);
      }
      subMenu.classList.toggle('nav__inner--show');
      rotateArrow(currentElement.children[0]);
      currentDropdown = subMenu;    
    }
  }
});

function isActive(element, string){
  return element.classList.value.includes(string);
}

function rotateArrow(navArrow){
  navArrow.classList.toggle('rotateArrow');
}

function closeDropdown(currentDropdown){
  if(isActive(currentDropdown, 'nav__inner--show')){
    currentDropdown.classList.remove('nav__inner--show');
  }
}
window.addEventListener('resize', () =>{
  closeDropdown();
  if(window.innerWidth > 768){
    const navInners = document.querySelectorAll('.nav__inner');
    navInners.forEach(navInner => {
      navInner.style.height = '';
    });
  }
})