export default class Counter {
  update() {
    this.elements.count.innerText = this.data.number;
  }

  up() {
    this.data.number ++;
    this.update();
  }

  down() {
    this.data.number --;
    this.update();
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
      number: 1,
    };

    // We need to `bind` our event listeners so they act on our current component
    // instead of the button where the event is fired!
    this.elements.upBtn.addEventListener('click', this.up.bind(currentComponent));
    this.elements.downBtn.addEventListener('click', this.down.bind(currentComponent));
  }
}
