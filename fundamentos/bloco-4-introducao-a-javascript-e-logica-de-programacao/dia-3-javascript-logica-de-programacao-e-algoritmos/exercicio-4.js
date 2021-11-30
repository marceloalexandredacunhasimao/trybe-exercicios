const n=5;
let ladoDoQuadrado;

if(n<1)console.log('O valor de n precisa ser maior que 0.');
else
{
    for(let i=1;i<=n;i+=2)
    {
        ladoDoQuadrado=""
        for(let j=(n-i)/2;j>0;j--)ladoDoQuadrado+=' ';
        for(let k=i;k>0;k--)ladoDoQuadrado+='*';
        for(let j=(n-i)/2;j>0;j--)ladoDoQuadrado+=' ';
        console.log(ladoDoQuadrado);
    };
};
