export default function (app) {
  return {
    // Establishing HTML elements in our component
    elements: {
      upBtn: app.querySelector('.btn--up'),
      downBtn: app.querySelector('.btn--down'),
      count: app.querySelector('.counter__count'),
      charInfo: app.querySelector('.character-info'),
    },

    // Defining the Data for our component
    data: {
      number: 1,
    },

    update() {
      this.elements.count.innerText = this.data.number;
    },

    actions: {
      up() {
        console.log(this);
        this.data.number ++;
        this.update();
      },
      down() {
        this.data.number --;
        this.update();
      },
    },

    setup() {
      const currentComponent = this;

      // We need to `bind` our event listeners so they act on our current component
      // instead of the button where the event is fired!
      this.elements.upBtn.addEventListener('click', this.actions.up.bind(currentComponent));
      this.elements.downBtn.addEventListener('click', this.actions.down.bind(currentComponent));
    },
  };

  // Go ask for info from this URL
  fetch('https://swapi.co/api/people/1')
    // Wait for a response back and turn the string of JSON into an actual JS object
    .then((res) => res.json())
    // Once we have a JS object to work with, here's what we're gonna do with it
    .then((data) => {
      // how do i know what data is???
      console.log(data);
      elements.charInfo.innerHTML = `
        <h2>${data.name}</h2>
        <ul class="movie-list"></ul>
      `;
    });
}
