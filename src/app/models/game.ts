export class Game {
    id: Number;
    name: String;
    image: String;
    platform: String;
    description: String;
    type: String;
    publisher: String;
    comingDate: String;
    createdDate: String;
    modifiedDate: String;
    createdBy: Number;

    constructor(id, name, description, platform, image, type, publisher, comingDate, createdDate, modifiedDate, createdBy) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.platform = platform;
        this.type = type;
        this.image = image;
        this.publisher = publisher;
        this.comingDate = comingDate;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.createdBy = createdBy;
    }

}
