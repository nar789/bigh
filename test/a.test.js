const assert=require('assert');
const a=require('../src/utils')
describe('Utils Test Suite',function(){
  describe('Test suite',function () {
	it('be ok',function(){

		let test_data="bigh0uccebigh0bigh0bighibighi";
		let test_list=["s"];
		const test_out=a.rep_all(test_data,test_list,7);
		assert.equal(test_out,"success77");
	});
  });
});




