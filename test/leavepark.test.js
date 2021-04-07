
let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('leave KA-01-HH-3141 4', async function () {
  it('should free slot no 6', async function () {
    var preResult = 'Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30';
    var result = await parkingLot.leave('KA-01-HH-3141', 4);
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

