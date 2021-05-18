console.log('Hola');
class Pokemon {
    constructor(nombre, naturaleza, tipo, vida, ataque, defensa, velocidad, nivel){
        this.nombre= nombre;
        this.naturaleza= naturaleza;
        this.tipo= tipo;
        this.vida= vida,
        this.ataque= ataque;
        this.defensa= defensa;
        this.velocidad= velocidad;
        this.nivel= nivel;
    }
    subir()
    {
        console.log('Su pokémon subió de nivel');
        this.nivel++;
        console.log(this.nivel);

        switch (this.naturaleza)
        {
            case 'Audaz':
                this.ataque++;
                console.log(this.ataque);
                break;
            case 'Osada':
                this.defensa++;
                console.log(this.defensa);
                break;
            case 'Cauta':
                this.vida++;
                console.log(this.vida);
                break;
            case 'Alegre':
                this.velocidad++;
                console.log(this.velocidad);
                break;
        }

        if(this.nivel>=100)
        {
            console.log('¡Tu pokemon ha alcanzado el máximo nivel!')
        }
    }

    presentarse()
    {
        console.log('Hola me llamo '+ this.nombre + '  soy tipo ' + this.tipo + '  y estoy al nivel ' + this.nivel);
    }

    suma()
    {
        console.log (this.vida + this.ataque + this.defensa + this.velocidad);
    }

    prom()
    {
        console.log ((this.vida + this.ataque + this.defensa + this.velocidad)/4)
    }

}
const CHARMELION = new Pokemon('Charmelion', 'Audaz',  'Fuego', 30,30, 40, 30,50);
const HAUNTER = new Pokemon ('Haunter', 'Osada','Veneno', 20,30,25,20,30);
const HITMONCHAN = new Pokemon ('Hitmonchan', 'Alegre', 'lucha', 45, 40, 50, 55,40);
const JOLTEON = new Pokemon ('Jolteon', 'Audaz', 'Electrico', 90,80,70,80,85);
const UMBREON = new Pokemon('Umbreon','Alegre','Siniestro',40,45,40,35,45);