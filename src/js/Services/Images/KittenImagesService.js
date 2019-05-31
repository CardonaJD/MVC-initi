function KittenImagesService() {
    this.getImage = function (width, height) {
        return `https://placekitten.com/${width}/${height}`;
    }
}