export default function (app) {
  const upBtn = app.querySelector('.btn--up');
  const downBtn = app.querySelector('.btn--down');
  const countElement = app.querySelector('.counter__count');

  function upClick() {
    // Do something we can know this works?
    const oldNumber = parseInt(countElement.innerText, 10);

    countElement.innerText = oldNumber + 1;
  }

  function downClick() {
    // Do something we can know this works?
    const oldNumber = parseInt(countElement.innerText, 10);

    countElement.innerText = oldNumber - 1;
  }

  upBtn.addEventListener('click', upClick);
  downBtn.addEventListener('click', downClick);
}
