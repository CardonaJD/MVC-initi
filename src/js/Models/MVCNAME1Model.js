console.log("MVCNAME1Model")
function MVCNAME1Model() {
  this.data = [];
  
  this.init = function(imagesService) {
    this.ImagesService = imagesService;
    console.log(this.ImagesService);
  }
}
