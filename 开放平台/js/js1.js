function zz(){
				var oUl =document.getElementById("ul1");
			    var timer=null ;
			  
			function hello(){
				clearInterval(timer);
				timer = setInterval(function(){
					if(oUl.offsetLeft == -1350)
					{
						clearInterval(timer);	
					}
					if(oUl.offsetLeft == -2700)
					{
						clearInterval(timer);
					}
					if(oUl.offsetLeft== -4050)
					{
						clearInterval(timer);
					}
					if(oUl.offsetLeft==-5400)
					{
						clearInterval(timer);  
					}
					if(oUl.offsetLeft==-6750)
					{
						clearInterval(timer);
						oUl.style.left = "0px";
					}
					oUl.style.left = oUl.offsetLeft-1350+"px";
				},5);
			}
			setInterval(function(){
				hello();
			},2000);			
			var oBtn=document.getElementById("btn");
			var oTu1=document.getElementById("jiejue_tu1");
			var oTu2=document.getElementById("jiejue_tu2");
			var oTu3=document.getElementById("jiejue_tu3");
			var oTu4=document.getElementById("jiejue_tu4");		
			oBtn.onmousedown=function(){
				oTu1.style.borderRadius="0 0 0 0 ";
				oTu2.style.borderRadius="0 0 0 0 ";
				oTu3.style.borderRadius="0 0 0 0 ";
				oTu4.style.borderRadius="0 0 0 0 ";
			}			
            oBtn.onmouseup=function(){
            	oTu1.style.borderRadius="0 200px 0 200px";
            	oTu2.style.borderRadius="200px 0 200px 0";
            	oTu3.style.borderRadius="200PX 0 200PX 0";
            	oTu4.style.borderRadius="0 200px 0 200px";
            }			
			}