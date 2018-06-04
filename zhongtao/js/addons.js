//ios
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
// //alert(navigator.userAgent); 
// 
// //add a new meta node of viewport in head node
//	head = document.getElementsByTagName('head');
//	viewport = document.createElement('meta');
//	viewport.name = 'viewport';
//	viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
//	head.length > 0 && head[head.length - 1].appendChild(viewport);    
// 
//}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);  
//  window.location.href ="iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent); 
//  window.location.href ="Android.html";
//} else {
//  window.location.href ="pc.html";
//};
$(function() {
	
	//页面不足一屏，铺满一屏
	$('.layout').css('min-height',$(window).height());

	$(".open").click(function(){
	$(".dialogBlack").show();
	});
	
	$(".ok").click(function(){
	$(".dialogBlack").hide();
});


   $(".rule").click(function(){
   	$(".dialogWhite").show();
   });
   $(".del").click(function(){
   	$(".dialogWhite").hide();
   });

   $(".shareRule").click(function(){
   	$(".dialogWhite").show();
   });
   $(".del").click(function(){
   	$(".dialogWhite").hide();
   });
	
	$(".sharePic").click(function(){
   	$(".dialogBlack").show();
   });

   $(".secondOk").click(function(){
	$(".dialogBlack").hide();
});

   $(".tabList li").click(function(){
   	  var index = $(this).index();
   	  $(this).addClass("liHover").siblings().removeClass("liHover");
   	  $(".tabList-1 img").eq(index).show().siblings().hide();
   });
   
   $(".ansTabList li").click(function(){
   	  $(this).addClass("ansHover").siblings().removeClass("ansHover");
   });
});
	
