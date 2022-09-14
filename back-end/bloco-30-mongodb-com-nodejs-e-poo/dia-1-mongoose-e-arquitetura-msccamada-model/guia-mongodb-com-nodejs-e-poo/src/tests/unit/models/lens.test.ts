import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens model', () => {
  const lensModel = new LensModel();
  
  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
  });
  after(sinon.restore);

	describe('creating a leans', () => {
		it('successfully created', async () => {
			const newLens = await lensModel.create(lensMock);
			expect(newLens).to.be.deep.equal(lensMockWithId);
		});
	});

	describe('searching a lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
			expect(lensFound).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
      let error: any;
			try {
				await lensModel.readOne('123ERRADO');
			} catch (catchError: any) {
				error = catchError;
			}
      expect(error.message).to.be.eq('InvalidMongoId');
		});
	});

  describe('searching lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.read();
      expect(lensFound).to.be.an('array');
      expect(lensFound).to.be.deep.equal([lensMockWithId]);
    });
  });

	describe('deleting a lens', () => {
		it('successfully deletion', async () => {
			const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
			expect(lensDeleted).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
      let error: any;
			try {
				await lensModel.destroy('123ERRADO');
			} catch (catchError: any) {
				error = catchError;
			}
      expect(error.message).to.be.eq('InvalidMongoId');
		});

	});

});
