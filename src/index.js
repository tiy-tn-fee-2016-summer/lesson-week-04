export default function (app) {
  const upBtn = app.querySelector('.btn--up');

  function upClick() {
    // Do something we can know this works?
    console.log('YAAZZZZ');
  }

  upBtn.addEventListener('click', upClick);
}
