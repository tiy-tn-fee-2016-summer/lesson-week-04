import Counter from 'counter';

export default function (element) {
  // Setup this new counter for the element
  const component = new Counter(element);
  component.update();
  component.lookupCurrentCharacter();
}
