const n=5;
let ladoDoQuadrado;

if(n<1)console.log('O valor de n precisa ser maior que 0.');
else
{
    for(let i=n;i>0;i--)
    {
        ladoDoQuadrado=""
        for(let j=i-1;j>0;j--)ladoDoQuadrado+=' ';
        for(let k=n-i+1;k>0;k--)ladoDoQuadrado+='*';
        console.log(ladoDoQuadrado);
    };
};
