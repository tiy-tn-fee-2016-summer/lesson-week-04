import MarsPic from 'mars-pic';

const apiKey = '38VtCpX1mPNRhv3Yp4Wm6rwK0Mltw2Yo9Pks0dO0';
const parseJSON = (res) => res.json();

export default class Nasa {
  constructor(element) {
    // Look for our element pieces
    this.smallerPieces = {
      picsList: element.querySelector('.camera-pics'),
      solDate: element.querySelector('input'),
    };
  }

  updatePicsList(results) {
    this.smallerPieces.picsList.innerHTML = '';

    for (let i = 0; i < results.photos.length; i++) {
      // Create a new element
      const pic = new MarsPic(results.photos[i]);

      // Add it to the existing list?
      this.smallerPieces.picsList.appendChild(pic.element);
    }
  }

  getData() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
      .then(parseJSON)
      // Put the results into our picsList
      .then(this.updatePicsList.bind(this));
  }
}
