//We will implement multiple classes and interfaces, including an abstract class. 
//The OOP system will allow seamless interaction between characters and their respective attributes.

interface Attack{
    attack():void
}

interface Defense{
    defense():void
}

interface CollectGold{
    CollectGold():void
}


export{
    Attack,
    Defense,
    CollectGold
    
}