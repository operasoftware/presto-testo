	/********* Custom Seed *************************/
	if( typeof init_genrand == 'function'){
		var my_lovely_seed=0;
		if( typeof window !='undefined' && window.location && window.location.search ){ // this reads "seed" from URL query part.
			my_lovely_seed = (function(arNVs, strSearch){
																for(var i=0,nv,arNV; nv=arNVs[i]; i++){
																		arNV = nv.split('=');
																		if(arNV[0] == strSearch ) return arNV[1];
																}
														 })(location.search.substr(1).split('&'), 'seed');
		}
		if (!my_lovely_seed) {
			my_lovely_seed = Math.floor(Math.random() * 1000000 + (new Date()).getMilliseconds());
			if(this.document)document.title+=' - lovely seed: '+my_lovely_seed;
		}
		if(typeof opera =='object')opera.postError('random seed: '+my_lovely_seed);
		init_genrand( my_lovely_seed );
		Math.random = genrand_real1;
//	  log ('****** seed=' + 	my_lovely_seed);
	}
