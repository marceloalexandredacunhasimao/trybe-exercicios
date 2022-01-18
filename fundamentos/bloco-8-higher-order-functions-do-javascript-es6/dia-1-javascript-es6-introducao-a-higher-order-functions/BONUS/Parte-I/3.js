const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Resolução global:
const dano(minimo,maximo) => Math.floor(Math.random()*(maximo-minimo+1))+minimo;







//-----------------------------------------------------------------------------------------
//Resolução 1:
const danoDragao = (dragao) => dano(15,dragao.strength);

/*
//GABARITO 1:
const dragonAttack = (dragon) => {
  const minDmg = 15;
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
  return dragonDmg;
};
*/
//-----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------
//Resolução 2:
danoWarrior(warrior) => dano(warrior.strength,warrior.strength*warrior.weaponDmg);

/*
//GABARITO 2:
const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
};
*/



//-----------------------------------------------------------------------------------------
//Resolução 3:
function danoManaMago(mago) {
	const obj ={
	manaSpent: 0,
    damageDealt: 'Not enough mana...',
    };
    if(mago.mana>=15) {
    	obj.damageDealt = dano(intelligence*2, intelligence);
    	obj.manaSpent = 15;
    }
    return obj;
}

/*
//GABARITO 3:
const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};
*/
