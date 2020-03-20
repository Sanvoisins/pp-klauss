import Figurine from './FigurineClass'

export enum DBHeroe {
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN
}


export default class DragonBall extends Figurine {

    private _character: DBHeroe


    constructor(type: DBHeroe) {

        super()

        this._character = type
        this.dragonBallSence()
    }


    public getType(): string {
        return 'Dragon Ball figurine ' + DBHeroe[this._character]
    }

    public isMoved(): void {
        console.log('Kamé Hamé Ha!')
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