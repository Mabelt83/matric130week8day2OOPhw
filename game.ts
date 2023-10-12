//. Orges:
   //- Attacks with a club
   //- Defends with a shield

// Peons:
   //Attacks with a club
   //Defends with a shield

//Knights:
   //Attacks with a sword
   //Defends with armor

//Archer:
   //Attacks with a bow and arrow
   //Defends with a tunic

//All characters can collect gold, and this feature remains the same for every new type of character.

class character{
    name: string;
    weapon: string;
    attackMechanism: string;
    defenseMechanism: string;
    gold: number

    constructor(name: string, weapon: string, attackMechanisim: string, defenseMechanism: string, gold: number){
        this.name = name;
        this.weapon = weapon;
        this.attackMechanism = attackMechanisim
        this.defenseMechanism = defenseMechanism
        this.gold = 0
    }
    attack(): void{}
    defense(): void{}
    collectGold(): void{}
}

class Orges extends character{
    constructor(name:string){
        super(name, 'club', 'attack with Club', 'defend with shield', 0 );
    }
}

class Peons extends character{
    constructor(name:string){
        super(name, 'club', 'attacks with club', 'defend with shield', 0);
    }
}

class Knights extends character{
    constructor(name:string){
        super(name, 'sword', 'attack with sword', 'defend with armor', 0);
    }
}

class Archer extends character{
    constructor(name:string){
        super(name, 'bow and arrow', 'attack with bow and arrow', 'defend with tunic', 0);
    }
}

interface attackMechanisim{
    attack(): void
}

interface defenseMechanism{
    defense():  void
}

console.log()

