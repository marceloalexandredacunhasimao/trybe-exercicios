let numbers=[5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo=[];


for (let index = 0; index < numbers.length; index += 1)
    if(index+1<numbers.length)
        novo.push(numbers[index]*numbers[index+1]);
    else
        novo.push(numbers[index]*2);

console.log('Array numbers:',numbers);
console.log('Array multiplicado:',novo);