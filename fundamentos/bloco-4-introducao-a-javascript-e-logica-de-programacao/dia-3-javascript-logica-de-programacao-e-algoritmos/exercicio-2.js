const n=5;
let ladoDoQuadrado="";

if(n<1)console.log('O valor de n precisa ser maior que 0.');
else
{
    for(let i=0;i<n;++i)
    {
        ladoDoQuadrado+="*";
        console.log(ladoDoQuadrado);
    }
};
