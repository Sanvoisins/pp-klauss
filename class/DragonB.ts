import Fig from './Fig'

export enum DragonBHeroe {
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN
}


export default class DragonB extends Fig {

    private _character: DragonBHeroe


    constructor(type: DragonBHeroe) {

        super()

        this._character = type
        this.dragonBallSence()
    }


    public getType(): string {
        return 'figurine Dragon Ball  ' + DragonBHeroe[this._character]
    }

    public isMoved(): void {
        console.log('KaméHaméHa!')
    }

    public dragonBallSence(): void {
        
        console.log(
            `${this.getType()}is singing -->
            'CHA-LA HEAD CHA-LA'
            'Nani ga okite mo kibun wa heno-heno kappa'
            CHA-LA HEAD CHA-LA
            Mune ga pachi-pachi suru hodo
            Sawagu Genki-Dama --Sparking !`
        )

    }

}