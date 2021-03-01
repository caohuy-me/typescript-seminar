import { Figure } from './Figure';

export class Human extends Figure {
    private _name: string;

    constructor() {
        super();
        this._name = "";
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get_data() {
        this.figure_name = "Quan vu";
        this.character = "Dũng cảm";
    }
}