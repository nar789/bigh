const assert=require('assert');
const a=require('../src/utils')
describe('Utils Test Suite',function(){
  describe('StringReplaceTest',function () {
	it('#rep_all',function(){

		let test_data="bigh0uccebigh0bigh0bighibighibigh1";
		let test_list=["s",["good","love"]];
		const test_out_1=a.rep_all(test_data,test_list,1);
		const test_out_2=a.rep_all(test_data,test_list,2);
		assert.equal(test_out_1,"success11good");
		assert.equal(test_out_2,"success22love");
	});
  });
});




