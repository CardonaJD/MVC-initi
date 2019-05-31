function DogImagesService() {
    this.getImage = function (width, height) {
        return `https://placedog.net/${width}/${height}`;
    }
}