class Heroi{
    
    constructor(hNome, hTipo, hIdade,hAtaque){
      this.hNome = hNome
        if(hTipo == 1){
            this.hNome = "Nofsky"
            this.hTipo = "Guerreiro"
            this.hIdade = 30
            this.hAtaque = "atacou usando espada"
        }else if(hTipo == 2){
        this.hNome = "Merlin"
        this.hTipo = "Mago"
        this.hIdade = 120
        this.hAtaque = "atacou usando magia"
        }else if(hTipo == 3){
            this.hNome = "Kharazim"
            this.hTipo = "Monge"
            this.hIdade = 45
            this.hAtaque = "atacou usando artes marciais"
        }else if(hTipo == 4){
            this.hNome = "Ninja Banana "
            this.hTipo = "Ninja"
            this.hIdade = 24
            this.hAtaque = "atacou usando shuriken"
        }
    }
    getHeroi(){
        return [this.hNome, this.hTipo, this.hIdade]
    }
    
    info(){
       console.log(`O heroi de nome:${this.hNome}`)
        console.log(`Da classe ${this.hTipo} ${this.hAtaque}`)
    }
}
//Trocar Heroi
let c1 = new Heroi("",2)

c1.info()
