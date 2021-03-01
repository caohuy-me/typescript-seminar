export class Figure {
    private _figureName: string;
    private _character: string;

    public constructor() {
        this._figureName = "";
        this._character = "";
    }

    public get figure_name() {
        return this._figureName;
    }

    public get charater() {
        return this._character;
    }

    public set figure_name(figureName: string) {
        this._figureName = figureName;
    }

    public set characters(character: string) {
        this._character = character;
    }
}