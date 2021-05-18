const altura = Math.floor(Math.random()*10) + 1;
const ancho = Math.floor(Math.random()*10) + 1;

console.log('altura:'+altura);
console.log('ancho:'+ancho);

let fibomat = [];
    let a=0,b=1,c,d=1;
    for(let i = 0; i<alto; i++)
    { 
      fibomat[i] = new Array();
      for(let j=0; j<ancho; j++)
      {
        let c = a+b;
        fibomat[i].push(c);
          a = b;
          b = c;
        if(i%2==1){
          fibomat[i].reverse();
        }
      }
      add=1;
    }
    console.log(mat);