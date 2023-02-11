//Comment slider
const comments = document.querySelectorAll('.comment__slider-item');
const commentsCount = comments.length;

let offset = 0;
const offsetStep = 300;

document.getElementById('commentDecrement').addEventListener('click', slideCommentsRight);
document.getElementById('commentIncrement').addEventListener('click', slideCommentsLeft);
window.addEventListener('load', () => {
   const maxValue = window.innerWidth > 640? commentsCount - 1 : commentsCount;
   document.querySelector('.comment__max-page').innerHTML = `/0${maxValue}`;
});


function slideCommentsRight(){
   const minimalValue = 1;
   const currentElement = document.querySelector('.comment__current-page');
   const currentValue = parseInt(currentElement.innerHTML);

   if(currentValue > minimalValue){
      currentElement.innerHTML = `0${currentValue - 1}`;
      offset += offsetStep;
      const slider = document.querySelector('.comment__slider-line');
      slider.style.left = `${offset}px`;
   }
};

function slideCommentsLeft(){
   const currentElement = document.querySelector('.comment__current-page');
   const currentValue = parseInt(currentElement.innerHTML);
   console.log(document.querySelector('.comment__slider'))

   const maxValue = window.innerWidth > 640? commentsCount - 1 : commentsCount;

   if(currentValue < maxValue){
      currentElement.innerHTML = `0${currentValue + 1}`;
      offset -= offsetStep;
      const slider = document.querySelector('.comment__slider-line');
      slider.style.left = `${offset}px`;
   }
};

//Menu slider

function checkSubscription(){
   var emailValue = document.getElementById("email").value;

   if(emailValue == "" || emailValue == undefined || emailValue == null){
      swal({
         title: "Помилка!",
         text: "Ви не заповнили поле!",
         icon: "error",
         button: "Ок",
       });
   }
   else{
      const validateEmail = (email) => {
         return String(email)
           .toLowerCase()
           .match(
             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           );
      };
      if(validateEmail(emailValue)){
         swal({
            title: "Успіх!",
            text: "Підписку було успішно оформлено!",
            icon: "success",
            button: "Ок",
          });
      }
      else{
         swal({
            title: "Помилка!",
            text: "Некоректна пошта!",
            icon: "error",
            button: "Ок",
          });
      }
   }

   return false;
};

document.getElementById('menu-toggle').addEventListener('click', toggleOpen);

function toggleOpen(){
   document.querySelectorAll('menu__item').forEach(x => x.addEventListener('click', function(){
   }));
   document.getElementById('menu-toggle').classList.toggle('open');
   document.querySelector('.menu').classList.toggle('active');
   document.getElementById('mainLogo').classList.toggle('hide');
}