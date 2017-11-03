function picture(){
	   var oPrc=document.getElementsByClassName("aa");
	  
	 ajax("tu1.txt",function(str){
		var oPrct=eval(str);
		for (var i=0;i<oPrc.length;i++) {
			
                        oPrc[i].src=oPrct[i].a1_1;
			
		}
		
	})
}


function wz(){
	   var oZi=document.getElementsByClassName("bb");
	   ajax("wenzi1.txt",function(str){
	   	 var arr1=eval(str);
	   	 for(var i=0;i<arr1.length;i++){
	   	 	
	   	 	oZi[i].innerHTML=arr1[i].tt;
	   	 }
	   })
	
}
