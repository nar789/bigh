;(function() {
	let cfg;
	exports.get=()=>{return cfg;}

	exports.load=function(path){
		let fs = require('fs');
		let data=String(fs.readFileSync(path));
		data=data.replace(/\\/gi,"/");
		cfg=JSON.parse(data);
		let pre_base=cfg.base;
		if(pre_base.slice(-1)=="/")
			pre_base=pre_base.substring(0,pre_base.length-1);
		cfg.base=pre_base;
		/*
		if(cfg.base.slice(-1)!='/'){
			cfg.base=cfg.base+"/";
		}*/
	}

	exports.test=function(){
		exports.load();
		let test_cfg=exports.get();
		console.log(JSON.stringify(test_cfg));
	}

	exports.init=function(path){
		exports.load(path);
		return exports.get();
	}

})()