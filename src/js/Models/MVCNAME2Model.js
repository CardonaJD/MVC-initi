console.log("MVCNAME2Model")
function MVCNAME2Model() {
  this.data = [];

  this.init = function(imagesService) {
    this.ImagesService = imagesService;
    console.log(this.ImagesService);
  }
}
