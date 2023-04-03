export class CommonMethods {
    public getDate() {
        const date = new Date("2016-01-17T08:44:29+0100");
        let dateTimeNow = date.getDate();
        return dateTimeNow;
    }
}


// const date = new Date("2016-01-17T08:44:29+0100"); // had to remove the colon (:) after the T in order to make it work
// const day = date.getDate();