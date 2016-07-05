export default function (app) {
  const upBtn = app.querySelector('.btn--up');
  const downBtn = app.querySelector('.btn--down');
  const countElement = app.querySelector('.counter__count');

  let number = 1;

  function update() {
    countElement.innerText = number;
  }

  function upClick() {
    // number ++;
    // number += 1;
    number = number + 1;
    update();
  }

  function downClick() {
    // number --;
    // number -= 1;
    number = number - 1;
    update();
  }

  upBtn.addEventListener('click', upClick);
  downBtn.addEventListener('click', downClick);
}
