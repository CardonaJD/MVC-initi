function NatureImagesService() {
    this.getImage = function (width, height) {
        return `https://placeimg.com/${width}/${height}/nature`;
    }
}