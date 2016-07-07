import Nasa from 'nasa';

export default function (element) {
  // Start up a new component and tell it to setup
  const n = new Nasa(element);
  n.getData();
}
