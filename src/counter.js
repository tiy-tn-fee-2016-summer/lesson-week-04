export default class Counter {
  update() {
    // Show the number to the user
    this.elements.count.innerText = this.data.number;

    // Look to see if the character is loaded and has a name
    if (this.data.character && this.data.character.name) {
      this.elements.charInfo.innerHTML = `<h2>${this.data.character.name}</h2>`;
    } else {
      this.elements.charInfo.innerHTML = '<h2>No character found... Try again...</h2>';
    }
  }

  up() {
    this.data.number ++;
    this.lookupCurrentCharacter();
    this.update();
  }

  down() {
    this.data.number --;
    this.lookupCurrentCharacter();
    this.update();
  }

  lookupCurrentCharacter() {
    this.lookupCharacter(this.data.number);
  }

  lookupCharacter(characterId) {
    fetch(`https://jsonp.afeld.me/?url=https://anapioficeandfire.com/api/characters/${characterId}`)
      .then((res) => res.json())
      .then((character) => {
        this.data.character = character;
        this.update();
      });
  }

  constructor(parentElement) {
    const currentComponent = this;

    this.elements = {
      upBtn: parentElement.querySelector('.btn--up'),
      downBtn: parentElement.querySelector('.btn--down'),
      count: parentElement.querySelector('.counter__count'),
      charInfo: parentElement.querySelector('.character-info'),
    };

    this.data = {
      number: 583,
      character: null,
    };

    // We need to `bind` our event listeners so they act on our current component
    // instead of the button where the event is fired!
    this.elements.upBtn.addEventListener('click', this.up.bind(currentComponent));
    this.elements.downBtn.addEventListener('click', this.down.bind(currentComponent));
  }
}
