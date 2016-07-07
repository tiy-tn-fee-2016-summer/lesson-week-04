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
      const pic = results.photos[i];
      const foo = document.createElement('figure');
      this.smallerPieces.picsList.appendChild(foo);
      foo.innerHTML = `
      <div class="mars-pic__frame">
        <img class="mars-pic__img" src="${pic.img_src}" alt="">
      </div>
      <figcaption class="mars-pic__cap">
        <span class="mars-pic__date">${pic.earth_date}</span>
        -
        <span class="mars-pic__cam">${pic.camera.full_name}</span>
      </figcaption>`;
      // Add it to the existing list?
    }
  }

  getData() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
      .then(parseJSON)
      // Put the results into our picsList
      .then(this.updatePicsList.bind(this));
  }
}
