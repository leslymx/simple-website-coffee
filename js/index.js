const getElement = (target) =>{
  return document.querySelector(target);
  
};

const app = (()=>{
  //modal mobile
  const burgerIcon = getElement('#burger');
  const navbarMenu = getElement('#navbar-links');
  
  burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
  });
  

  //tabs
  const tabs = document.querySelectorAll('.tabs li');
  const tabContentBoxes = document.querySelectorAll('#tab-content > div');
  
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(item => item.classList.remove('is-active'))
      tab.classList.add('is-active');
  
      //que parrafo voy a mostrar
      const target = tab.dataset.target;
      tabContentBoxes.forEach(box => {
        if (box.getAttribute('id') === target) {
          box.classList.remove('is-hidden');
        } else {
          box.classList.add('is-hidden');
        }
      });
    })
  })


  // modal
  const signupButton = getElement('#signup');
  const modalBg = getElement('.modal-background');
  const modal = getElement('.modal');

  signupButton.addEventListener('click', () => {
    modal.classList.add('is-active');
  });

  modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
  });

})();

app();



