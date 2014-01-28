onload = function(){
	for(var col=document.getElementsByTagName('tr'), row, i=1; row=col[i]; i++){
		var cells=row.getElementsByTagName('td');
		if(!cells.length)continue;
		var stats={}, numberOfDifferentStrings=0;
		for(var cell,j=0; cell=cells[j]; j++ ){ /* let's count the "votes" for the various solutions */
			//alert(cell.firstChild.data );
			if(!cell.firstChild)cell.appendChild(document.createTextNode(''));// fake it till you make it
			if( stats[cell.firstChild.data] ){
				stats[cell.firstChild.data]['count']++;
				stats[cell.firstChild.data]['cells'].push(cell);
			}else{
				stats[cell.firstChild.data]={};
				stats[cell.firstChild.data]['count']=1;
				stats[cell.firstChild.data]['cells']=new Array(cell);
				numberOfDifferentStrings++;
			}
		}
		if( numberOfDifferentStrings==1 ){ /* yay!! all browsers agree here.. */
			row.className='peaceAndHarmony';
		}else if(numberOfDifferentStrings==2){
			row.className='oddOneOut';
			for( var stat in stats ){
				if( stats[stat].count==1 ){
					stats[stat].cells[0].className+=' theOddOne';
				}
			}
		}else if(numberOfDifferentStrings==cells.length-1){
			row.className='wellAtLeastTwoOfThemDidTheSameThing';
			for( var stat in stats ){
				if( stats[stat].count==2 ){
					stats[stat].cells[0].className+=' theTwoSome';
					stats[stat].cells[1].className+=' theTwoSome';
				}
			}
		}else{
			row.className='totalChaos';
		}
	}
}