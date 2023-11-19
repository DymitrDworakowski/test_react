import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
<div class="overlay">
  <div class="modal">
    <img src="assets/images/image.png" width="800" height="600">
  </div>
</div>
`);

instance.show();
