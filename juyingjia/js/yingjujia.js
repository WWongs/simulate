(function($){
	var menuFlag = 0;
	$("#menu").click(function(){
		if(menuFlag == 0){
//			alert(1);
			$("#menu .menuImg").attr("src","images/menu1.png");
			menuFlag = 1;
			$(".listMenu").show();
		}else{
			$("#menu .menuImg").attr("src","images/menu.png");
			menuFlag = 0;
			$(".listMenu").hide();
		}
	});
	
	$("#listUl li").click(function(){
		$(this).addClass("liHover").siblings().removeClass("liHover");
	});
	
	
})(jQuery);
