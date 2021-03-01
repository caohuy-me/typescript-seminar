export class Human {
    private _name: string;

    constructor() {

    }

    public get name() {
        return this._name;
    }

    public set name(theName: string) {
        this._name = theName;
    }
}