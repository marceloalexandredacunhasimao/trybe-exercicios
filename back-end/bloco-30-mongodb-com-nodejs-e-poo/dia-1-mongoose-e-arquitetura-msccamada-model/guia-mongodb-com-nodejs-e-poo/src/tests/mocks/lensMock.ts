// ./src/tests/mocks/lensMock.ts

import ILens from '../../interfaces/Lens';

const lensMock:ILens = {
  degree: 0,
  antiGlare: false,
  blueLightFilter: false,
};

const lensMockWithId:ILens & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 0,
  antiGlare: false,
  blueLightFilter: false,
};

export { lensMock, lensMockWithId };
