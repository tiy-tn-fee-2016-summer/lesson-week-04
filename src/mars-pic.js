export default class MarsPic {
  constructor(pictureData) {
    this.element = document.createElement('figure');

    this.element.innerHTML = `
    <div class="mars-pic__frame">
      <img class="mars-pic__img" src="${pictureData.img_src}" alt="">
    </div>
    <figcaption class="mars-pic__cap">
      <span class="mars-pic__date">${pictureData.earth_date}</span>
      -
      <span class="mars-pic__cam">${pictureData.camera.full_name}</span>
    </figcaption>`;
  }
}
