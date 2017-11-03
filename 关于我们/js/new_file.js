function pic(){
	var ajax_pic=document.getElementsByClassName("ajax_pic");
	
	ajax("tu.txt",function(str){
		var arr=eval(str);
		ajax_pic[0].style.backgroundImage="url("+arr[0].pic+")";
		ajax_pic[1].src=arr[1].pic;
		ajax_pic[2].src=arr[2].pic;
		ajax_pic[3].style.backgroundImage="url("+arr[3].pic+")";
		ajax_pic[4].src=arr[4].pic;
		ajax_pic[5].src=arr[5].pic;
	})
}

function wen(){
	var aa=document.getElementsByClassName("ajax_txt");
	ajax("wen.txt",function(str){
		var arr=eval(str);
		for (var i=0;i<aa.length;i++) {
			 aa[i].innerHTML=arr[i].tt;
		}
	})
}
