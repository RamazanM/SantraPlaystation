export class Message {
    constructor(
        public name: String,
        public mail: String,
        public content: String,
        public id?: Number,
        public isViewed?: Boolean,
        public sentDate?: Date
    ) {}
}
