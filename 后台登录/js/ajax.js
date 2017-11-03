function ajax (url,funsc,){
						
					if(window.XMLHttpRequest){
						var oAjax = new XMLHttpRequest;
					}else{
						var oAjax = new ActiveXObject("microsoft.XMLHTTP");
					}
				
				oAjax.open("GET",url,true);
				
				oAjax.send();
					
				oAjax.onreadystatechange = function(){
							
							if(oAjax.readyState==4){
							
								if(oAjax.status==200){
									funsc(oAjax.responseText);
								}else{
									alert(oAjax.status);
								}
							}
						}
					}