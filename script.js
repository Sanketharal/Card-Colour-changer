const buttons = document.querySelectorAll('.button');
const card = document.querySelector('.card');

buttons.forEach(function (button) {
  // console.log(button);

  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target)

    if(e.target.id==='gray'){
      card.style.backgroundColor=e.target.id
      
    }

    if(e.target.id==='white'){
      card.style.backgroundColor=e.target.id
    }

    if(e.target.id==='blue'){
       card.style.backgroundColor=e.target.id
    }

    if(e.target.id==='yellow'){
      card.style.backgroundColor=e.target.id
    }

    if(e.target.id==='orange'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='red'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='pink'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='purple'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='green'){
        card.style.backgroundColor=e.target.id
      }
  });

});
