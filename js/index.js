document.querySelector('.main_nav').addEventListener('click',e=>{
    if(e.target.nodeName === 'A'){
      let id_value = e.target.dataset.link;
      document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
    }
  });

  const toggleBtn = document.querySelector('.navbar_toogle');
  const menu = document.querySelector('.main_nav');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // 메뉴 리스트 클릭시 메뉴바 닫기
  menu.addEventListener('click', () => {
    menu.classList.toggle('active')
  })