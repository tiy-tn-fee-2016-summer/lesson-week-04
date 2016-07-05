export default function (app) {
  const upBtn = app.querySelector('.btn--up');
  const number = app.querySelector('.counter__count');

  function upClick() {
    // Do something we can know this works?
    number.innerText = 'Changed';
  }

  upBtn.addEventListener('click', upClick);
}
