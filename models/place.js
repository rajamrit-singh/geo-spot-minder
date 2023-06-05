class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = this.imageUri;
        this.address = address;
        this.location = location;   // { lat: 0.123, lng: 123.1233}
        this.id = new Date().toString() + Math.random().toString();
    }
}