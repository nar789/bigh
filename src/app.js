;(async function(){

	argvs=process.argv;
	
	console.log('\n\nbigh@1.0.0 last updated at 19-02-05 designed by HUME corp.\n\n');
	if(argvs.length<3)
	{
		console.log('Usage: bigh <config file>\n\n');
		return;
	}

	const config_path=argvs[2];

	let cfg=require('./ctl_config').init(config_path);
	let util=require('./utils');
	let file=require('./ctl_file');
	const repeat=cfg.repeat;
	const base=cfg.base;
	const target_len=cfg.target.length;
	for(var i=1;i<=repeat;i++)
	{
		await util.copy_folder(base,i);
		for(var j=0;j<target_len;j++)
		{
			let path = base + i + '/' + cfg.target[j];
			file.read(path);
			let data = file.get();
			let chg_data = util.rep_all(data,cfg.replace,i);
			file.set(chg_data);
			file.write(path);
		}	
	}
	console.log('\n\n  all process successed.\n\n')
})()

