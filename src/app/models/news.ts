export class News {
    id: Number;
    title: String;
    description: String;
    image: String;
    createdDate: String;
    modifiedDate: String;
    createdBy: Number;
    views: Number;

    constructor(id?, title?, description?, image?, createdDate?, modifiedDate?, createdBy?, views?) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.createdBy = createdBy;
        this.views = views;
    }

}
