;(function() {
	exports.rep_all=function(data,str_list,itr){
		console.log("replacing...");
		let out=data;
		for(var i=0;i<str_list.length;i++){
			console.log("bigh"+i+" --> "+str_list[i]);
			re=new RegExp("bigh"+i,'g');
			out=out.replace(re,str_list[i]);
		}
		
		console.log("bighi --> " + itr);
		out=out.replace(/bighi/g,itr);

		var rstr = require('randomstring');
		var rstr_gen = rstr.generate({
			length:6,
			capitalization:'lowercase'
		});
		console.log("bighr --> " + 'a' + rstr_gen);
		out=out.replace(/bighr/g,'a'+ rstr_gen);
		
		console.log("replacing is complete.");
		return out;
	}

	exports.rep_all_test=function(){
		let test_data="bigh0uccebigh0bigh0bighibighi";
		let test_list=["s"];
		const test_out=exports.rep_all(test_data,test_list,7);
		console.log("\ntest data : [" + test_data + "]\n");
		console.log("test result : [" + test_out + "]\n\n");
	}

	exports.copy_folder=async function(base,itr){
		let pre_base=base;
		if(pre_base.slice(-1)=="/")
			pre_base=pre_base.substring(0,pre_base.length-1);
		const copy_path = pre_base + itr;

		const execSync = require("child_process").execSync
		try{
			const { stdout, stderr } = await execSync("cmd /c bigh_copy.bat "+base+" "+copy_path);
		}catch(err)
		{
			console.log('copyfolder_err'+err);
		}
		console.log('[' + copy_path + '] folder copied success');
	}

	exports.copy_folder_test=async function(){
		let test_base="a";
		let test_itr=3;
		await exports.copy_folder(test_base,test_itr);
		console.log('copy_folder test success!'+'\n\n');
	}


	exports.test=async function(){
		console.log('\n\n  <all utill tests start>\n\n');
		console.log('=====================\n\n  rep_all_test() start..\n\n');
		exports.rep_all_test();
		console.log('=====================\n\n  copy_folder_test() start..\n\n');
		await exports.copy_folder_test();
		console.log('=====================\n\n  all utill tests passed.\n\n');
	}

})()