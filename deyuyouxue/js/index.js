(function($){
	
	
//	$("#liXia").mouseenter(function(){
//		$(".divmenu").show();
//	});
//	$(".divmenu").mouseleave(function(){
//		$(".divmenu").hide();
//	});
//	
	
	var liXia = document.getElementById("liXia");
	var dmA = document.getElementsByClassName("dmA")[0];
	var dmaCon = document.getElementById("dmaCon");
	var body = document.getElementsByTagName("body");
	
	liXia.onmouseenter = function(){		
		dmA.style.display = "block";
		dmaCon.style.display = "block";
        
	};
	dmA.onmouseleave = function(){
//		var divmenu = document.getElementsByClassName("divmenu")[0];
//		divmenu.style.display = "none";
        dmA.style.display = "none";
		dmaCon.style.display = "none";
	};
})(jQuery);
