export class File {
    id: Number;
    title: String;
    path: String;
    createdDate: Date;

    constructor(id: Number, title: String, path: String, createdDate: Date) {
        this.createdDate = createdDate;
        this.id = id;
        this.path = path;
        this.title = title;
    }
}
