'use strict';
;(function(){
	let data=String();
	let fs = require('fs');

	exports.get=()=>{return data;}
	exports.set=(d)=>{data=d;}

	exports.read=function(src){
		console.log('reading... ['+src+']');
		data=String(fs.readFileSync(src));
		console.log('reading is completed.');
	}

	exports.write=function(dst){
		console.log('writing... ['+dst+']');
		fs.writeFileSync(dst,data,{flag:'w+'});
		console.log('writing is completed.');	
	}

})()
	

