$(window).scroll(function(){
	if($(window).scrollTop()>80){
//		$(".gotop").fadeIn(1000);
		$(".gotop").show();
	}else{
//		$(".gotop").fadeOut();
		$(".gotop").hide();
	}
})
$(".gotop").click(function(){
	$("html,body").animate({scrollTop:0},1000)
})


$(".liuyan-head>.fan").click(function(){
	$(".one").hide();
	$(".liuyan-head>.fan").hide();
	$(".liuyan-head>.shou").show();
})
$(".liuyan-head>.shou").click(function(){
	$(".one").show();
	$(".liuyan-head>.fan").show();
	$(".liuyan-head>.shou").hide();
})