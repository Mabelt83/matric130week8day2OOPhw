import Game from "./oop"

export default class Orges extends Game{
    static className = 'Orges'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('the orges attacks with with a club')
    }

    defense(): void {
        console.log('The orges defends with a shield')
    }

    collectGold()  {
        return this._gold ++
    }

}