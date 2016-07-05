export default function (app) {
  const upBtn = app.querySelector('.btn--up');
  const countElement = app.querySelector('.counter__count');

  function upClick() {
    // Do something we can know this works?
    const oldNumber = parseInt(countElement.innerText, 10);

    countElement.innerText = oldNumber + 1;
  }

  upBtn.addEventListener('click', upClick);
}
