const numero=7;
let ehPrimo=true;


for(let divisor=2;divisor<=numero/2;divisor++)
    if(numero%divisor===0)
    {
        ehPrimo=false;
        break;
    };

if(ehPrimo)console.log('O número é primo.');
else console.log('O número NÃO é primo.');
