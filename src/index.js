export default function (app) {
  const upBtn = app.querySelector('.btn--up');
  const downBtn = app.querySelector('.btn--down');
  const countElement = app.querySelector('.counter__count');
  const charInfo = app.querySelector('.character-info');

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

  // Go ask for info from this URL
  fetch('https://swapi.co/api/people/1')
    // Wait for a response back and turn the string of JSON into an actual JS object
    .then((res) => res.json())
    // Once we have a JS object to work with, here's what we're gonna do with it
    .then((data) => {
      // how do i know what data is???
      console.log(data);
      charInfo.innerHTML = `
        <h2>${data.name}</h2>
        <ul className="movie-list"></ul>
      `;
    });
}
