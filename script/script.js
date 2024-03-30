// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    menu.addEventListener("click", (event) => {
      if(event.target){
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  





  let wrapper = document.querySelector('.top__wrapper')

const cards = [
  {
    img: '../img/top1.jpg',
    title:'Tray with Foot',
    price:'30$'
  },
  {
    img: '../img/top2.jpg',
    title:'Twill Seat Cushion',
    price:'33$'
  },
  {
    img: '../img/top3.jpg',
    title:'Fluted Beverage Glass',
    price:'55$'
  },
  {
    img: '../img/top4.jpg',
    title:'Ceramic Egg Cup',
    price:'29$'
  },
  {
    img: '../img/top5.jpg',
    title:'Small Bamboo Box',
    price:'35$'
  },
  {
    img: '../img/top6.jpg',
    title:'Metal Cutlery Basket',
    price:'50$'
  },
  {
    img: '../img/top7.jpg',
    title:'4-pack Ceramic Cups',
    price:'48$'
  },
  {
    img: '../img/top8.jpg',
    title:'2-pack Linen Napkins',
    price:'21$'
  },
  {
    img: '../img/top9.jpg',
    title:'Glazed Stoneware Plate',
    price:'50$'
  },
]

cards.map((card) => {
  wrapper.innerHTML += `
  <div class="top__card">
  <img src=${card.img} alt="" class="top__img">

  <div class="top__box">
      <h4>${card.title}</h4>
      <img src="./img/stars.svg" alt="">
      <b>${card.price}</b>
  </div>
</div>
  `
})


