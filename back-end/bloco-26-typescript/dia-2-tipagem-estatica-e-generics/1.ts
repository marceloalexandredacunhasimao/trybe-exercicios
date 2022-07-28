/*
Exercício 1: Crie uma classe Car cujo objeto representará um carro.
Propriedades:

    Deve conter uma propriedade do tipo string chamada brand que representa a marca.
    Deve conter uma propriedade do tipo enum chamada color que representa a cor.
        A cor pode ser: preta, branca, vermelha ou prata.
    Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.

Comportamentos:

    Deve possuir um método chamado honk que aciona a buzina do carro.
    Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
    Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
    Deve possuir um método chamado turnOn que liga o carro.
    Deve possuir um método chamado turnOff que desliga o carro.
    Deve possuir um método chamado speedUp que acelera o carro.
    Deve possuir um método chamado speedDown que reduz a velocidade do carro.
    Deve possuir um método chamado stop que para o carro.
    Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro.
*/

enum Colors { black = 'preta', white = 'branca', red = 'vermelha', silver = 'prata' }
enum Doors { lf, rf, lb, rb };
class Car {
  brand: string;
  color: Colors;
  doors: number;
  honk(): void { console.log('honk'); }
  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  openTheDor(door: Doors){
    console.log(`Abrindo a porta ${door}.`);
    switch(door) {
      case Doors.lf: console.log('Abre esquerda dianteira');break;
      case Doors.rf: console.log('Abre direita dianteira');break;
      case Doors.lb: console.log('Abre esquerda traseira');break;
      case Doors.rb: console.log('Abre direita traseira');break;
    }
  }
}

const car = new Car('BRAND', Colors.red, 4);
car.openTheDor(Doors.lb);
