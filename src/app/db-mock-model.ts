export class DbMockModel {
    status: boolean;
    connection: string;

    constructor() {
        this.status = true;
        this.connection = "some DB connection";
    }
}
