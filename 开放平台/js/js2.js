function tt(){
			   	var oZw=document.getElementById("zhiwen");
			   	var oZuo=document.getElementById("zuo_1");
			   	var oYou=document.getElementById("you_1");
			    var oBox1=document.getElementById("box_1");	
			    var oBox2=document.getElementById("box_2");
			    var oBox3=document.getElementById("box_3");
			    var oBox4=document.getElementById("box_4");
			    var oBox5=document.getElementById("box_5");
			    var oBox_1=document.getElementsByClassName("box1");
			    var oJt=document.getElementById("jiantou");
			    var timer=null;
			
			    
			   
			   

	
			  oZw.onclick=function(){
			  	oJt.style.display="none";
				$("#zhiwen").fadeOut(1000,function(){
					    
						 $("#zuo_1").animate({left:-675},5000,function(){
						 	$("#fangzi").slideUp(2000,function(){
						 		 dong();
						 	});
					       
				      });
				         $("#you_1").animate({left:+1350},5000);
		              });
				 }
			
	          function dong(){	          
				timer = setInterval(function(){
			        if(oBox1.offsetLeft<100)
			        {
				           clearInterval(timer);
				           timer=setInterval(function(){
				           if(oBox2.offsetLeft>950)
				        {
				          clearInterval(timer); 
				          timer=setInterval(function(){
				          	if(oBox3.offsetLeft<100)
				          	{
				          	clearInterval(timer);
				          	timer=setInterval(function(){
				          	if(oBox4.offsetLeft>950)
				          	{
				          	clearInterval(timer);
				          	timer=setInterval(function(){
				             if(oBox5.style.display="block"){
				          		  clearInterval(timer);
				          		  timer=setInterval(function(){
				          		  if(oBox1.offsetLeft>600){
				          		  	clearInterval(timer);
				          		  	$("#box_5").fadeOut("slow");
				          		    $("#box1").fadeIn("slow");
				          		    $("#kuang").fadeOut("slow");
				          		  	}
				          	else{
				            oBox4.style.left =oBox4.offsetLeft-4+"px";
				            oBox4.style.top = oBox4.offsetTop-2+"px";
				            oBox4.style.width= oBox4.offsetWidth-3+"px";
				            oBox4.style.height= oBox4.offsetHeight-2+"px";   
				          		    
				          	oBox3.style.left =oBox3.offsetLeft+7+"px";
				            oBox3.style.top = oBox3.offsetTop-2+"px";
				            oBox3.style.width= oBox3.offsetWidth-4+"px";
				            oBox3.style.height= oBox3.offsetHeight-2+"px";	    
				          		    
				          	oBox2.style.left =oBox2.offsetLeft-4+"px";
				            oBox2.style.top = oBox2.offsetTop+2.5+"px";
				            oBox2.style.width= oBox2.offsetWidth-4+"px";
				            oBox2.style.height= oBox2.offsetHeight-1.4+"px";	    
				          	
				          	oBox1.style.left =oBox1.offsetLeft+7+"px";
				            oBox1.style.top = oBox1.offsetTop+3.5+"px";
				            oBox1.style.width= oBox1.offsetWidth-4+"px";
				            oBox1.style.height= oBox1.offsetHeight-2+"px";
				          		  	}
				          		  },30);
				          		}
				          	else{
				          		 $("#box_5").fadeIn("5000");
				          	}
				          	},30)
				          	
				          	}
				 else{
				          	oBox4.style.left =oBox4.offsetLeft+2+"px";
				            oBox4.style.top = oBox4.offsetTop+1.1+"px";
				            oBox4.style.width= oBox4.offsetWidth+2.4+"px";
				            oBox4.style.height= oBox4.offsetHeight+1.4+"px";
				          			
				      }			
				          	},20);
				          	}
				else{
				            oBox3.style.left =oBox3.offsetLeft-4+"px";
				            oBox3.style.top = oBox3.offsetTop+0.5+"px";
				            oBox3.style.width= oBox3.offsetWidth+2.4+"px";
				            oBox3.style.height= oBox3.offsetHeight+1.4+"px";	
				          	} 	
				          },20);			          
				          }
				else{
				     	oBox2.style.left =oBox2.offsetLeft+2+"px";
				        oBox2.style.top = oBox2.offsetTop-2.5+"px";
				        oBox2.style.width= oBox2.offsetWidth+2.4+"px";
				        oBox2.style.height= oBox2.offsetHeight+1.4+"px";
				      }
				           },20);        
			        }
		 	   else
			  {
				oBox1.style.left =oBox1.offsetLeft-4+"px";
				oBox1.style.top = oBox1.offsetTop-2+"px";
				oBox1.style.width= oBox1.offsetWidth+2.4+"px";
				oBox1.style.height= oBox1.offsetHeight+1.4+"px";
			  }					
			  },20);
			  }
	          
	        var oIm=document.getElementById("im") ; 
	        var  a=1;
				temer=setInterval(function(){
					oIm.src="img/平台/"+a+".jpg"
					a++;
					if(a==9)
					{
						a=1;
					}
				},2000);
			
			
			var oXz1=document.getElementById("box1_3");
	        var oXz2=document.getElementById("box1_4");  
            var oXz3=document.getElementById("box1_5");     
		    var oXz4=document.getElementById("box1_6");
		    var oXz1_1=document.getElementById("box1_3_1");
		    var oXz1_2=document.getElementById("box1_3_2");
		    var oXz2_1=document.getElementById("box1_4_1");
		    var oXz2_2=document.getElementById("box1_4_2");
		    var oXz3_1=document.getElementById("box1_5_1");
		    var oXz3_2=document.getElementById("box1_5_2");
		    var oXz4_1=document.getElementById("box1_6_1");
		    var oXz4_2=document.getElementById("box1_6_2");
		    
		    oXz1.onmouseover=function(){
		    	oXz1_1.style.transform="rotate(360deg)";
		    	oXz1_2.style.transform="rotate(360deg)";
		    }
		    oXz1.onmouseout=function(){
		    	oXz1_1.style.transform="rotate(0deg)";
		    	oXz1_2.style.transform="rotate(0deg)";
		    	
		    }
		    
		    oXz2.onmouseover=function(){
		    	oXz2_1.style.transform="rotate(360deg)";
		    	oXz2_2.style.transform="rotate(360deg)";
		    }
		    oXz2.onmouseout=function(){
		    	oXz2_1.style.transform="rotate(0deg)";
		    	oXz2_2.style.transform="rotate(0deg)";
		    }	
		    oXz3.onmouseover=function(){
		    	oXz3_1.style.transform="rotate(360deg)";
		    	oXz3_2.style.transform="rotate(360deg)";
		    }
		    oXz3.onmouseout=function(){
		    	oXz3_1.style.transform="rotate(0deg)";
		    	oXz3_2.style.transform="rotate(0deg)";
		    }	
		    oXz4.onmouseover=function(){
		    	oXz4_1.style.transform="rotate(360deg)";
		    	oXz4_2.style.transform="rotate(360deg)";
		    }
		    oXz4.onmouseout=function(){
		    	oXz4_1.style.transform="rotate(0deg)";
		    	oXz4_2.style.transform="rotate(0deg)";
		    	
		    }
		    
	   
		    
		   }