class hero {
	constructor(heroName, heroIdade, heroTipo){
    	this.heroName = heroName
        this.heroIdade = heroIdade
        this.heroTipo = heroTipo
        
              
    }
    ataqueGuerreiro(){
    	console.log(`O herói de nome ${this.heroName} tem ${this.heroIdade} anos, é do tipo ${this.heroTipo} e atacou usando espada! `)}
        
    ataqueMago(){
        console.log(`O herói de nome ${this.heroName} tem ${this.heroIdade} anos, é do tipo ${this.heroTipo} e atacou usando magia! `)}
    
    ataqueMonge(){
    	console.log(`O herói de nome ${this.heroName} tem ${this.heroIdade} anos, é do tipo ${this.heroTipo} e atacou usando artes marciais! `)}
    
    ataqueNinja(){
    	console.log(`O herói de nome ${this.heroName} tem ${this.heroIdade} anos, é do tipo ${this.heroTipo} e atacou usando shuriken! `)}
      
    }
    

let heroGuerreiro = new hero ("Gohan", "18", "Guerreiro")
let heroMago = new hero ("Harry Potter", "20", "Mago")
let heroMonge = new hero ("Aang", "17", "Monge")
let heroNinja = new hero ("Naruto", "30", "Ninja")

heroGuerreiro.ataqueGuerreiro()
heroMago.ataqueMago()
heroMonge.ataqueMonge()
heroNinja.ataqueNinja()